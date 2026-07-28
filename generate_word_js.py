import json
import urllib.request

# オープンソースのひらがな単語リスト(JMDict/日本語辞書データ等)を取得
print("辞書データをダウンロード中...")
url = "https://raw.githubusercontent.com/mdehaan/Japanese-Word-List/master/japanese_words_hiragana.txt"

try:
    with urllib.request.urlopen(url) as response:
        text = response.read().decode('utf-8')
    
    # 2文字〜5文字のひらがな単語のみを抽出・重複排除
    words = []
    for line in text.splitlines():
        word = line.strip()
        # ひらがなのみ、かつ2〜5文字の単語を対象にする
        if 2 <= len(word) <= 5 and all('ぁ' <= c <= 'ん' for c in word):
            words.append(word)
    
    words = list(set(words))[:5000] # 5000語に絞り込み

    # word.js として書き出し
    js_content = f"// 自動生成されたひらがな単語辞書（{len(words)}語）\nconst DICTIONARY = {json.dumps(words, ensure_ascii=False, indent=4)};"
    
    with open("word.js", "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print(f"成功！ {len(words)} 語の word.js を作成しました！")

except Exception as e:
    print("エラーが発生しました:", e)
