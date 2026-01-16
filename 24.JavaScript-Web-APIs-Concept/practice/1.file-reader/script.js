/*
    FileReader API Methods
    ----------------------
    1) readAsArrayBuffer()    -->  reads the contents of the specified Blob or File.
    2) readAsBinaryString()   -->  reads the contents of the specified Blob or File.
    3) readAsDataURL()       -->  reads the contents of the specified Blob or File.
    4) readAsText()          -->  reads the contents of the specified Blob or File.

    FileReader API Events
    ---------------------
    1) onloadstart    -->  triggered when the read operation starts.
    2) onprogress     -->  triggered while reading a file.
    3) onload         -->  triggered when the read operation is successfully completed.
    4) onabort        -->  triggered when the read operation is aborted.
    5) onerror        -->  triggered when an error occurs during the read operation.
    6) onloadend      -->  triggered when the read operation is completed (either successfully or with an error).

    Use Case Of Each Method
    ----------------------
    1) readAsArrayBuffer()  -->  Used when you need to work with binary data, such as images or audio files.
    2) readAsBinaryString() -->  Used when you need to read binary data as a string, useful for certain encoding scenarios.
    3) readAsDataURL()     -->  Used when you want to embed file data directly into web pages, such as displaying images.
    4) readAsText()        -->  Used when you need to read text files, such as JSON, CSV, or plain text files.

*/

/*
    Problem Statement: Read and display the content of a selected file using the FileReader API.

    Explanation: This code listens for changes on a file input element. When a file is selected, it reads the file's content
    using the FileReader API and displays the content in a designated area on the webpage.
*/

document.getElementById('fileInput').addEventListener('change', function(event) {
    // getting the selected file
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            document.getElementById('fileContent').textContent = e.target.result;
        };
        
        reader.onerror = function(e) {
            console.error("Error reading file", e);
        };
        
        reader.readAsText(file);
    } else {
        document.getElementById('fileContent').textContent = "No file selected";
    }
});

