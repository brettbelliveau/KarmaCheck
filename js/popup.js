/*
* Author: Brett Belliveau
* Description: Js to handle work for popup window
* Date: 7/3/2016
*/

function getCurrentUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };
  
  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    callback(url);
  });
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

function hideElement(elementId) {
  document.getElementById(elementId).style.visibility = "hidden";
}

document.addEventListener('DOMContentLoaded', function() {
    getCurrentUrl(function(myUrl) {
        renderStatus('Performing Karma Decay Search ' + myUrl);
         
        jQuery.get(myUrl, function(res) {
            renderStatus('It worked!');
        });
        
        //renderStatus('Post-test');
    });
});