const options = function(){
    return {
        library: {
            name : 'Jquery',
            version: '4.5.5',
            linktype: "https://jquery.com/v/4.5.5"
        }
    }
}

// export as named module with aliasing
export { options as liboptions };