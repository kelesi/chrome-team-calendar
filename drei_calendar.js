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
    var checkedOptions = ["RiskBusters", "Holidays SK", "Holidays AT"];
    //var uncheckedOptions = ["Wholesale", "Billing", "Integration", "Testenvironment Calender"];

    // Uncheck all options first
    var elementsToDisable = document.querySelectorAll('.slicer .slItem input[type=checkbox]');
    elementsToDisable.forEach(function(element) {       
        if (element && element.checked) {
            element.click();
        }
    });


    // Check options that we want checked
    checkedOptions.forEach(function(str) {
        element = document.querySelector('input[value="'+str+'"]');
        if (element && !element.checked) {
            element.click();
        }
    });

    // Apply selected options
    document.querySelector('div.slApply a.applyLink').click();
}

if (typeof config_timeout == 'undefined') {
    var config_timeout = 3900;
}

window.setTimeout(run, config_timeout);
