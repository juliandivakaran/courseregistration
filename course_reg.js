
document.addEventListener("DOMContentLoaded", function() {
    var courseRegistrationForm = document.getElementById("courseRegistrationForm");

    courseRegistrationForm.addEventListener("submit", function(event) {
        // Validate First Name
        var firstName = document.getElementById("firstName").value;
        if (firstName.trim() === "") {
            alert("Please enter your First Name");
            event.preventDefault();
            return;
        }

        // Validate Last Name
        var lastName = document.getElementById("lastName").value;
        if (lastName.trim() === "") {
            alert("Please enter your Last Name");
            event.preventDefault();
            return;
        }

        // Validate Email Address
        var email = document.getElementById("email").value;
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address");
            event.preventDefault();
            return;
        }

        // Validate Mobile Number
        var mobile = document.getElementById("mobile").value;
        if (!isValidMobile(mobile)) {
            alert("Please enter a valid mobile number");
            event.preventDefault();
            return;
        }

        // Additional validation for other fields can be added here
    });

    // Function to validate email address
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate mobile number
    function isValidMobile(mobile) {
        var mobileRegex = /^\d{10}$/;
        return mobileRegex.test(mobile);
    }
});
