// Example-1 Passing Object As An Argument
const personInfo = {
    name:'Rajib',
    age: 25,
    sallary: 24.335,
    getPersonInformation: function getAllInfo(){
        return personInfo.name + personInfo.age + personInfo.sallary
    } 
}
console.log(personInfo)

const personInfoUppercase = (personInfo) =>{
    return personInfo.getPersonInformation().name.toUpperCase();
}

console.log(personInfoUppercase);

// Example-2 Adding New Property In Object
personInfo.getSalary = function(){
    return this.sallary; // though 'this' refers to object itself, this has the reference to all its variables
}
console.log(personInfo);


// Example-3 Invoking As Prototype Method
personInfo.prototype.companyName = "ST. Soft Tech";
personInfo.prototype.position = "Software Engineer";
personInfo.prototype.getProfessionalInfo = () =>{
    return personInfo.companyName + personInfo.position;
}
console.log(personInfo);


// Example-4 Invoking Through bind(), apply()
personInfo.assignedOfficeAddress = "21 street, Jane Dward";
const workingProjects = ['Ecommerce', 'Chatbots', 'Misc'];
personInfo[assignedWork] = workingProjects;
const getAssignedWorkInfo = (assignedOfficeAddress) =>{
    return this.assignedOfficeAddress +  personInfo[assignedWork];
}

// binding
personInfo.bind(getAssignedWorkInfo, assignedOfficeAddress);
console.log(personInfo);