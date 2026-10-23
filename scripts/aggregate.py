"""네이버 리뷰 원문(JSON)을 월별 키워드 빈도로 집계해 reviews/ 아래에 쓴다.

입력: [{"date": "YYYY-MM-DD", "text": "..."}, ...]  (원문은 저장소에 올리지 않는다)
출력: reviews/index.json, reviews/YYYY-MM.json

사용: python scripts/aggregate.py <raw.json>
필요: pip install kiwipiepy
"""
import json
import sys
from collections import Counter, defaultdict
from pathlib import Path

from kiwipiepy import Kiwi

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "reviews"

# 식당 리뷰에서 의미가 없는 흔한 명사
STOP = {
    "것", "곳", "수", "때", "거", "저", "제", "이", "그", "더", "번", "분", "점", "집", "말",
    "정도", "생각", "느낌", "사람", "시간", "하나", "다음", "오늘", "어제", "진짜", "정말",
    "그냥", "조금", "너무", "항상", "리뷰", "방문", "식당", "음식", "메뉴", "주문", "가게",
    "마곡", "춘담", "본점", "여기", "저희", "우리", "자체", "이번", "처음", "최고", "완전",
    "요", "듯", "중", "등", "내", "후", "전", "안", "밖", "위", "아래", "옆", "앞", "뒤",
}

kiwi = Kiwi()


def keywords(text: str):
    """명사(NNG/NNP)와 형용사 어간(VA)을 뽑는다. 한 글자 명사는 버린다."""
    out = []
    for tok in kiwi.tokenize(text):
        if tok.tag in ("NNG", "NNP"):
            if len(tok.form) >= 2 and tok.form not in STOP:
                out.append(tok.form)
        elif tok.tag == "VA":
            form = tok.form + "다"  # 맛있/VA -> 맛있다
            if form not in ("있다", "없다", "같다", "그렇다", "이렇다", "어떻다"):
                out.append(form)
    return out


def main(raw_path: str):
    reviews = json.loads(Path(raw_path).read_text(encoding="utf-8"))
    by_month = defaultdict(list)
    for r in reviews:
        text = (r.get("text") or "").strip()
        if not text or not r.get("date"):
            continue
        by_month[r["date"][:7]].append(text)

    OUT.mkdir(exist_ok=True)
    for old in OUT.glob("*.json"):
        old.unlink()

    index = []
    for month in sorted(by_month, reverse=True):
        texts = by_month[month]
        if len(texts) < 5:  # 방문일을 잘못 고른 리뷰 몇 건이 만든 달은 버린다
            continue
        counter = Counter()
        for t in texts:
            counter.update(set(keywords(t)))  # 리뷰 1건당 1회만 센다
        words = [[w, n] for w, n in counter.most_common(150) if n >= 2] or counter.most_common(50)
        (OUT / f"{month}.json").write_text(
            json.dumps({"month": month, "count": len(texts), "words": words}, ensure_ascii=False),
            encoding="utf-8",
        )
        index.append({"month": month, "count": len(texts)})
        print(f"{month}: {len(texts)}건, 키워드 {len(words)}개, 상위 {[w for w, _ in words[:5]]}")

    (OUT / "index.json").write_text(json.dumps({"months": index}, ensure_ascii=False), encoding="utf-8")
    print(f"총 {sum(m['count'] for m in index)}건, {len(index)}개월")


if __name__ == "__main__":
    main(sys.argv[1])
