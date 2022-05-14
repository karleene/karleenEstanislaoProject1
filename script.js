console.log ('test')
// LEAVING COMMENT UNDER BLOG SECTION


const formElement = document.querySelector('form');
// const newComment = document.querySelector('.commentBody');

const commentSection = document.querySelector('.comments');

// add a submit listener to our submit button
formElement.addEventListener('submit', function (e) {
    e.preventDefault();

    // grab all the user's input and format it into an html element that we can append to the page

    const nameInput = document.querySelector('input[type=text]');
    const name = nameInput.value;

    const emailInput = document.querySelector('input[type=email]');
    const email = emailInput.value;

    const urlInput = document.querySelector('input[type=url]');
    const url = urlInput.value;

    const feedbackInput = document.querySelector('textarea');
    const feedback = feedbackInput.value;

    const div = document.createElement('div');
    div.classList.add('commentBody');

    const img = document.createElement('img');
    img.src = 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-1095249842';
    img.alt = 'User avatar';
    img.setAttribute('aria-hidden', 'true');

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('person');

    const pSpan = document.createElement('p');

    const userName = document.createElement('span');
    userName.classList.add('nameSpan');
    userName.textContent = name;
    console.log(userName);

    pSpan.append(userName);
    console.log(pSpan);

    const userFeedback = document.createElement('p');
    userFeedback.textContent = feedback;

    commentDiv.appendChild(userName, userFeedback);

    div.appendChild(img, commentDiv);

    commentSection.appendChild(div);

    // clear inputs
    nameInput.value ='';
    emailInput.value = '';
    urlInput.value = '';
    feedbackInput.value = '';

})



// //html & css:  create a burger button and stick it to the bottom right of screen


// // hide our menu by default so that it can be summoned by the burger by clicking the burger
//     // in the nav, have a div with our burger button
//     // font-awesome icons for burger and X to toggle between
//         // media queries to hide it at larger widths 


// // when the user clicks, the menu appears
//     // select the burger menu and add an event listener to it

//     const menuButton = document.getElementById('burgerMenu');
//     const navList = document.getElementById('navList');
//     const mobileMenu = document.getElementById('mobileMenu');


//     menuButton.addEventListener ('click', function (e) {
        
//         // menu appears or even better slides into view
//         // revealMenu is your css that will show the nav
//         navList.classList.toggle('revealMenu');

//         const icon = this.children[0];

//         icon.classList.toggle('fa-bars');
//         icon.classList.toggle('fa-xmark');
//     })

