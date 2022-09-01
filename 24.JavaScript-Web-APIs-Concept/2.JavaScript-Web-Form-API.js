/*
    JavaScript Web Form API
    =======================
    Web Form API provides a DOM manipulation methods for Form API.
    
    There are two methods to work with form validation-
    1) checkValidity()      --> returns booleans value if an element contains
                                a valid data.
    2) setCustomValidity()  --> sets the validationMessage property of an 
                                input element.
    
    Those are generally called the Constraints of validation methods.

    Constraints Validation DOM Properties
    -------------------------------------
    1) validity          -->    contains booleans properties related to the 
                                validity of an input element.
    2) validationMessage -->    contains the message a browser will display
                                when the validation is false.
    3) willValidate      -->    indicates if an input element will be validated.

    Validity Properties
    -------------------
    The validity property of an input element contains a no. of properties related
    to the validity of data. Those are the following-

    1)  valid           --> sets to true, if an input element value is valid.
    2)  customError     --> sets to true, if a custome validation message is set.
    3)  rangeOverflow   --> sets to true, if an input elements value is greater then its max attribute.
    4)  rangeUnderflow  --> sets to true, if an input elements value is less then its min attribute.
    5)  tooLong         --> sets to true, if an input elements value exceeds its maxLength attribute.
    6)  valueMissing    --> sets to true, if an input element(with a required attribute) has no value.
    7)  stepMismatch    --> sets to true, if an input elements value is invalid per its step attribute.
    8)  patternMismatch --> sets to true, if an input element doesn't match its pattern attribute.
    9)  typeMismatch    --> sets to true, if an input elements value is invalid per its type attribute.

*/

// defining the 'use strict' statement
'use strict';

// getting the the range element
function clickedEvent() {
    const inputtedValue = document.getElementById('number-range');
    // console.log(inputtedValue);
    if(!inputtedValue.checkValidity()){
        document.getElementById('written-line').innerText = inputtedValue.validationMessage; 
    }
}
