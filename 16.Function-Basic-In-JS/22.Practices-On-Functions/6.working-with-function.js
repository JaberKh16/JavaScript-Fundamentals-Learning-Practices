const files = ['file1.txt', 'file2.txt', 'file3.txt'];
let filePaths = [];

function createFilePath(file, callback) {
    const path = `files/${file}`;
    callback(path);
}

files.forEach(file => {
    createFilePath(file, (path) => {
        filePaths.push(path);
        console.log(`File path created: ${path}`);
    });
});

console.log('All file paths:', filePaths);

