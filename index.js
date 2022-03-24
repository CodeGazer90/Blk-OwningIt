let btn = document.getElementById('btn');
// let inputs = document.querySelector('form');

function sendEmail() {
    Email.send({
        Host : "smtp.mailtrap.io",
    Port: 25,
    Username:"e44a22abb1c50d",
    Password:"9decf717fbf92b",
    To:"abc@de.com",
    From: document.getElementById('email').value,
    Subject : "Contact Us",
    Body: "Name: " + document.getElementById('name').value + "<br> Email: " + document.getElementById('email').value + "<br> Phone: " + document.getElementById('phone').value + "<br> Message: "  + document.getElementById('message').value
}).then(
  message => alert("Your Message Has Been Sent!")
)};

btn.addEventListener('click', sendEmail);


let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

function inquire(){
    document.location.href="contact.html";
}

btn1.addEventListener('click', inquire);
btn2.addEventListener('click', inquire);
btn3.addEventListener('click', inquire);

function spotlight(){
    document.location.href="https://kouturescrubwear.com/";
}

// let rotate = document.getElementById('1photo');

// function rotateImg(){
//     rotate.style.transform = "rotate(90deg)";
// }

// rotate.addEventListener('mouseover', rotateImg);

//rotating the images on the services page

// let box = document.querySelectorAll('.services');
// let spin = box.querySelectorAll('img.rotate');

// spin.forEach(function(element) {
//     element.addEventListener("mouseenter", function() {
//         this.classList.add("rotate");
//     })
// });

// function sendEmail(){
//     Host:"smtp.mailtrap.io",
//     Username:"340d2ede7888b8",
//     Password:"f488ba78dc12fc",
//     To:"xyz@gm.com",
//     From:inputs.elements["email"].value,
//     Subject:"Contact Us";
//     Body: inputs.elements["message"].value + "<br>" + inputs.elements["name"].value + "<br>" + inputs.elements["phone"].value
// }

// function success(){
//     alert("Message Sent!");
// }