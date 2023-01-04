function run()
{
    run_count++;

    var is_loading = document.querySelector(".fc-view-container span.loader");
    if (run_count < 20 && is_loading) {
        console.log('run: Calendar still loading')
        window.setTimeout(run, config_timeout);
        return;
    }

    var checkedOptions = ["A912", "RiskBusters", "Holidays SK", "Holidays AT"];
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
    applyButton = document.querySelector('div.slApply a.applyLink')
    if (applyButton) {
        //Replace the inline javascript:void() with more reasonable string
        applyButton.href = '#';
        applyButton.click();
    }
}

if (typeof config_timeout == 'undefined') {
    var config_timeout = 1000;
}

var run_count=0;
run();
