document.getElementsByClassName('submit-data')[0].addEventListener('click', function (event){
    event.preventDefault();
    // getting all the input fields data
    const userName = document.getElementById('userName').value;
    const subjectMatter = document.getElementById('subjectMatter').value;
    const userEmail = document.getElementById('userEmail').value;
    const userMobile = document.getElementById('userMobile').value;
    const userMessage = document.getElementById('userMessage').value;
    console.log(userName);


    // selecting the error message content field
    const errorMessage = document.getElementsByClassName('error-message')[0];
    // errorMessage.classList.remove('error-message');
    let textContent = '';

    // validating the 'usernName' input field
    if(userName.length < 3 && !Number.isInteger(userName)){
        textContent = 'Enter a valid username';
        errorMessage.innerText = textContent;
        // errorMessage.style.cssText = 'display:block padding:16px text-align:center';
        errorMessage.classList.add('error-message');
        return false; 
    }

    // validating the 'subjectMatter' input field
    if(subjectMatter.length < 5 && !Number.isInteger(subjectMatter.value)){
        textContent ='Enter only a text message';
        errorMessage.innerText = textContent;
        errorMessage.classList.add('error-message');
        return false;
    }
    // validating the 'userEmail' input field
    if(userEmail.length <8  && !Number.isInteger(subjectMatter.value)){
        textContent ='Enter a valid email';
        errorMessage.innerText = textContent;
        errorMessage.classList.add('error-message');
        return false;
    }
    // validating the 'userMobile' input field
    if(userMobile.length < 11 && Number.isInteger(subjectMatter.value)){
        textContent ='Enter a valid mobile number';
        errorMessage.innerText = textContent;
        errorMessage.classList.add('error-message');
        return false;
    }
    // validating the 'userMessage' input field
    if(subjectMatter.length < 15 && !Number.isInteger(subjectMatter.value)){
        textContent ='Enter only a text message';
        errorMessage.innerText = textContent;
        errorMessage.classList.add('error-message');
        return false;
    }
    return false;
});