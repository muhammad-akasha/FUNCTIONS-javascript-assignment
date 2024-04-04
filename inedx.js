// question 1

document.write("<h1> Get the current date and time </h1>");
let currentdate = new Date();

let date = currentdate.getDate();
let month = currentdate.getMonth() + 1;
let year = currentdate.getFullYear();
let time24 = currentdate.getHours();
let minutes = currentdate.getMinutes();
let second = currentdate.getSeconds();

time12 = time24 % 12 || 12;

let timePeriod;

if (time24 < 12) {
  timePeriod = "AM";
} else {
  timePeriod = "PM";
}

document.write(" <h2> Current date and time: " + currentdate, "</h2>");
document.write(" <h2> Current hour: " + time12 + " " + timePeriod, "</h2>");
document.write(" <h2> Current minute: " + minutes, "</h2>");
document.write(" <h2> Current second: " + second, "</h2>");
document.write(" <h2> Current date: " + date, "</h2>");
document.write(" <h2> Current month: " + month, "</h2>");
document.write(" <h2> Current year: " + year, "</h2>");

// Question 2 ;

let firstName = prompt("Enter Your First Name");
let lastName = prompt("Enter Your Last Name");

function fullName (firstName,lastName){
   alert(" welcome to my page " + firstName + " " + lastName )
}
fullName(firstName,lastName);

// question 3 ;

document.write("<h1> Calculate The Sum Of UserInput. </h1>")

let val1= +prompt("Enter Value One For Addition");
let val2 = +prompt("Enter Value Two For Addition");

document.write( "<h2>" , val1 , " + " , val2 , " = " , sum(val1,val2) , "</h2>") ;


// Question 4 ;

function converttonum(value){
    return Number(value)
}

function sum (val1,val2){
   return val1 + val2
}
function subtraction (val1,val2){
    return val1 - val2
 }

 function multiplication (val1,val2){
    return val1 * val2
 }

 function divide(val1, val2) {
    if (val2 === 0) {
        return "Cannot divide by zero.";
    }
    return val1 / val2;
}

let value1 = prompt("enter value one");
let operator = prompt("enter an operator");
let value2 = prompt("enter value two");

function calculate(value1 , operator , value2){

    val1 = converttonum(value1);
    val2 = converttonum(value2);

    // if (!parseInt(val1) || !parseInt(val2)){
    //     return alert("invalid values")
    // }
    if (/[^\d]/.test(value1) || /[^\d]/.test(value2)){
      return  alert("only contain a number you entered character")
    }
    else if (operator === "+"){
       return sum (value1,value2);

    }
    else if (operator === "-"){
        return  subtraction (value1,value2);
    }
    else if (operator === "*"){
        return  multiplication (value1,value2);

    }
    else if (operator === "/"){
        if(val2 === 0){
            alert("cannot divide by 0")
        }
       return divide(value1,value2)

    }
    else{
        alert("Invalid operator")
    }
}
document.write("<h1> Calculate Of Given Values  </h1>");

document.write("<h2> " , value1 , " " , operator , " " ,  value2 , " = " , calculate(value1,operator,value2) , "</h2>");

// Question 5 ;

document.write("<h1> Squares The Arguments </h1>");

let number =prompt("Enter Any Number for Squares The Number");

function Squares (number){
  return  number * number
} 

document.write ("<h2> The Square Argument Of Number " , number , "<sup> 2 </sup>" , " is " , Squares(number));

// question 6 

function factorial (num){   // ,Factorial means multiplying all the positive integers less than or equal to a given number until the value 1 is reached.. example 3 is given then 3 * 2 * 1 = 6 is a factorail number
    converttonum(num);
    if (num === 0){
        return 1;
    }else{
    return num * factorial(num - 1);
    }
}


// question 7 

let startValForCount = prompt("Enter Start Value From Where To Start Counting");
let endValForCount = prompt("Enter End Value From Where To End Counting");


function counting (startValForCount,endValForCount) {
    converttonum(startValForCount)
    converttonum(endValForCount)
    for (let i = startValForCount ; i <= endValForCount ; i++){
        console.log(i);
    }
}

counting(startValForCount,endValForCount);


let num = 6
var facto = factorial(num);

