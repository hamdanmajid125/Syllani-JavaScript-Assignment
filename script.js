
// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223


// var n = prompt("EnterNumber")
// n = n + "";
// alert(n.split("").reverse().join(""));


// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?

// var string = prompt("Enter String")
// var palindrome = "";
// for(var i = string.length-1; i>=0;i--)
// {
//     palindrome = palindrome + string[i]
// }
// alert(palindrome);


// 3. Write a JavaScript function that generates all combinations of a strings

// var string = prompt("Enter String")
// var combine = [];
// for(var i = 0 ;i < string.length; i++)
// {
//   for(let j = i + 1; j< string.length + 1; j++)
//   {
//     combine.push(string.slice(i , j));
//   }
// }
// console.log(combine)

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// var string = prompt("Enter String")
// var alpha = string.split("");
// updated = alpha.sort().join("");
// alert(updated);



// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

// var string = prompt("Enter String")

// var array1 = string.split(' ');
//   var newarray1 = [];
//   for(var x = 0; x < array1.length; x++){
    
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
      
//   }
// alert(newarray1.join(' '));

// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// alert(longestWord(prompt("Enter String")))

// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// var string = prompt("Enter String")
// var count = 0;
// for (var i =0; i<string.length;i++)
// {
//     if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u')
//     {
//         count++;
//     }    
// }
// alert(count)

// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// var n = prompt("Enter the number")
// if(n == 1)
// {
//     alert("This is prime number")
// }
// else if(n == 2)
// {
//     alert("This is prime number")
// }
// else{
//     let bool =  false;
//     for(let i =2; i< n;i++)
//     {
//         if(n == 2)
//         {
//             alert("This is prime number")
//             bool = true
//         }
//     }
//     if(bool)
//     {
//         alert("This is not prime number") 
//     }
// }

// Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
// function typechecker(argument){
//     return typeof argument
// }
// var argument = prompt("Enter the argument")
// var type = typechecker(argument)
// alert(type)


// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
var array = [1,2,3,4,5]
var max = array.max()
var index = array.indexOf(max);
if (index !== -1) {
  array.splice(index, 1);
}
alert("The second largest maximum is ",array.max())
