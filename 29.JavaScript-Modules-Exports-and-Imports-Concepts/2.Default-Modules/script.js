import monkeypatch from "./module.js";

// another way - default is the keyword for default module, after aliases the name
// import { default as monkeypatch } from "./module.js";


console.log("Welcome to know about default modules");
console.log(monkeypatch.printSpeciesInfo());