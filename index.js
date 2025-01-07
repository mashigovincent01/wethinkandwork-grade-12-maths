document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    console.log("Sending email with the following parameters:", parms);

    emailjs.send("service_s2ecs4j", "template_5wi1er6", parms)
        .then((response) => {
            console.log("Email sent successfully!", response.status, response.text);
            alert("Email Sent!");
            clearForm();
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Failed to send email. Please try us on whatsapp");
            clearForm();
        });
});

function clearForm(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

}