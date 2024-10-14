document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('#firstName, #lastName, #email, #websiteRating, #favoriteContent, #suggestion');

    inputs.forEach(function(input) {
        input.addEventListener('focus', function(event) {
            event.target.style.borderColor = '#ffb2de';
        });
    });

    document.getElementById('reviewForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var email = document.getElementById('email').value;

        if (firstName === '' || lastName === '' || email === '') {
            alert('Please fill in all required fields.');
        } else {
            alert('Form submitted successfully!');
            document.getElementById('reviewForm').reset();
        }
    });
});