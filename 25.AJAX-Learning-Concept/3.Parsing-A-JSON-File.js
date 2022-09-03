// defining the 'use strict' statement
'use strict';

function loadingJSONContent(){
    // creating the XmlHttpRequest object to initiate the request
    const xhttp = new XMLHttpRequest();

    // requesting to the server
    xhttp.open('GET', './file/person-info.json', true);

    // processing the request
    xhttp.onload = function(){
        if(this.status === 200){
            // seeing the response
            console.log(this.response);
            
            // getting the username and his profession data only
            const users = JSON.parse(this.responseText); // parsing the json content as an object
            console.log(users);
            
            // using for in loop to loop through the index
            for(let i in users){
                const username = users[i].name;
                const user_profession = users[i].profession;
                console.log(`Person-${i}--> User Name: ${username}, Profession: ${user_profession}`);
            }
            
        }
    }

    // send the request
    xhttp.send();
}

loadingJSONContent();