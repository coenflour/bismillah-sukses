$(document).ready(function () {
    const nameInput = $("#name");
    const emailInput = $("#email");
    const phoneInput = $("#phone");
    const messageInput = $("#message");

    nameInput.focus(function () {
        nameInput.css("background-color", "LavenderBlush");
    });

    nameInput.blur(function () {
        nameInput.css("background-color", "");
    });

    emailInput.focus(function () {
        emailInput.css("background-color", "LavenderBlush");
    });

    emailInput.blur(function () {
        emailInput.css("background-color", "");
    });

    phoneInput.focus(function () {
        phoneInput.css("background-color", "LavenderBlush");
    });

    phoneInput.blur(function () {
        phoneInput.css("background-color", "");
    });

    messageInput.focus(function () {
        messageInput.css("background-color", "LavenderBlush");
    });

    messageInput.blur(function () {
        messageInput.css("background-color", "");
    });

    $("#button").click(function (event) {
        event.preventDefault();
        submitForm();
    });

    function submitForm() {
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var message = $("#message").val();

        if (name === "" || email === "" || phone === "" || message === "") {
            $("#error").html("");
            alert("Please fill in all required fields.");
        } else {
            $("#error").html("");
            alert("The Message Sent Successfully");

            $("#name").val("");
            $("#email").val("");
            $("#phone").val("");
            $("#message").val("");
        }
    }
});