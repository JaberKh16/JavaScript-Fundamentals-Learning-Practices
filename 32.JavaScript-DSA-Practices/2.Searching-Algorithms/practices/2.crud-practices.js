function create(arr, elemenet){
    let newArr = [...arr];
    newArr.push(elemenet);
    return newArr;
}

function read(arr, index){
    if(index < 0 || index >= arr.length){
        return "Index out of bounds";
    }
    return arr[index];
}


const performCRUDStructure = (arr, operation, index, element) => {
    switch(operation){
        case 'create':
            return create(arr, element);
        case 'read':
            return read(arr, index);
        case 'update':
            if(index < 0 || index >= arr.length){
                return "Index out of bounds";
            }
            let updatedArr = [...arr];
            updatedArr[index] = element;
            return updatedArr;
        case 'delete':
            if(index < 0 || index >= arr.length){
                return "Index out of bounds";
            }
            let deletedArr = [...arr];
            deletedArr.splice(index, 1);
            return deletedArr;
        default:
            return "Invalid operation";
    }
};

let myArray = [1, 2, 3, 4, 5];
console.log(performCRUDStructure(myArray, 'create', null, 6)); // Create
// console.log(performCRUDStructure(myArray, 'read', 2)); // Read
// console.log(performCRUDStructure(myArray, 'update', 1, 20)); // Update
// console.log(performCRUDStructure(myArray, 'delete', 3)); // Delete