/*
	An Example Of Try Catch With Finally Block
 */

// Example -1
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('No match found at', i)
        }
    }
}


// Example -2
function letterFinderDefensive(word, match) {
    const condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    const condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1

    try{
    	if(condition1 && condition2) { //if both condition matches
	        for(let i = 0; i < word.length; i++) {
	            if(word[i] == match) {
	                //check if the character at this i position in the word is equal to the match
	                console.log('Found the', match, 'at', i)
	            } else {
	                console.log('No match found at', i)
	            }
	        }
	    } else {
	        //if the requirements don't match
	        console.log("Please pass correct arguments to the function")
	    }
    }catch(error){
    	console.log('Error: ', error);
    }
   	finally{
   		console.log('Finally.');
   	}

}
letterFinderDefensive([],[]);
letterFinderDefensive("cat","c");

