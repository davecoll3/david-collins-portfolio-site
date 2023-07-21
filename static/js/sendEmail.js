function sendMail(contactForm) {
    emailjs.send("service_qauy0co","david", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Email sent successfully!");
        },
        function(error) {
            console.log("FAILED", error);
            alert("FAILED!"+error);
        }
    );
    return false;  // To block from loading a new page
}
