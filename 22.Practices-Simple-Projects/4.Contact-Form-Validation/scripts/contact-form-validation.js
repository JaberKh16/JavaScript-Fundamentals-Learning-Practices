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
    errorMessage.classList.remove('error-message');
    let textContent = '';

    if(userName.length < 3 && !Number.isInteger(userName)){
        textContent += 'Enter a valid username';
        errorMessage.innerText = textContent;
        // errorMessage.style.cssText = 'display:block padding:16px text-align:center';
        errorMessage.classList.add('error-message');
        return false; 
    }
    return false;
});