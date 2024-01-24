import { default as monkeySpecies, default as monkeypatch } from "./module.js";

// with single import
// import monkeySpecies, {monkeypatch as monkeyp} from "./module.js";

console.log("Welcome to know about default modules");
console.log(monkeypatch.printSpeciesInfo());
console.log(monkeySpecies);


// console.log(monkeyp.printSpeciesInfo());
// console.log(monkeySpecies);