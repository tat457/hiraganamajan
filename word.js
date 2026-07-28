// 初期表示用（フォールバック）
let DICTIONARY = ["さる", "ねこ", "いぬ", "くま", "さかな", "りんご", "くるま"];

// ゲーム起動時にネット上から約5,000〜10,000語のひらがな辞書を自動ロード
(async function loadLargeDictionary() {
    try {
        // オープンソースのひらがな単語リストを取得
        const res = await fetch("https://raw.githubusercontent.com/mdehaan/Japanese-Word-List/master/japanese_words_hiragana.txt");
        const text = await res.text();
        
        // 2〜5文字のひらがな単語をフィルター抽出
        const loadedWords = text.split('\n')
            .map(w => w.trim())
            .filter(w => w.length >= 2 && w.length <= 5 && /^[\u3040-\u309F]+$/.test(w));

        if (loadedWords.length > 0) {
            DICTIONARY = loadedWords;
            console.log(`巨大辞書の読み込み完了: 全 ${DICTIONARY.length} 語`);
        }
    } catch (err) {
        console.warn("外部辞書の読み込みに失敗したため、デフォルト辞書を使用します:", err);
    }
})();
