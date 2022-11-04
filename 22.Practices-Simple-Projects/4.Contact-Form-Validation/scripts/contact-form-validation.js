function validatingInputField(){
    // getting all the input fields data
    const userName = document.getElementById('userName').value;
    const subjectMatter = document.getElementById('subjectMatter').value;
    const userEmail = document.getElementById('userEmail').value;
    const userMobile = document.getElementById('userMobile').value;
    const userMessage = document.getElementById('userMessage').value;


    // selecting the error message content field
    const errorMessage = document.getElementsByClassName('error-message')[0];
    errorMessage.className = '.error-message';
    const textContent = '';

    if(userName.length < 3){
        textContent += 'Enter a valid username';
        errorMessage.innerText = textContent;
        errorMessage.style.cssText = 'display:block padding:16px text-align:center';
        return false; 
    }
    return false;
}