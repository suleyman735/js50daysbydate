// Case 1

// -----------------Requirements-------------
// 1.- At least two letters
// 2- Numbers should be at the end, if there are AnalyserNode
// 3. Letters can be either lowercase or uppercase
// 4- If there are two letters they cannot contain numbers

// let username = "k9";

// let usernameCheck = /^[A-Za-z]{2,}\d*$/;

// let checkStatus = usernameCheck.test(username)
// console.log(checkStatus)


// ^[A-Za-z] --> it matches all letters uppercase and lowercase
// {2,}      --> it requires the quantity of characters to be least 2
// \d        --> it insersts matches for digits
// *         --> it mathces the characters that occur zero or more times
// $         --> it makes sure the digits are at the end of username


// Case 2
// -----------------Requirements-------------
// 1- Passwords must be at least 8 characters
// 2- Passwords must contain at least two consecutive digits

let password = 'cofrso343'

let passCheck = /(?=\w{8})(?=\D*\d{2})/

let checkStatus = passCheck.test(password)

console.log(checkStatus)

// (?=\w{8})    --> a positive lookahead that matches 8 or more letters and digits
// (?=)         --> a positive lookahead
// \w           -->matches all letters and numbers and 
// {8}          --> a quantity specifier that is looking for the exact number Off occurance which is 8
// \D*          --> zero or more occurances of characters that are not digits
// \d{2}        --> two consecutive digits

