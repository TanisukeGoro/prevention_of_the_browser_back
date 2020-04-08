chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  window.onbeforeunload = function() {
    return 'このページから離れますか？';
  };
  return true;
});