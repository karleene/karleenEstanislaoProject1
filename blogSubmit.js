// LEAVING COMMENT UNDER BLOG SECTION

const formElement = document.querySelector('form');

const commentSection = document.querySelector('.actualComments');

// add a submit listener to our submit button
formElement.addEventListener('submit', function (e) {
    e.preventDefault();

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
    img.src = 'https://placekitten.com/200/300';
    img.alt = 'User avatar';
    img.setAttribute('aria-hidden', 'true');

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('person');

    const pSpan = document.createElement('p');

    const userName = document.createElement('span');
    userName.classList.add('nameSpan');
    userName.append(name);

    pSpan.append(userName);

    const userFeedback = document.createElement('p');
    userFeedback.textContent = feedback;

    commentDiv.append(userName, userFeedback);

    div.append(img, commentDiv);

    commentSection.appendChild(div);

    // clear inputs
    nameInput.value = '';
    emailInput.value = '';
    urlInput.value = '';
    feedbackInput.value = '';
})
