$(document).ready(function() {
    $('#createPasswordBtn').on('click', function(event) {
        event.preventDefault();

        const email = $('#email').val();
        const newPassword = $('#newPassword').val();
        const confirmPassword = $('#confirmPassword').val();

        if (email.trim() === '' || newPassword.trim() === '' || confirmPassword.trim() === '') {
            alert('Please fill in all the required fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $('.error-message').eq(0).show().text('Please enter a valid email');
            return;
        }

        if (newPassword !== confirmPassword) {
            $('.error-message').eq(1).show().text('Passwords do not match');
            return;
        } else {
            $('.error-message').eq(1).hide();
        }

        alert('New password created successfully! You may log in');
        window.location.href = 'sign in.html';
    });

    // Listen for input changes in confirmPassword field
    $('#confirmPassword').on('input', function() {
        const newPassword = $('#newPassword').val();
        const confirmPassword = $(this).val();

        if (newPassword === confirmPassword) {
            $('.error-message').eq(1).hide(); // Hide the error message if passwords match
        } else {
            $('.error-message').eq(1).show().text('Passwords do not match');
        }
    });
});