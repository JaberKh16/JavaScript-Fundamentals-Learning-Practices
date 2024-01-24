// console.log("Enter a domain: ");
const typedDomian = prompt("Enter a domain");

const returnFunc = (typedDomian) => {
    // const typedText = typedDomian.trim();
    const textSplitted = typedDomian.split(".");
    const dnsName = textSplitted[0];
    const domain = textSplitted[1];

    return {
        properties: [ dnsName, domain ]
    }
};

console.log(returnFunc())