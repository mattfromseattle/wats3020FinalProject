(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })


// Checks to see if the page is ready for code to be executed.
    // Form validation rules to check fields of document.
        // Adding a rule to verify month, year, and shipping dropdowns.
    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg != value;
    }, "Please select a value.");

    $('#order-form').validate({
        submitHandler: function(form) {
            // When form is submitted, entered values and fields are validated against rules below.
            console.log("Working");
            form.submit();
        },
        rules: {
            "your-name": {
                required: true,
                maxlength: 128
            },
            "your-address": {
                required: true
            },
            "your-city": {
                required: true
            },
            "your-state": {
                required: true,
                maxlength: 2
            },
            "your-zip": {
                required: true,
                maxlength: 5,
                digits: true
            },
            "card-holder-name": {
                required: true,
                maxlength: 128
            },
            "card-number": {
                required: true,
                creditcard: true
            },
            "expiry-month": {
                required: true,
                valueNotEquals: "Month"
            },
            "expiry-year": {
                required: true,
                valueNotEquals: "Year"
            },
            "cvv": {
                required: true,
                maxlength: 3,
                digits: true
            },
            "shipping-method": {
                required: true,
                valueNotEquals: "Select One"
            },
            "comments": {
                required: true,
                maxlength: 500
            }
        }
    });

})(jQuery); // End of use strict
