const personInfo = {
    name: 'RK',
    age: 36,
    gender: 'Male',
    jobInformation: {
        position: "Full Stack",
        level: "Mid Level",
        companyName: "Anonymous",
        companyType: "IT",
        salary: 42342.2323,
        technicalStack: ['C++', 'PHP', 'Laravel', 'PWS']
    }
};

const { name: userName, age: userAge, gender: userGender, jobInformation: { position, companyName, companyType, salary, technicalStack } } = personInfo;
console.log(userName, userAge, userGender, position, companyName, companyType, salary, technicalStack);
