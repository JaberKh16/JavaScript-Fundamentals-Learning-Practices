function validAnagram(first, second){
    if(first.length !== second.length){
        return false;
    }

    const lookup = {};

    for(let i = 0; i < first.length++; i++){
        let letter = first[i];
        // if letter exists increment otherwise set to 1
        lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1;
    }
    console.log(lookup);

    for(let i = 0; i < second.length; i++){
        let letter = second[i];
        // cant find letter or letter is zero then its not anagram
        if(!lookup[letter]){
            return false;
        }else{
            lookup[letter] -= 1;
        }

    }
    console.log(lookup);
    return true;
}

validAnagram('anagram', 'nagaram');
