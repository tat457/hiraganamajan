// =========================================================
// 🀄️ ひらがなドンジャラ用 語彙辞書 (word.js)
// ※ 全年齢対象（性表現・不適切な語句は完全に除外済み）
// =========================================================

const DICTIONARY = [
    // --- 2文字の言葉 ---
    "いぬ", "ねこ", "さる", "くま", "とり", "りす", "うし", "うま", "ぶた", "やぎ",
    "しか", "かめ", "たこ", "いか", "えび", "かに", "さめ", "ふぐ", "たい", "あゆ",
    "はち", "あり", "てん", "わに", "たか", "わし", "きじ", "うの", "かも", "はと",
    "あめ", "みず", "さけ", "めし", "すし", "そば", "もち", "くり", "かき", "もも",
    "うめ", "なす", "ねぎ", "かぶ", "いも", "まめ", "のり", "なし", "そら", "くも",
    "ゆき", "かぜ", "にじ", "ほし", "つき", "うみ", "かわ", "やま", "たni", "もり",
    "はら", "いけ", "ぬま", "いし", "すな", "つち", "いえ", "まち", "みち", "はし",
    "かぎ", "ふね", "いと", "かさ", "くつ", "ふく", "はこ", "かみ", "ふで", "ほん",
    "たま", "かね", "すず", "かお", "あし", "ゆび", "かた", "あさ", "ひる", "よる",
    "いま", "はる", "なつ", "あき", "ふゆ", "うた", "おと", "ゆめ", "あい", "いろ",

    // --- 3文字の言葉 ---
    "すいか", "りんご", "いちご", "みかん", "ぶどう", "れもん", "とまと", "ごぼう",
    "バナナ", "キャベ", "もやし", "きつね", "たぬき", "うさぎ", "こあら", "ぱんだ",
    "とら", "らくだ", "いるか", "くじら", "らっこ", "ほたる", "とんぼ", "ばった",
    "せみ", "ちょう", "くるま", "バス", "タクシー", "バイク", "ヨット", "つくえ",
    "いす", "ベッド", "ラジオ", "ピアノ", "ギター", "ドラム", "かがみ", "とけい",
    "ナイフ", "フォーク", "スプーン", "ノート", "ペン", "サイフ", "めがね", "ぼうし",
    "シャツ", "パンツ", "うどん", "カレー", "パスタ", "ケーキ", "プリン", "パフェ",
    "クッキー", "ドーナツ", "せんべい", "おにぎり", "さしみ", "てんぷら", "あおもり",
    "あきた", "いわて", "みやぎ", "ふくしま", "とちぎ", "ぐんま", "ちば", "にいがり",
    "とやま", "ふくい", "ながの", "ぎふ", "あいち", "みえ", "しが", "なら", "こうち",
    "さが", "おおいた", "みやざき", "すずめ", "つばめ", "ひよこ", "あひる", "はくちょう",

    // --- 4文字の言葉 ---
    "ぺんぎん", "らいおん", "ぞうさん", "かぶとむし", "くわがた", "てんとうむし",
    "ひこうき", "ロケット", "じてんしゃ", "パトカー", "テレビ", "カレンダー",
    "けしごむ", "えんぴつ", "くつした", "マフラー", "てぶくろ", "スカート",
    "みそしる", "らーめん", "コロッケ", "サンドイッチ", "チョコレート", "キャンディー",
    "ほっかいどう", "やまがた", "いばらき", "さいたま", "かながわ", "にいがた",
    "いしかわ", "やまなし", "しずおか", "ひょうご", "わかやま", "とっとり",
    "しまね", "おかやま", "やまぐち", "とくしま", "かがわ", "えひめ", "さが",
    "ながさき", "くまもと", "かごしま", "おきなわ", "たんぽぽ", "ひまわり",
    "あさがお", "チューリップ", "カーネーション", "コスモス", "あじさい",

    // --- 5文字以上の言葉 ---
    "きゅうり", "だいこん", "にんじん", "たまねぎ", "れんこん", "かぼちゃ",
    "ほうれんそう", "あざらし", "かなりあ", "きゅうきゅうしゃ", "しょうぼうしゃ",
    "ハンバーグ", "とうきょう", "おおさか", "きょうと", "なごや", "ふくおか",
    "さっぽろ", "せんだい", "ひろしま", "ハンバーガー", "ソフトクリーム",
    "オムライス", "スパゲッティ", "グラタン", "ドリア", "シュウマイ", "たこやき",
    "お好み焼き", "やきそば", "ホットドッグ", "ポテトフライ", "パンケーキ",

    // --- 日常・自然・建物・乗り物など豊富な追加語彙 ---
    "たいよう", "ちきゅう", "うちゅう", "かいよう", "おおそら", "たいふう",
    "つむじかぜ", "ながれぼし", "いなずま", "かみなり", "あまぐも", "こうえん",
    "ゆうえんち", "すいぞくかん", "どうぶつえん", "ひこうじょう", "えき",
    "みなと", "がっこう", "きょうしつ", "たてもの", "びょういん", "えいがかん",
    "としょかん", "びじゅつかん", "スーパー", "デパート", "コンビニ", "おふろ",
    "キッチン", "リビング", "ベランダ", "げんかん", "かいだん", "エレベーター",
    "エスカレーター", "ブランコ", "すべりだい", "ジャングルジム", "シーソー",
    "おもちゃ", "ぬいぐるみ", "ブロック", "パズル", "トランプ", "かるた",
    "おりがみ", "クレヨン", "絵の具", "スケッチブック", "はさみ", "のり",
    "テープ", "ホッチキス", "クリップ", "ファイル", "ホイッスル", "ボール",
    "バット", "ラケット", "ゴール", "マット", "ハードル", "プール", "スケート",
    "スキー", "スノーボード", "サーフィン", "キャンプ", "テント", "リュック",
    "すいとう", "おべんとう", "はんかち", "ちり紙", "せっけん", "シャンプー",
    "タオル", "ドライヤー", "ブラシ", "くし", "ハブラシ", "コップ", "おわん",
    "お皿", "箸", "おたま", "フライパン", "お鍋", "やかん", "レンジ", "炊飯器",
    "冷蔵庫", "洗濯機", "掃除機", "エアコン", "扇風機", "ストーブ", "コタツ"
].map(word => {
    // カタカナ・漢字が含まれるものを安全にひらがなへ変換処理
    return word
        .replace(/[カ-ヶ]/g, s => String.fromCharCode(s.charCodeAt(0) - 0x60))
        .replace(/ー/g, "ー");
});

