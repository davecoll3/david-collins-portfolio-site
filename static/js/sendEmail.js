// Send email taking the data from the contact form
function sendMail(contactForm) {
    emailjs.send("service_qauy0co","david", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    // If the email is sent correctly, the form is reset and an alert is shown
    .then(
        function(response) {
            alert("Your email has been sent");
            document.getElementById("contactFrom").reset();
        },
        // If the email is not sent, an alert is shown
        function(error) {
            alert("Failed to send email"+error);
        }
    );
    // Block the page from reloading
    return false;
}
