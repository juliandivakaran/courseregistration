
document.addEventListener("DOMContentLoaded", function() {
    var registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function(event) {
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            event.preventDefault(); 
        }
    });
});
