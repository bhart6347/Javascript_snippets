//below is how you declare an empty array
var pets = [];

//lets initialize some values in our pet array
pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";

//In JS you can assign values to any index, it doesn't have to be i numerical order.
//If you attempt to access an empty index, the compiler will give you an "undefined" message.
//Lets console.log our new pet array. You should see ['dog', 'cat', 'bird']
console.log(pets);

//You can replace a value in an array be simply assigning the new value to an index. Example:
pets[3] = "lizard";

//Let's console.log our modified pet array. You should see ['dog', 'cat', 'lizard']
console.log(pets);

//Let's discuss removing and inserting elements. The shift() removes the first element from the array.
//When we print our array, the 'dog' element was removed from the beginning of the array.
//The array should be as follows: [ 'cat', 'bird', 'lizard' ]
pets.shift();
console.log(pets);

//If we wanted to add one or more elements to our pet array, we can use the unshift(). The new array
//will add "ferret" and "fish" to the 0 and 1 indixes, respectively.[ 'ferret', 'fish', 'cat', 'bird', 'lizard' ]
pets.unshift("ferret", "fish");
console.log(pets);

//The splice method is used to insert one or more elements anywhere in your array.
//pets.slice(2,2,"pig", "duck"); uses the first argument to start at the index you want to 
//start adding new elements, the second argument indicates how many elements you want to remove
//starting with the first element that comes after the elements you're splicing in.
pets.splice(2,2, "pig", "duck");
console.log(pets);
//[ 'ferret', 'fish', 'cat', 'bird', 'lizard' ] *The array prior to using splice()
//[ 'ferret', 'fish', 'pig', 'duck', 'lizard' ]*The new array. "pig" was placed in index 2 (replacing "cat")
//"duck" was placed in index 3 (replacing "bird")

//Suppose we just wanted to add elements to the array, without removing any. In the splice method,
//place "0" as the second argument; this way, any existing elements are simply shifting to the right