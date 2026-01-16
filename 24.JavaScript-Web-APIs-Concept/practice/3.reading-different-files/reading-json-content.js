/*
    Problem Statement: Read and display the content of a selected CSV file using the FileReader API.

    Explanation: This code listens for changes on a file input element. When a CSV file is selected, it reads the file's content
    using the FileReader API and displays the content in a designated area on the webpage.
*/

document.getElementById('csvFileInput').addEventListener('change', function(event) {
    // getting the selected file
    const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const jsonContent = e.target.result;
            try {
                const jsonData = JSON.parse(jsonContent);
                document.getElementById('csvFileContent').textContent = JSON.stringify(jsonData, null, 2);
            } catch (error) {
                document.getElementById('csvFileContent').textContent = "Error parsing JSON: " + error.message;
            }
        };
        
        reader.onerror = function(e) {
            console.error("Error reading file", e);
        };
        
        reader.readAsText(file);
    } else {
        document.getElementById('csvFileContent').textContent = "Please select a valid CSV file";
    }
});