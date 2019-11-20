//document.body.innerHTML = document.body.innerHTML.replace(new RegExp("user1", "g"), "nobody");
/*
  "content_scripts": [
    {
      "matches": ["https://at.three.com/sites/1145/SitePages/Calendar*"],
      "js": ["drei_calendar.js"],
      "run_at": "document_idle"
    }
  ],
*/

function run()
{
    var checkedOptions = ["Payments", "Holidays SK", "Holidays AT"];
    var uncheckedOptions = ["Wholesale", "Billing", "Integration"];

    checkedOptions.forEach(function(str) {
        element = document.querySelector('input[value="'+str+'"]');
        if (element && !element.checked) {
            element.click();
        }
    });

    uncheckedOptions.forEach(function(str) {
        element = document.querySelector('input[value="'+str+'"]');
        if (element && element.checked) {
            element.click();
        }
    });

    document.querySelector('div.slApply a.applyLink').click();
}

if (typeof config_timeout == 'undefined') {
    var config_timeout = 3900;
}

window.setTimeout(run, config_timeout);