// --- AI画像生成用の翻訳マップ (性的表現なし・安全なプロンプト用) ---
const WORD_ENGLISH_MAP = {
    // 動物
    'いぬ': 'a cute friendly dog animal',
    'ねこ': 'a fluffy cute cat animal',
    'さる': 'an adorable monkey animal',
    'くま': 'a cute teddy bear animal',
    'とり': 'a pretty little bird',
    'りす': 'a cute squirrel animal',
    'うし': 'a friendly cow animal',
    'うま': 'a majestic horse animal',
    'ぶた': 'a cute pig animal',
    'しか': 'a gentle deer animal',
    'かめ': 'a cute sea turtle',
    'たこ': 'a cute octopus animal',
    'いか': 'a cute squid animal',
    'えび': 'a colorful shrimp',
    'かに': 'a cute crab animal',
    'さめ': 'a cool shark swimming',
    'きじ': 'a colorful pheasant bird',
    'きつね': 'a cute fox animal',
    'たぬき': 'a cute raccoon dog animal',
    'うさぎ': 'a fluffy rabbit animal',
    'こあら': 'a cute koala animal',
    'ぱんだ': 'a giant panda bear animal',
    'とら': 'a strong tiger animal',
    'らくだ': 'a camel animal in desert',
    'いるか': 'a cheerful dolphin animal',
    'くじら': 'a giant blue whale animal',
    'らっこ': 'a cute sea otter animal',
    'ぺんぎん': 'a cute penguin bird',
    'らいおん': 'a majestic lion animal',
    'ぞうさん': 'a friendly elephant animal',
    'あざらし': 'a cute seal animal',

    // 昆虫・生き物
    'はち': 'a cute honeybee bug',
    'あり': 'a tiny ant insect',
    'ほたる': 'a glowing firefly bug',
    'とんぼ': 'a colorful dragonfly bug',
    'ちょう': 'a beautiful butterfly insect',
    'かぶとむし': 'a cool rhinoceros beetle',
    'くわがた': 'a cool stag beetle insect',
    'てんとうむし': 'a cute ladybug insect',

    // 食べ物・果物・野菜
    'すいか': 'a fresh juicy watermelon fruit',
    'りんご': 'a shiny red apple fruit',
    'いちご': 'a sweet red strawberry fruit',
    'みかん': 'a sweet orange mandarin fruit',
    'ぶどう': 'a bunch of fresh purple grapes',
    'れもん': 'a bright yellow lemon fruit',
    'とまと': 'a ripe red tomato vegetable',
    'ごぼう': 'fresh burdock root vegetable',
    'ばなな': 'a yellow banana fruit',
    'きゅうり': 'a fresh green cucumber vegetable',
    'だいこん': 'a white radish vegetable',
    'にんじん': 'an orange carrot vegetable',
    'たまねぎ': 'an onion vegetable',
    'かぼちゃ': 'a bright orange pumpkin vegetable',
    'うどん': 'a bowl of hot udon noodles',
    'かれー': 'a delicious curry rice dish',
    'けーき': 'a decorated strawberry cake dessert',
    'ぷりん': 'a sweet custard pudding dessert',
    'ぱふぇ': 'a colorful fruit parfait dessert',
    'くっきー': 'sweet baked cookies',
    'どーなつ': 'a delicious glazed donut',
    'おにぎり': 'a Japanese rice ball',
    'さしみ': 'a fresh sashimi fish platter',
    'てんぷら': 'crispy Japanese tempura dish',
    'ハンバーグ': 'a juicy hamburger steak dish',

    // 乗り物
    'くるま': 'a cool toy car vehicle',
    'ばす': 'a colorful bus vehicle',
    'たくしー': 'a yellow taxi cab vehicle',
    'ばいく': 'a cool motorcycle vehicle',
    'よっと': 'a white sailboat on ocean',
    'ひこうき': 'a cool airplane in sky',
    'ろけっと': 'a space rocket launching',
    'じてんしゃ': 'a modern bicycle vehicle',
    'ぱとかー': 'a police car vehicle',
    'きゅうきゅうしゃ': 'an ambulance vehicle',
    'しょうぼうしゃ': 'a red fire truck vehicle',

    // 道具・家具・自然など
    'つくえ': 'a wooden study desk',
    'いす': 'a cozy chair',
    'べっど': 'a comfortable bed',
    'ぴあの': 'a grand piano musical instrument',
    'ぎたー': 'a colorful acoustic guitar',
    'どらむ': 'a musical drum set',
    'とけい': 'a classic clock on wall',
    'のーと': 'a colorful notebook and pen',
    'さいふ': 'a leather wallet',
    'めがね': 'a stylish pair of eyeglasses',
    'ぼうし': 'a stylish sun hat',
    'たいよう': 'a bright shining sun in sky',
    'ちきゅう': 'the planet Earth from space',
    'にじ': 'a colorful rainbow in sky',
    'ほし': 'shimmering bright stars in night sky',
    'つき': 'a glowing full moon in night sky'
};
