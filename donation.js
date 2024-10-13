$(document).ready(function () {
    $(".step:not(:first)").hide();

    $(".step").each(function (index) {
        var currentStep = $(this);
        setTimeout(function () {
            currentStep.show();
        }, index * 0);
    });

    var isDrawing = false;
    var signatureCanvas = document.getElementById("signatureCanvas");
    var signatureContext = signatureCanvas.getContext("2d");

    $(".amount").click(function () {
        $(".amount").removeClass("selected");
        $(this).addClass("selected");

        var selectedAmount = $(this).data("amount");
        $("#reviewAmount").text(selectedAmount === "custom" ? $("#customAmount").val() : "$" + selectedAmount);
    });

    $("#donorName").on("input", function () {
        var donorName = $(this).val();
        $("#reviewName").text(donorName);
    });

    $("#paymentMethod").change(function () {
        var paymentMethod = $(this).val();
        $("#reviewPaymentMethod").text(paymentMethod);
    });

    $("#donorName").keypress(function (event) {
        if (event.which === 13) {
            event.preventDefault();
            $(".final").click();
        }
    });

    $(".final").click(function () {
        var selectedAmount = $(".amount.selected").data("amount");
        var donorName = $("#donorName").val();
        var paymentMethod = $("#paymentMethod").val();

        if (!selectedAmount || !donorName || !paymentMethod || !isSignatureFilled()) {
            alert("Please fill out all required fields and provide a signature.");
            return;
        }

        alert("Thank you, " + donorName + "! You donated $" + selectedAmount + " using " + paymentMethod + ".");
        clearForm();
        clearSignatureCanvas();
    });

    $(signatureCanvas).on("mousedown", function (e) {
        isDrawing = true;
        signatureContext.beginPath();
        signatureContext.moveTo(e.clientX - signatureCanvas.getBoundingClientRect().left, e.clientY - signatureCanvas.getBoundingClientRect().top);
    });

    $(signatureCanvas).on("mousemove", function (e) {
        if (!isDrawing) return;

        signatureContext.lineTo(e.clientX - signatureCanvas.getBoundingClientRect().left, e.clientY - signatureCanvas.getBoundingClientRect().top);
        signatureContext.stroke();
    });

    $(document).on("mouseup", function () {
        isDrawing = false;
        signatureContext.closePath();
    });

    function isSignatureFilled() {
        return signatureContext.getImageData(0, 0, signatureCanvas.width, signatureCanvas.height).data.some(pixel => pixel !== 0);
    }

    function clearForm() {
        $("#donorName").val("");
        $("#paymentMethod").val("");
        $(".amount.selected").removeClass("selected");
        $("#reviewAmount, #reviewName, #reviewPaymentMethod").text("");
    }

    function clearSignatureCanvas() {
        var signatureCanvas = document.getElementById("signatureCanvas");
        var signatureContext = signatureCanvas.getContext("2d");
        signatureContext.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
    }
});
