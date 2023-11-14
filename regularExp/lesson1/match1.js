// let sentence = "The quick brown fox jumps over the lazy dog";

// example - 1 -> Matching a qord in sentences (case-sensitive) ( yhe test method)
// let reg1X = /dog/
// let search1Result = reg1X.test(sentence)
// console.log(search1Result); 

// example - 2 -> Matching for Multiple word in sentences (case-sensitive) ( the test method)
// let reg2X = /dog|forx|blue/;
// let search2Result = reg2X.test(sentence)
// console.log(search2Result); 


// example - 3 -> Ignoring the case-sensitivensess (using the i flag) ( the test method)
// let reg3X = /quick/i; // i -boyuk kicik herfler
// let search2Result = reg3X.test(sentence)
// console.log(search2Result);


// // Example 4 -> getting the matched word(the match method)
// let reg4X = /fox/i;
// let search4Result = sentence.match(reg4X);
// console.log(search4Result);


// Example 5 -> getting the matched word(the match method) (using the g flag)
// let reg5X = /the/gi; // g cunledeki butun the leri verir
// let search5Result = sentence.match(reg5X);
// console.log(search5Result);

// Example 6 -> getting the matched word with dot (the match method)
// let reg6X = /.o./g; // noqteler icindeki herfin cunledeki butun o lari verir, tek nogte butun herfler array iverisinde
// let search6Result = sentence.match(reg6X);
// console.log(search6Result);

// // Example 7 -> getting the matched characteres with [] (the match method)
// let reg7X = /[bdh]/g; // noqteler icindeki herfin cunledeki butun o lari verir, tek nogte butun herfler array iverisinde
// let search7Result = sentence.match(reg7X);
// console.log(search7Result);

// Example 8 -> getting the matched characteres of alphabet with [] (the match method)
// let reg8X = /[a-z]/gi; // noqteler icindeki herfin cunledeki butun o lari verir, tek nogte butun herfler array iverisinde
// let search8Result = sentence.match(reg8X);
// console.log(search8Result);


//let sentence2 = "The 11 Quick 65 borwn 721 fox 654 jumps 32 over 25 the 51 lazy 93 dog"


// Example 9 -> getting the Matched numbers & characters of alphabet with [] 
// let reg9X = /[1-3x-z]/gi;
// let search9Result = sentence2.match(reg9X);
// console.log(search9Result)

// Example 10 -> getting NOT the Matched numbers & characters of alphabet with [] ->Negated Character Sets

//carrot vegetable
// caret ^ (shift 6)

// let reg10X = /[^1-9a-v]/gi; //get everything except the ones included in []
// let search10Result = sentence2.match(reg10X);
// console.log(search10Result)


// // Example 11 ->  Getting the matched numbers  & characters that occur one or more

// let reg11X = /1+/gi;
// let search11Result = sentence2.match(reg11X);
// console.log(search11Result)


// // Example 12 ->  Getting yhe matched characters that occur zero or more times
//   let sentence2 = "gooooooooogle";

// let reg11X = /go*/gi;
// let search11Result = sentence2.match(reg11X);
// console.log(search11Result)


// // // Example 13 ->  Getting the matched characters with lazy matching ?


// let reg13X = /T.*/gi;
// let search13Result = sentence2.match(reg13X);
// console.log(search13Result)



// // Example 14 ->  Matching the beginning string patterns


// let reg14X = /^The/i;
// let search14Result = sentence2.match(reg14X);
// console.log(search14Result)

// // // Example 15 ->  Matching the ending string patterns


// let reg15X = /The$/i;
// let search15Result = sentence2.match(reg15X);
// console.log(search15Result)

// // Example 16 ->  Matching all letters & numbers


// let reg16X = /\w/g; //  lowercase w matches a-z & 0-9
// let search16Result = sentence2.match(reg16X);
// console.log(search16Result)


let sentence3 = "The 11 Quick 65 brown 7210 fox _ 6053 jumps 32 over 205 the 51 lazy 103 dog RadioNodeList;;y really @ The %% & + ()[]+_ =* yeeeeeeeeeeeee";


// Example 17 ->  Matching NOT all letters & numbers

// let reg17X = /\W/g; //the uppercase W matches everything that is not(a-z) & (0-9) &_
// let search17Result = sentence3.match(reg17X);
// console.log(search17Result);



// Example 18 ->  Matching all letters & numbers
// let reg18X = /\d/g; //the uppercase W matches everything that is not(a-z) & (0-9) &_
// let search18Result = sentence3.match(reg18X);
// console.log(search18Result);



// // Example 19 ->  Matching all NON-numbers
// let reg19X = /\D/g; 
// let search19Result = sentence3.match(reg19X);
// console.log(search19Result);


// Example 20 ->  Matching all the whitespace (space, enter, tap v.s)
// let reg20X = /\s/g; 
// let search20Result = sentence3.match(reg20X);
// console.log(search20Result);

// Example 21 ->  Matching all the non-whitespace (space, enter, tap v.s)
// let reg21X = /\S/g; 
// let search21Result = sentence3.match(reg21X);
// console.log(search21Result);

// Example 22 ->  specifing upper & lower number of matches using the quantity specifiers

// let reg22X = /e{2,20}/g; 
// let search22Result = sentence3.match(reg22X);
// console.log(search22Result);

// Example 23 ->  specifing only lower number of matches using the quantity specifiers

// let reg23X = /e{2,}/; 
// let search23Result = sentence3.match(reg23X);
// console.log(search23Result);

// Example 24 ->  specifing the exact number of matches using the quantity the quantity

// let reg24X = /o{2}/; 
// let search24Result = sentence3.match(reg24X);
// console.log(search24Result);


// Example 25 ->  Check for all or none

// -------



// Example 26 ->  Positive  Lookahead

// let reg26X = /j(?=u)/;
// let reg26X = /j(?=o)/;
// let reg26X = /j(?=m)/;
// let search26Result = reg26X.test(sentence3);
// console.log(search26Result)


// Example 27 ->  Neqative  Lookahead -> testing for a  - ve condition to be true
// let reg26X = /j(?!m)/;
// let reg26X = /j(?!u)/;
// let search26Result = reg26X.test(sentence3);
// console.log(search26Result);











