$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});


function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "alexelahertz@gmail.com",
        Password: "4F1AEBD6DFF073F6219F0999D48F5B3EDA2B",
        To: 'alexelahertz@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New XelaHertz Enquiry",
        Body: "Name: " + document.getElementById("name").value +
            "<br>Email: " + document.getElementById("email").value +
            "<br>Subject: " + document.getElementById("subject").value +
            "<br>:Message " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Successfully")
    );
}