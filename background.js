chrome.browserAction.onClicked.addListener(function(tab) { 
  chrome.tabs.sendMessage(
    tab.id,
    { sendCommand: "active" },
    function(response) {
      try {
        console.log(response.farewell);
      } catch (error) {}
    }
  );
})