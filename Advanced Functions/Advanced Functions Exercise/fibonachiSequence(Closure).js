function getFibonator() {
    let num1 = 0;
    let num2 = 1;
    function myFib(){
        let result =num1 + num2;
        num1 = num2;
        num2 = result;
        return num1;
    }
    return myFib;
}

let fib = getFibonator(); // Когато една функция е затворена в променлива кода ще започне да се изпълнява отвътре навън 
//и когатовътрешната функция срещне return ще излезе без да променя нищо от външната. Ако извикаме директно външната всички променливи ще се създадат наново.
//С две думи запазва се state на функцията когато е затворена в променлива и колкото и да я викаме тази променлива, 
//стейта на scoope на първата функция е един и същ - това наричаме CLOSURE в JavaScript.
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
