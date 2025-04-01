//function that tekes an array and returns the largest number

function largestNumber(arr) {
    let largest = arr[0]; 
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

//console.log(largestNumber([1,6,3,4,5]));

//Write a function that takes a string as input and returns the count of vowels (a, e, i, o, u) in the string.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

//console.log(countVowels("Hello Mahdi")); 

//Js Coding Challenge -> Begginer level

//Write a function that prints numbers from 1 to n. For multiples of 3, print "Fizz" instead of the number; for multiples of 5, print "Buzz"; and for numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

//fizzBuzz(15); 

//write a function that finds the longest word in a sentence.

const longestWord = (str) => {
    const arr = str.split(" ")
    let long = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (long.length < arr[i].length) {
            long = arr[i]
        }
    }
    return long
}

console.log(longestWord("Hello world from the offices of La fosse Academy victoria"))