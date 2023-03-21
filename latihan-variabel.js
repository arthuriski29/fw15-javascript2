
// var a = 10

// // User can re-declare
// // variable using var
// var a = 8

// // User can update var variable
// a = 7

// console.log(a);


// let a = 5

// let a = 6

// console.log(a)


// const a = 9

// // const a = 10

// a = 12

// console.log(a)



function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);

console.log(processUserInput(greeting));
