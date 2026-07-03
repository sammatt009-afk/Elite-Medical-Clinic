const appointmentForm =
document.getElementById("appointmentForm");


if(appointmentForm){

appointmentForm.addEventListener("submit", function(event){

event.preventDefault();


document.getElementById("message").innerHTML =
"Your appointment request has been received. Our clinic will contact you soon.";


appointmentForm.reset();


});

}




const contactForm =
document.getElementById("contactForm");


if(contactForm){

contactForm.addEventListener("submit", function(event){

event.preventDefault();


document.getElementById("contactMessage").innerHTML =
"Thank you for contacting Elite Medical Clinic. We will reply shortly.";


contactForm.reset();


});

}