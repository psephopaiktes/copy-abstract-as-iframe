let availability = '';

chrome.storage.local.get('availability', function (value) {
  availability = value.availability;
});

document.addEventListener('copy', function(e){

  // 無効設定の場合はなにもしない
  if(availability == 'disable'){ return; }

  // 元のコピーテキストを取得
  var copied = window.getSelection().toString();

  // 不要なURLテキストを削除
  copied = copied.replace( /https:\/\/share.goabstract.com\//g , '' ) ;
  copied = copied.replace( /\?.*/g , '' ) ;

  // iframeテキストを追加
  copied = '<iframe src="https://app.goabstract.com/embed/'+copied+'" width="320" height="320" frameborder="0"></iframe>';

  // コピーテキストを書き換え
  e.clipboardData.setData('text/plain', copied);
  e.preventDefault();

});
