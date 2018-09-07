//Let is confined to function scope and block scope. Prior to 2015, the only
//way to decalre a variable was the keyword "var". For demo purposes, comment out the first 
//snippet with the for statement to see the error the second snippet will produce at compilation.

/* 
 The below snippet displays how var is accessible inside the function and outside the function.
 Let declare and initialized inside the function would only have its value accessible inside the curly braces
*/
for(var i=0; i<10;i++){
	console.log("i in the loop has the value: " + i);
}
console.log("i after the loop is: " + i);


/*
The below snippet exhibits how 'let i=0' executes properly inside the for control statement,
but if I console.log() the variable i outside the function, the compiler will declare that i 
is undefined. This example shows the function scope of the let variable.
*/
for(let i=0; i<10;i++){
	console.log("The value of 'i' inside this iteration is " + i);
}

console.log(i)