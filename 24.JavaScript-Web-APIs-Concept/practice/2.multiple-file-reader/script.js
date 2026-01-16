// function to handle multiple file input change event
/*
    Explanation: This code listens for changes on a file input element that allows multiple file selections. When files are selected, it reads each file's content
    using the FileReader API and displays the content along with the file name in a designated area on the webpage.
*/
document.getElementById('fileInput').addEventListener('change', function(event) {
    // getting the selected files
    const files = event.target.files;
    const fileContentDiv = document.getElementById('fileContent');
    fileContentDiv.innerHTML = ''; // Clear previous content

    if (files.length > 0) {
        Array.from(files).forEach(file => {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const fileSection = document.createElement('div');
                fileSection.innerHTML = `<h3>${file.name}</h3><pre>${e.target.result}</pre>`;
                fileContentDiv.appendChild(fileSection);
            };
            
            reader.onerror = function(e) {
                console.error("Error reading file", e);
            };
            
            reader.readAsText(file);
        });
    } else {
        fileContentDiv.textContent = "No files selected";
    }
});

// function to clear the local storage
function clearningSessionStorageValue(){
    return alert(localStorage.clear());
}