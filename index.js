//syntax
//let arr = new Array();
//let arr = [];
let fruits = ["Apple", "Orange", "Plum"];
//Array elements are numbered, starting with zero.
//We can get an element by its number in square brackets:
alert(fruits[0]); // Apple
alert(fruits[1]); // Orange
alert(fruits[2]); // Plum
//add another to the array
fruits[2] = 'Mangoes';
//checking length
alert(fruits.length);
//whole array reading
alert(fruits);

//ARRAYS WITH MIXED TYPES
// mix of values
//syntax;
/*let arr = [ '',{name:''},true,function()
{alert('');}];
*/
let arr = ['Apple', { name: 'John' }, true, function() { alert('hello'); }];

let arr1 = ['mangoes', 'melon', { name: 'solo' }, true, function() {
  alert('second array');
}];

// get the object at index 1 and then show its name
alert(arr[1].name); // John
alert(arr1[2].name)

// get the function at index 3 and run it
arr[3](); // hello
arr1[4]();//second array

//ANOTHER WAY OF WRITING ARRAYS
let arr2 = [
  "water", "eggs", "hills",
];
alert(arr2);
alert(arr2.at(0));//water
alert(arr2.at(1));//eggs
alert(arr2.at(-1));//hills

//PUSH AND POP
arr2.push('land');
alert(arr2);
alert(arr2.pop());
alert(arr2);

//SHIFT AND UNSHIFT
/*Extracts the first element of the array and returns it:*/
alert(arr2.shift()); // remove water and alert it

/*Add the element to the beginning of the array:*/
let arr3 = ["current", "voltage"]
arr3.unshift('power');
alert(arr3);
/*Methods push and unshift can add multiple elements at once:*/

//INTERNALS
let fruits1 = ["Banana"]
let arra = fruits1; // copy by reference (two variables reference the same array)
alert(arra === fruits1); // true
arra.push("Pear"); // modify the array by reference
alert(fruits1); // Banana, Pear - 2 items now
