# chundam-menu

춘담(春談) QR 메뉴판. 언어별 QR이 각 경로로 연결되고, 해당 언어의 메뉴판 이미지를 보여준다.

| 언어 | 경로 | 이미지 |
|---|---|---|
| 일본어 | `/ja` | `menu/ja.webp` |
| 영어 | `/en` | `menu/en.webp` |
| 중국어 | `/zh` | `menu/zh.webp` |

`/`로 들어오면 브라우저 언어로 자동 분기한다(일본어·중국어 외에는 영어). 하단 바에서 언어를 바꿀 수 있다.

## 메뉴 수정

같은 파일명으로 `menu/` 아래 이미지를 교체하고 push하면 Vercel이 자동 배포한다.

```sh
cwebp -q 85 new-menu.png -o menu/ja.webp
```

## 구조

빌드 없는 정적 사이트. `index.html` 하나가 경로를 읽어 이미지를 고르고, `vercel.json`의 rewrite가 `/ja`·`/en`·`/zh`를 `index.html`로 보낸다.
