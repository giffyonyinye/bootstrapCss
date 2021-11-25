var myVar;
const names = document.querySelector(".nameInput");
const email = document.querySelector(".emailInput");
const phone = document.querySelector(".phoneInput");
const subject = document.querySelector(".subjectInput");
const dob = document.querySelector(".dobInput");
const textArea = document.querySelector(".textAreaInput");

const subscribe = document.querySelector(".subscribeInput");
const subscribeFooter = document.querySelector(".subscribeFooter");

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function validation(event) {
    event.preventDefault();
    if(!names.value) {
        document.querySelector(".nameValidation").innerHTML = "this field must not be empty"
    } else if (!email.value) {
        document.querySelector(".emailValidation").innerHTML = "enter your email address"
    } else if (!phone.value) {
        document.querySelector(".phoneValidation").innerHTML = "enter your phone number"
    } else if (!subject.value) {
        document.querySelector(".subjectValidation").innerHTML = "select subject"
    } else if (!dob.value) {
        document.querySelector(".dobValidation").innerHTML = "enter date of birth"
    } else if (!textArea.value) {
        document.querySelector(".textAreaValidation").innerHTML = "write a message"
    } else {
        console.log("gerrout");
    }
}

function Subscribe() {
    if(subscribe.value === "") {
        document.querySelector(".subFooter").innerHTML = "this field must not be empty"
    }
    else {
        document.querySelector(".subFooter").style.display = "none";
        subscribe.value = ""
    }
}

function SubscribeFooter() {
    if(subscribeFooter.value === "") {
        document.querySelector(".subFooter").innerHTML = "this field must not be empty"
    }
    else {
        document.querySelector(".subFooter").style.display = "none";
        subscribeFooter.value = ""
    }
}

var section = document.querySelector('.numbers');
var hasEntered = false;

window.addEventListener('scroll', (e) => {
	var shouldAnimate = (window.scrollY + window.innerHeight) >= section.offsetTop;

	if (shouldAnimate && !hasEntered) {
  	hasEntered = true;
    
    $('.value').each(function () {
    	$(this).prop('Counter',0).animate({
        Counter: $(this).text()
    	}, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
   		});
    });

  }
});