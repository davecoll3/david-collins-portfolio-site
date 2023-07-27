function sendMail(contactForm) {
    emailjs.send("service_qauy0co","david", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            alert("Your email has been sent");
            document.getElementById("contactFrom").reset();
        },
        function(error) {
            alert("Failed to send email"+error);
        }
    );
    return false;  // To block from loading a new page
}
