// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

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