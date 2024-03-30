
document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        // Perform email validation
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address");
            event.preventDefault(); // Prevent form submission
        }

        // Perform password validation
        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            event.preventDefault(); // Prevent form submission
        }
    });

    // Function to validate email address
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
