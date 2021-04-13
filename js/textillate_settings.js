$('#textillate').textillate({
  selector: '.text', // 選擇動畫清單，裡面子元素產生進場、離場動畫
  loop: true, // 循環播放
  initialDelay: 500, // 動畫開始前的延遲時間，毫秒
  autoStart: true, // 動畫自動開始
  type: 'char', // char 顯示單位字母，word 為一句話
  // 進場設定
  in: {
    effect: 'zoomIn', // 進場動畫效果
    delayScale: 1, // 延遲時間的乘數
    delay: 300, // 每個文字之間的延遲時間，毫秒
    sync: false, // false 為同步逐一顯示，true 為非同步一次顯示
    shuffle: true, // 是否亂數顯示
    reverse: false, // 是否反向顯示
    callback: function () {
      // 進場時的回呼函式
    }
  },
  // 離場設定
  out: {
    effect: 'zoomOut',
    delayScale: 1,
    delay: 50,
    sync: false,
    shuffle: true,
    reverse: false,
    callback: function () {}
  }
})
