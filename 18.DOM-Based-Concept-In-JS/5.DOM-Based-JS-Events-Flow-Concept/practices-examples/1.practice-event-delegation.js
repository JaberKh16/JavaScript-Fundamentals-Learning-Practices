document.querySelector('#inputForm').addEventListener('keyup', function(e){
    if(e.target.data.uppercase != undefined){
        e.target.value = e.target.value.toUppercase();
    }
});