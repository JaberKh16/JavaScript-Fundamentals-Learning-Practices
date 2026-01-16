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
            // document.getElementById('csvFileContent').textContent = e.target.result;
            const csvContent = e.target.result;
            const rows = csvContent.split('\n');
            let tableHTML = '<table border="1"><tbody>';
            
            rows.forEach(row => {
                const columns = row.split(',');
                tableHTML += '<tr>';
                columns.forEach(column => {
                    tableHTML += `<td>${column.trim()}</td>`;
                });
                tableHTML += '</tr>';
            });
            
            tableHTML += '</tbody></table>';
            document.getElementById('csvFileContent').innerHTML = tableHTML;
        };
        
        reader.onerror = function(e) {
            console.error("Error reading file", e);
        };
        
        reader.readAsText(file);
    } else {
        document.getElementById('csvFileContent').textContent = "Please select a valid CSV file";
    }
});