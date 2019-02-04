'use strict';

//let button = document.getElementById('Toggle');
//button.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'var config_timeout=1'},
            function() {
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {file: 'drei_calendar.js'}
            )}
        )
    });
//};
