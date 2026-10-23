// 메뉴 데이터. 가격·이름을 바꾸려면 이 파일만 수정하면 된다.
// price: 원 단위 숫자. 가격이 둘이면 배열로 쓴다.
// photo: menu/dishes/<photo>.webp
const MENU = {
  currency: { ja: 'ウォン', en: ' won', zh: '韩元' },

  brand: {
    sub: { ja: 'チュンダム', en: 'CHUNDAM', zh: '春談' },
    tagline: {
      ja: '春の物語がとどまる場所',
      en: 'A place where the story of spring lingers',
      zh: '春天故事停驻之处',
    },
    intro: {
      ja: 'チュンダムは、そば本来の味わいをもっとも誠実にお届けします。やさしい一杯、そして長く心に残る物語。',
      en: 'At Chundam, we present the true taste of buckwheat with sincerity. A light yet satisfying meal, and a story that stays with you.',
      zh: '春談以最真诚的方式呈现荞麦本真的风味。清淡却满足的一餐，以及回味悠长的故事。',
    },
  },

  sections: [
    {
      title: { ja: 'そば', en: 'Buckwheat Noodles', zh: '荞麦面' },
      items: [
        { photo: 'shiitake', price: 14000,
          name: { ja: 'しいたけえごま油そば', en: 'Shiitake Perilla Oil Buckwheat Noodles', zh: '香菇紫苏油荞麦面' } },
        { photo: 'pyongyang', price: 14000,
          name: { ja: '平壌冷麺', en: 'Pyongyang Cold Buckwheat Noodles', zh: '平壤冷面' } },
        { photo: 'bibim', price: 14000,
          name: { ja: 'ビビンそば', en: 'Bibim Buckwheat Noodles', zh: '拌荞麦面' } },
        { photo: 'warm', price: 11000,
          name: { ja: '温そば', en: 'Warm Noodles', zh: '温面' } },
      ],
    },
    {
      title: { ja: '季節のそば', en: 'Seasonal Buckwheat Noodles', zh: '季节荞麦面' },
      items: [
        { photo: 'egg', price: 13000,
          name: { ja: '卵の温そば', en: 'Egg Warm Noodles', zh: '鸡蛋温面' } },
        { photo: 'bulgogi', price: 16000,
          name: { ja: '牛プルコギ温そば', en: 'Beef Bulgogi Warm Noodles', zh: '牛肉烤肉温面' } },
        { photo: 'cold', price: 16000,
          name: { ja: '冷そば', en: 'Cold Buckwheat Soba', zh: '冷荞麦面' } },
      ],
    },
    {
      title: { ja: '鍋料理', en: 'Hot Pot', zh: '火锅' },
      items: [
        { photo: 'hotpot', price: 37000,
          name: { ja: 'ごぼうきのこプルコギ鍋', en: 'Burdock Mushroom Bulgogi Hot Pot', zh: '牛蒡蘑菇烤肉火锅' },
          desc: {
            ja: 'ごぼうのやさしい香りと甘辛いプルコギが調和した鍋料理です。丁寧に取っただしに牛肉と新鮮な野菜をたっぷり入れ、煮込むほどに食材の旨みが深まります。',
            en: 'A comforting hot pot featuring the gentle aroma of burdock and sweet savory bulgogi. Simmered with carefully prepared broth, tender beef, and fresh vegetables, it grows richer and more flavorful as it boils.',
            zh: '牛蒡的清香与香甜烤牛肉相互融合。以精心熬制的高汤为底，加入牛肉与新鲜蔬菜慢慢炖煮，越煮越能感受到食材交融出的浓郁鲜味。',
          } },
      ],
    },
    {
      title: { ja: '一品料理', en: 'Side Dishes', zh: '配菜' },
      items: [
        { photo: 'jowl', price: 17000,
          name: { ja: '豚トロ', en: 'Pork Jowl', zh: '猪颈肉' } },
        { photo: 'jowl-suyuk', price: 33000,
          name: { ja: '豚トロのスユクと浅漬けキムチ', en: 'Pork Jowl Suyuk with Fresh Kimchi', zh: '猪颈肉水煮配现拌泡菜' } },
        { photo: 'octo-jowl', price: 17000,
          name: { ja: 'タコ豚トロ', en: 'Octopus Pork Jowl', zh: '章鱼猪颈肉' } },
        { photo: 'octo-jowl-suyuk', price: 33000,
          name: { ja: 'タコ豚トロのスユクと浅漬けキムチ', en: 'Octopus & Pork Jowl Suyuk with Fresh Kimchi', zh: '章鱼猪颈肉水煮配现拌泡菜' } },
        { photo: 'eel', price: 18000,
          name: { ja: '丸ごと穴子天ぷら', en: 'Whole Fried Conger Eel', zh: '整条炸海鳗' } },
        { photo: 'tempura', price: 20000,
          name: { ja: '盛り合わせ天ぷら', en: 'Assorted Seasonal Tempura', zh: '什锦天妇罗' } },
        { photo: 'gimbap', price: [8000, 16000],
          name: { ja: 'そばキンパ', en: 'Buckwheat Gimbap', zh: '荞麦紫菜包饭' } },
      ],
    },
  ],

  features: [
    {
      title: { ja: '100%純そば、自家製麺', en: '100% Pure Buckwheat, House-made Noodles', zh: '100%纯荞麦, 自家制面' },
      desc: {
        ja: '毎朝店内で100%純そば麺を仕込みます。',
        en: 'Every morning, we knead and prepare 100% pure buckwheat noodles in-house.',
        zh: '每天早晨在店内亲自揉面并制作100%纯荞麦面。',
      },
    },
    {
      title: { ja: '自家搾油', en: 'House-pressed Perilla & Sesame Oil', zh: '自家压榨香油与紫苏油' },
      desc: {
        ja: '店内で搾るごま油とえごま油で、より深い香ばしさを引き出します。',
        en: 'Perilla oil and sesame oil are pressed in-house for a deeper, richer aroma.',
        zh: '在店内亲自压榨，带来更加浓郁醇厚的香气。',
      },
    },
  ],

  hours: {
    title: { ja: '営業時間', en: 'Business Hours', zh: '营业时间' },
    open: '11:00 - 21:00',
    lastOrder: { label: { ja: 'ラストオーダー', en: 'Last Order', zh: '最后点单' }, value: '20:30' },
    breakTime: { label: { ja: '休憩時間', en: 'Break Time', zh: '休息时间' }, value: '14:30 - 17:00' },
  },

  closing: {
    ja: '良い食材を丁寧に仕込み、一杯一皿に真心を込めてご提供します。',
    en: 'We prepare every dish with care, using good ingredients and heartfelt sincerity.',
    zh: '以好食材细心料理，把真心装进每一碗、每一盘。',
  },
};
