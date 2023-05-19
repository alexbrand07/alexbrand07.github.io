// index.js


// var number = 5;
// let name = "Oleksii"

// number = 12;
// name = " Pluralsight "
// document.writeln(number + name);
// // alert("Hello World");


let hasJob = true;
if (hasJob) {
    showMessage("Thanks for visiting, I am currently employed. ");
} else {
    showMessage("Thanks for visiting, I need a job. ")
}

let today = new Date();
let dayOfWeek = today.getDay();
if (dayOfWeek === 0 || dayOfWeek === 6) {
    showMessage(" Since its the weekend, please be patient with my returning your email ");

}



function showMessage(message) {

    formInfo.innerHTML = "<p>" + message + "</p>";
}

const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const contact = new Contact(contactForm);
    contact.send();
});

function sendMessage() {
    showMessage("Please wait, sending your email")
}

const experiences = document.getElementsByClassName("experience");
for (let x = 0; x < experiences.length; x++) {
    const item = experiences[x];
    item.addEventListener("mouseenter", function (event) {
        event.target.style = "background-color: #999999;";
    });
    item.addEventListener("mouseleave", function (event) {
        event.target.style = "";
    });
}


class Contact {

    constructor(form) {
        this.fullName = form.elements["fullName"].value;
        this.email = form.elements["email"].value;
        this.subject = form.elements["subject"].value;
        this.body = form.elements["msg"].value;

    }

    fullName = "";
    email = "";
    subject = "";
    body = "";


    send() {
        console.info(this.formatMessage());
        showMessage("We´re not sending emails yet... feature for version 2.0")
    }

    formatMessage() {
        return `To: ${this.fullName} 
                Email: ${this.email}
                Subject: ${this.subject}
                Body: ${this.body} 
                `}
};

