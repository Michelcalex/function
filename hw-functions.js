console.log('#1 Sum');
//Input: two parameters = two numbers
//Output: sum of those numbers

function sum (num1, num2) {
    return num1 + num2;
}

let sumProduct = sum (4,5);
console.log(sumProduct);



console.log ("#2 Avg");
//Input: 3 parameters
//Output: one number - the average of three numbers

function avg (num1, num2, num3) {
    // To get to average of three numbers:
    // 1)add the numbers together
    // 2)divide the sum of those numbers by 3 since there are three parameters

    let avgSum = num1 + num2 + num3;
    return avgSum / 3 
}

let avgProduct = avg (12, 6, 8);
console.log(avgProduct);



console.log ("#3 GreaterThan");
//Input: two parameters
//Output: true  or false
    // A) true if second parameter is greater than the first
    // B) false if it's not true'

function greaterThan (num1, num2) {
    // find out if second parameter is greater than first
    if (num2 > num1) {
        return "true";
    } else {
        return "false";
    }
}

let greaterThanResult = greaterThan(39, 1000);
console.log (greaterThanResult);



console.log ("#4 SecondLargest");
//Input: is an array
//Output:  number - the second largest number

//Steps: 
//1. find largest
//2. Get rid of it
//3.find the largest


let arrayNums = [1,4,8,15,2];
let largest = 0;

function secondLargest (arrayNums) {  ////this one is finding the largest number
    for (let i=0; i < arrayNums.length; i++) {
        if (largest < arrayNums[i]) {
            largest = arrayNums[i];
        }
    }

    let newArray = [ ];
     for (let i = 0; i <arrayNums.length; i++ ) {
         if (largest !== arrayNums[i]) {
             newArray.push(arrayNums[i]);
            //  console.log(newArray);
         }
     }

     largest = 0;


     for (let i = 0; i <newArray.length; i++) {
         if (largest < newArray[i]) {
             largest = newArray[i];
         }
     }

    return largest;

}

let secondLargestResult = secondLargest(arrayNums)
console.log (secondLargestResult);



console.log ("#5 Contains Vowel");
//Input: single string
//Output: true or false. True if the string contains at least one vowel. 

//Steps: 
//1. Pick a string
//2. Check to see if string contains "a, e, i, o, u" 
//3. If string contains at least one vowel, return true otherwise return false

let string = "monkey";
let vowels = ["a", "e", "i", "o", "u"];

function containsVowel(string) {
    for(let i = 0; i < string.length; i++) {
        for (let x = 0; x < vowels.length; x++) {
            if(string[i] === vowels[x]) {
                return true;
            } 
        }
    }

    return false;
}


let containsVowelResult = containsVowel(string);
console.log(containsVowelResult);



console.log ("#6 PigLatin");
//Input: single string
//Output: returns piglatin of the string

//Steps: 
//1. Pick a string
//2. Determine if string begins with consonant or vowel
//3a. If the string begins with a consonant, move all the letters before the first vowel to the end of the string. 
//3b. then add "ay" to the end of the changed string
//4. If the string begins with a vowel, add "way" at the end of it.
//5. Return new string. 

let word = "snow";
let vowel = ["a", "e", "i", "o", "u"];

function pigLation(word){
    for (let i = 0; i < vowel.length; i++){
        if (vowel[i] === word[0]) {
            return word.push("way");
        }
    }

    //at this point, i already know that the string doesn't start with a vowel. 
    //steps: 
    //1.move all letters before first vowel to the end of the string
    //2.add "ay" to that string. 
}



console.log ("#7 longestWord");

function longestWord(sentence) {
    //1. convert sentence into an array
    //2. search thtough the words for the largest letter count
    //3. Once we've checked them all, return the longest one

    let words= sentence.split(' '); //array of strings
    let longest = 0; //length of the longest word so far
    let keeper = ''; //equals empty string
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest) {
            longest = words[i].length; //we have a new longet word 
            keeper = words[i];
            // console.log('found a new longest: ' + keeper);
        }
    }

    return keeper;

}

let winner = longestWord('how much wood would a woodchuck chuck?');
console.log(winner);


console.log ("#8 Divisors");
//Input: number
//Output: returns array

//Steps: 
//1. pick a number.
//2. determine all the numbers that divide evenly into it
//3. return array



console.log ("#9 Weave");
//Input: string and number
//Output: returns string with xth character replaced with an 'x'.

//Steps: 
//1. pick a string and a number
//2. replace the xth character in your string depending on what number you picked. 






console.log ("#10 Bonus");
//Input: a single parameter AKA cost of the meal 
//Output: returns percentage 

//Steps: 
//1. pick a cost of the meal. 
//2. calculate 20% of that amount.
//3. Round up to the nearest dollar. 



console.log ("#11 Pokemon");
//Input: array of numbers 
//Output: returns array that contains the number of total pokemon caught up to that day. 

//Steps: 
//1. determine an array of numbers//
//2. **Not sure I understand what we are suppose to be doing here. 