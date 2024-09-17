// Sin parametros y sin retorno
function sayHello(){
    console.log("Hello");   
}
sayHello();

// Con parametros y sin retorno
function sayHelloTo(name){
    console.log("Hello " + name);
}
sayHelloTo("Juan");

// Con parametros y con retorno
function sum(num1, num2){
    return num1 + num2;
}
const result = sum(5, 7);
console.log(result);

// con parametros opcionales
function multiply(num1, num2 = 1){
    return num1 * num2;
}
console.log(multiply(5));
console.log(multiply(5, 3));

// funciones anónimas
setTimeout(function (){
    console.log("Hola mundo");
}, 1000);

const duplicate = function (num){
    return num * 2;
}
console.log(duplicate(2));

// Arrow functions
// () => {}
const sayHello2 = () => console.log("Hello");
sayHello2();

const sayHelloTo2 = name => console.log("Hello " + name);
sayHelloTo2("Peter");

const sum2 = (num1, num2) => num1 + num2;
const result2 = sum2(5, 7);

setTimeout(() => console.log("Hola mundo"), 1000);