document.write ("<h1> FACTORIAL OF GIVEN NUMBER  </h2>");

document.write( "<h2>  factorial of " , num , " = " , facto , " </h2> ");

// // question 8 


let base = prompt("Enter A Base Value");
let perpendiculer = prompt ("Enter a Perperdiculer Value");

function computehypotenues (base,perpendiculer){
  basesquared =  Squares(base);
  perpendiculersquared =  Squares(perpendiculer);
  
  hypotenuesSquared = basesquared + perpendiculersquared;
  hypotenues = Math.sqrt(hypotenuesSquared);
  
  return hypotenues;
  
}

let result = computehypotenues(base,perpendiculer);

document.write(" <h1> compute hypotenuse  </h1>");

document.write(" <h2> value of base is : " , base , " the value of perpendicular is : " , perpendiculer , " result is " , result.toFixed(3) , "</h2>");


// question 9 

let widthOfRec = 10;
let heightOfRec = 5;

function calculateTheAreaUsingValues (widthOfRec,heightOfRec) {
  let area = widthOfRec * heightOfRec;
  return area;
}

console.log(calculateTheAreaUsingValues(widthOfRec,heightOfRec));


function calculateTheAreaUsingVariable () {
let width = prompt("Enter the width of rectangle");
let height = prompt ("Enter The Height Of Rectangle");

if (isNaN(width) || isNaN(height)) {
  console.log("Invalid input. Please enter valid numbers.");
  return;
}

let calculate = width * height;
return calculate;
}

console.log(calculateTheAreaUsingVariable());

// question 10 ;


let word = prompt("Enter A word I Will Check That Word Is Palindrome Or not");

function palindrome (word){

let reverse = word.split("").reverse().join("");

if (reverse === word){
  document.write("<h2> Yes ", word ," is a Palindrome Word")
}else{
  document.write("<h2> No ", word ," is Not a Palindrome Word")
} return;
}

console.log(palindrome(word));

// question 11 ;
let sentence = prompt("Enter A Sentence I Will Capitilize The Sentence");

function toCapitilize (sentence){
  let words = sentence.split(" ");
  let sentenceToCapitalize = words.map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  });

  sentenceToCapitalize = sentenceToCapitalize.join(" ");

  return sentenceToCapitalize;

}

console.log(toCapitilize(sentence));

// question 12 ;

function checkLongestStr (findLongest){
  let words = findLongest.split(" ");

  let longestWords = [];
  let longestLength = 0;

  words.forEach(function(word){
    let wordlength = word.length
  

  if (wordlength >  longestLength ){
    longestLength = wordlength
    longestWord = [words]
  }else if (wordLength === longestLength) {
    // If the current word has the same length as the longest length found so far, add it to the list
   return longestWords.push(word);
}
});
}

function checkTheLongest (jumla){
  senten = jumla.split(" ");
 console.log(senten);
let longest = ""
 for (let i = 0 ; i < senten.length ; i++){
   if (senten[i].length >= longest.length){
     longest = senten[i]
  }
}
return longest;

}
let jumla = "web development in pakistan";
let check = checkTheLongest(jumla);

console.log(check)



// question 13

function countOccurence (str,letter){
let strToLower = str.toLowerCase();
let letterToLower = letter.toLowerCase();

let count = 0;

for (let i = 0 ; i < strToLower.length ; i++){
  if (letterToLower === strToLower[i]){
    count++;
  }

}
return count;
}

let str = "hellomybrother";
let letter = "o";

let occurrences = countOccurence(str,letter);

document.write(" <h2> Numbers Of Occurence of " , letter , " is : " , occurrences , "</h2>");



// question 14 ;

let radius = 10;

function calculateCircumference (radius){

  let circumferenceOfCircle = 2 * Math.PI * radius ;

  document.write( " <h2> The Circumference Of " , radius , "  NN is : " ,  circumferenceOfCircle.toFixed(2));


}


function calculateArea (radius){

  let AreaCircle = Math.PI * Math.pow( radius,2 );

  document.write(" <h2> The Area of " , radius , " NN is : " ,  AreaCircle.toFixed(2));


}


calculateCircumference(radius);
calculateArea(radius);

