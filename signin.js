$(document).ready(function() {
    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $('.error-message').eq(0).show().text('Please enter a valid email');
            return;
        }
    }

    // Function to check if any required field is empty
    function checkEmptyFields() {
        let isEmpty = false;

        $('.form-box.sign.up input[required]').each(function() {
            if ($(this).val().trim() === '') {
                isEmpty = true;
                return false;
            }
        });

        return isEmpty;
    }

    // Event listener for form submission
    $('.form-box.sign.up form').submit(function(event) {
        event.preventDefault();
        
        const username = $(this).find('input[type="Username"]').val();
        const email = $(this).find('input[type="email"]').val();
        const password = $(this).find('input[type="Password"]').val();

        if (checkEmptyFields()) {
            alert('Please fill in all the required fields.');
            return;
        }

        if (!isValidEmail(email)) {
            $(this).find('.error-message').text('Please provide a valid email').show();
            return;
        }
        alert('Form submitted successfully!');
    });

    // Event listener for the sign button click
    $('.form-box.sign.up .button').click(function(event) {
        if (checkEmptyFields()) {
            alert('Please fill in all the required fields.');
            event.preventDefault();
        }
    });
});
