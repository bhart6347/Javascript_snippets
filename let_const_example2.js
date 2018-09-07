const a=1;
a=2;
//The above snippet willproduce an error because
//once const is initialized, it cannot be reassigned

const x=[1,2,3];
console.log(x);
x.push(4);
console.log(x)
//const values can be mutated by adding or removing a value through any other means than a direct
//assignment, such as pushing a value to an array.