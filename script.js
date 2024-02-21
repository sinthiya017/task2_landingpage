document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementsByName("email")[0].value;
    // Here you can add code to handle the sign-up form submission, like sending the email to a server or displaying a thank you message.
    alert("Thank you for signing up with " + email);
  });
  