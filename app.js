//Selecting the cards

function displayCards(elementId) {
    let cardId = elementId + "Card";
    let cardTags = document.getElementsByClassName(document.getElementById(elementId).classList[0]);
    let cards = document.getElementsByClassName('card');
    for (i = 0; i < cards.length; i++) {
        if (cards[i].id == cardId && cardTags[i].id == elementId) {
            cards[i].style.display = 'flex';
            cardTags[i].style.borderBottom = '4px solid red'
        }
        else {
            cards[i].style.display = 'none';
            cardTags[i].style.borderBottom = '2px solid hsl(229, 8%, 60%)'
        }
    }
}

//Function to set the default behaviour on answers

function resetDefault(dropdown, answer) {
    dropdown.lastChild.style.filter = 'hue-rotate(0deg)';
    dropdown.lastChild.style.transform = 'scaleY(1)';
    answer.lastElementChild.style.display = 'none';
}

//Function to change the property of answers

function changeProperty(dropdown, answer) {
    dropdown.lastChild.style.filter = 'hue-rotate(90deg)';
    dropdown.lastChild.style.transform = 'scaleY(-1)';
    answer.lastElementChild.style.display = 'block';
}

//Dropdown button handler

function displayAns(element) {
    let questions = document.getElementsByClassName('question');
    for (i = 0; i < questions.length; i++) {
        let dropdown = questions[i].lastElementChild.previousElementSibling;
        if (questions[i].id == element.id) {
            if (questions[i].lastElementChild.style.display == 'block') {
                resetDefault(dropdown, questions[i]);
            }
            else {
                changeProperty(dropdown, questions[i]);
            }
        }
        else {
            if (questions[i].lastElementChild.style.display == 'block') {
                resetDefault(dropdown, questions[i]);
            }
        }
    }
}

//Handling the contact form

let emailId = document.getElementById('emailId');
let contactUs = document.getElementById('contactUs');
contactUs.addEventListener('click', validateEmail);
emailId.addEventListener('blur', validateEmail);

//Validation of Email using regular expressions
function validateEmail() {
    console.log(emailId.value);
    let regex = /^([\_\-\%a-zA-Z0-9\.]+)\@([a-zA-Z0-9]+)\.([a-zA-Z]){3,10}$/;
    console.log(regex.exec(emailId.value));
    if (!regex.test(emailId.value)) {
        document.getElementById('errorImg').style.display = 'inline-block';
        emailId.style.boxShadow = '0px 25px hsl(0, 94%, 66%)';
        emailId.style.border = '3px solid hsl(0, 94%, 66%)';
        document.getElementById('errorMessage').style.display = 'block';
    }
    else {
        emailId.style.boxShadow = 'none';
        document.getElementById('errorImg').style.display = 'none';
        emailId.style.border = 'none';
        document.getElementById('errorMessage').style.display = 'none';
    }
}

//Hamburger Button handler

function menuFunction(x) {
    let socialIcons = "";
    x.classList.toggle('change');
    let header = document.querySelector('header');
    header.classList.toggle('show');
    // header.lastElementChild.style.height = 'calc()'
    let height = header.lastElementChild.offsetHeight;
    let screenHeight =  window.innerHeight;
    let marginTop = screenHeight - height;
    marginTop = marginTop.toString();
    header.lastElementChild.lastElementChild.style.marginTop = marginTop;
}



