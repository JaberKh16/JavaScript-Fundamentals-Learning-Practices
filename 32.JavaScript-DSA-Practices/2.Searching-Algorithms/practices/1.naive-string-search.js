const naiveStringSearch = (text, pattern) => {
    let matchedCount = 0;
    const isMatchFound = false;
    
    for(let i = 0; i < text.length; i++) {
        for(let j = 0; j < pattern.length; j++) {
            if(pattern[j] !== text[i + j]) {
                break;
            } 
            if(j === pattern.length - 1) {
                matchedCount++;
            }
        }   
    }
    return matchedCount;
}

console.log(naiveStringSearch("lorie loled", "lo"));
