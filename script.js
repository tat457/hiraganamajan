// --- 1. 辞書の準備 ---
let dictionary = new Set();
let isDictionaryLoaded = false;

// 外部の大型辞書JSONをロード
fetch('words.json')
  .then(response => response.json())
  .then(data => {
    dictionary = new Set(data);
    isDictionaryLoaded = true;
    console.log("広辞苑レベルの辞書を読み込みました！語彙数:", dictionary.size);
  })
  .catch(error => {
    console.error("辞書データの読み込みに失敗しました:", error);
  });

// --- 2. 出現カードやゲーム変数 ---
const charPool = [
  ..."あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわん".split(''),
  ..."あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもらりるれろん".split(''),
  ..."あいうえおかきくけこさしすせそん".split('')
];

let deck = [];
let hand = [];
let discards = [];
let hasDrawn = false;
let draggedIndex = null;

// --- 3. ゲーム機能（関数の定義） ---

function initGame() {
  deck = [...charPool].sort(() => Math.random() - 0.5);
  hand = [];
  discards = [];
  hasDrawn = false;

  for (let i = 0; i < 8; i++) {
    hand.push(deck.pop());
  }

  updateUI();
  showMessage("ゲーム開始！山札から1枚引いてね。");
}

function updateUI() {
  document.getElementById('deck-count').innerText = deck.length;
  document.getElementById('draw-btn').disabled = hasDrawn || deck.length === 0;

  const handEl = document.getElementById('hand');
  handEl.innerHTML = '';
  hand.forEach((char, index) => {
    const tile = document.createElement('div');
    tile.className = 'tile';
    if (hasDrawn && index === hand.length - 1) tile.classList.add('drawn');
    tile.innerText = char;
    tile.draggable = true;

    tile.onclick = () => discardTile(index);

    tile.ondragstart = (e) => { draggedIndex = index; };
    tile.ondragover = (e) => e.preventDefault();
    tile.ondrop = (e) => {
      e.preventDefault();
      if (draggedIndex !== null && draggedIndex !== index) {
        const temp = hand[draggedIndex];
        hand[draggedIndex] = hand[index];
        hand[index] = temp;
        updateUI();
      }
    };

    handEl.appendChild(tile);
  });

  const discardEl = document.getElementById('discard');
  discardEl.innerHTML = '';
  discards.forEach(char => {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.innerText = char;
    discardEl.appendChild(tile);
  });
}

function drawTile() {
  if (hasDrawn || deck.length === 0) return;
  hand.push(deck.pop());
  hasDrawn = true;
  document.getElementById('game-status').innerText = "1枚捨ててください";
  showMessage("コマを1枚引きました。いらないコマをクリックして捨ててください。");
  updateUI();
}

function discardTile(index) {
  if (!hasDrawn) {
    showMessage("先に山札から1枚引いてね！");
    return;
  }
  const discarded = hand.splice(index, 1)[0];
  discards.push(discarded);
  hasDrawn = false;
  document.getElementById('game-status').innerText = "自分の番";
  showMessage(`「${discarded}」を捨てました。`);
  updateUI();
}

function canFormWords(str) {
  if (str.length === 0) return [];
  
  for (let len = Math.min(str.length, 6); len >= 2; len--) {
    const prefix = str.substring(0, len);
    if (dictionary.has(prefix)) {
      const rest = canFormWords(str.substring(len));
      if (rest !== null) {
        return [prefix, ...rest];
      }
    }
  }
  return null;
}

function checkWin() {
  if (!isDictionaryLoaded) {
    showMessage("⏳ 辞書データを読み込み中です。少し待ってからもう一度押してね！");
    return;
  }

  if (hasDrawn) {
    showMessage("手札が9枚あります。1枚捨てて8枚にしてください！");
    return;
  }

  const currentHandStr = hand.join('');
  const wordList = canFormWords(currentHandStr);

  if (wordList) {
    showMessage(`🎉 おめでとう！上がりです！【完成した単語: ${wordList.join(' / ')}】`);
  } else {
    showMessage("❌ まだ手札全体で単語が作れていません。並び順を変えるか、コマを入れ替えてみよう！");
  }
}

function showMessage(text) {
  document.getElementById('message').innerText = text;
}

// 初期化実行
initGame();
