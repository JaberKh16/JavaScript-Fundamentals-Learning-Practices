// importing as named module without aliasing import
import {liboptions} from "./module.js";

// importing as named module with aliasing import
import {summation_result as sumOperation } from "./module-2.js";

console.log(liboptions);
console.log(sumOperation([1, 5, 7]));