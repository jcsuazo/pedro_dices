// alert('hello');
var names = ['juan', 'pedro'];
var names2 = ['maria'];
var names3 = ['alex', 'pepa', 'rosa'];

function whoIsPaying(pedro) {
  var result = pedro.length;
  console.log(result);
}

// whoIsPaying(names);
// whoIsPaying(names2);
// whoIsPaying(names3);

//Data types
//Primitives
//String
//Number
//integer (numeros enteros)
//float (numeros decimales)
var num1 = 1; //space for num1
var num2 = 2; //space for num2
var num3 = num1; //space for num3
console.log(num1);
console.log('-----');
console.log(num2);
console.log('-----');
console.log(num3);
num3 = 3;
console.log('-----');
console.log(num3);
console.log('-----');
console.log(num1, num2, num3);
//boolean (false, true)
//undefined
//null

//Reference
//Array
var array1 = [1, 2, 3, 4];
var array2 = [...array1];
console.log(array1, array2);

array1.push(5);
console.log('-----------');
console.log(array1, array2);
//Obj
