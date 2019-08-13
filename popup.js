const elm = document.getElementById('checkbox');

chrome.storage.local.get('availability', function (value) {

  if (value.availability == 'enable') {
    elm.checked = true;
  } else if (value.availability == 'disable') {
    elm.checked = false;
  }

});


elm.addEventListener('click',function(){

  if(elm.checked){
    chrome.storage.local.set({'availability':'enable'});
  }else{
    chrome.storage.local.set({'availability':'disable'});
  }

});
