'use strict';

/*alert('sfsdf');
let button = document.getElementById('Toggle');
console.log(button);
button.onclick = function(element) {
*/
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            files: ['drei_calendar.js']
        })
    });
//};
