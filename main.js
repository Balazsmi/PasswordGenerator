var lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q','r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbersArray = ['0','1','2','3','4','5','6','7','8','9'];
var symbolsArray = ['!','@','#','$','%','_','&','*','+','/','-','=','<','>','?'];

var temp = [];

var password = [];


var upperCaseCheckbox = document.getElementById("upperCaseCheckbox");
var numberCheckbox = document.getElementById("numberCheckbox");
var symbolCheckbox = document.getElementById("symbolCheckbox");
var length = document.getElementById("length");

function generate() {
    password = [];
    temp = [];
    if (upperCaseCheckbox.checked == false && numberCheckbox.checked == false && symbolCheckbox.checked == false) {
        lower();
    } else if (upperCaseCheckbox.checked == true && numberCheckbox.checked == false && symbolCheckbox.checked == false) {
        upperCase();
    } else if (upperCaseCheckbox.checked == false && numberCheckbox.checked == true && symbolCheckbox.checked == false) {
        numbers();
    } else if (upperCaseCheckbox.checked == false && numberCheckbox.checked == false && symbolCheckbox.checked == true) {
        symbols();
    } else if (upperCaseCheckbox.checked == true && numberCheckbox.checked == true && symbolCheckbox.checked == false) {
        upperCaseNumbers();
    } else if (upperCaseCheckbox.checked == true && numberCheckbox.checked == false && symbolCheckbox.checked == true) {
        upperCaseSymbols();
    } else if (upperCaseCheckbox.checked == true && numberCheckbox.checked == true && symbolCheckbox.checked == false) {
        upperCaseNumbers();
    } else if (upperCaseCheckbox.checked == false && numberCheckbox.checked == true && symbolCheckbox.checked == true) {
        numbersSymbols();
    } else {
        upperCaseNumbersSymbols();
    }
    output();
}

function output() {
    for(n = 0; n < length.value; n++) { //generate password out of temp array
        password.push(temp[Math.floor(Math.random() * temp.length)]);
        document.getElementById("output").value = password.join("");
    }
}

function lower() {
    for(n = 0; n < length.value; n++) { //generate password out of temp array
        password.push(lowerArray[Math.floor(Math.random() * lowerArray.length)]);
        document.getElementById("output").value = password.join("");
    }
}

function upperCase() {
    for(i = 0; i < upperArray.length; i++) { //combine lowerArray with upperArray and put array into temp
        temp.push(upperArray[i]);
        temp.push(lowerArray[i]);
    }
}

function numbers() {
    for(i = 0; i < lowerArray.length; i++) { temp.push(lowerArray[i]); } //push lowerArray into temp
    for(n = 0; n < numbersArray.length; n++) { temp.push(numbersArray[n]); } //push numbersArray into temp
}

function symbols() {
    for(i = 0; i < lowerArray.length; i++) { temp.push(lowerArray[i]); } //push lowerArray into temp
    for(n = 0; n < symbolsArray.length; n++) { temp.push(symbolsArray[n]); } //push symbolsArray into temp
}

function upperCaseNumbers() {
    for(i = 0; i < lowerArray.length; i++) { temp.push(lowerArray[i]); } //push lowerArray into temp
    for(n = 0; n < upperArray.length; n++) { temp.push(upperArray[n]); } //push upperArray into temp
    for(n = 0; n < numbersArray.length; n++) { temp.push(numbersArray[n]); } //push numbersArray into temp
}

function upperCaseSymbols() {
    for(i = 0; i < lowerArray.length; i++) { temp.push(lowerArray[i]); } //push lowerArray into temp
    for(n = 0; n < upperArray.length; n++) { temp.push(upperArray[n]); } //push upperArray into temp
    for(n = 0; n < symbolsArray.length; n++) { temp.push(symbolsArray[n]); } //push symbolsArray into temp
}

function numbersSymbols() {
    for(i = 0; i < lowerArray.length; i++) { temp.push(lowerArray[i]); } //push lowerArray into temp
    for(n = 0; n < symbolsArray.length; n++) { temp.push(symbolsArray[n]); } //push symbolsArray into temp
    for(n = 0; n < numbersArray.length; n++) { temp.push(numbersArray[n]); } //push numbersArray into temp
}

function upperCaseNumbersSymbols() {
    for(i = 0; i < lowerArray.length; i++) { temp.push(lowerArray[i]); } //push lowerArray into temp
    for(n = 0; n < symbolsArray.length; n++) { temp.push(symbolsArray[n]); } //push symbolsArray into temp
    for(n = 0; n < numbersArray.length; n++) { temp.push(numbersArray[n]); } //push numbersArray into temp
    for(n = 0; n < upperArray.length; n++) { temp.push(upperArray[n]); } //push upperArray into temp
}

function copy() {
  var output = document.getElementById("output");
  output.select();
  document.execCommand("copy");
  document.getSelection().removeAllRanges();
}