//factorial means বিন্যাস।
// 1! =1 * 1
// 2! =2 * 1
// 3! =3 * 2 * 1
// 4! =4 * 3 * 2 * 1
// 5! =5 * 4 * 3 * 2 * 1
// 6! =6 * 5 * 4 * 3 * 2 * 1
// 7! =7 * 6 * 5 * 4 * 3 * 2 * 1
//factorial by looping
// var factorial=1;
// for (var i = 1; i <= 9; i++) {
//     console.log(i)
//      factorial=factorial * i;6
// }
// console.log(factorial);

//factorial by function
function getFactorial(num) {
    var factorial=1;
    for (let i = 1; i <=num; i++) {
         factorial=factorial * i;
        // console.log(i);
        
    }
    return factorial;
}

const firsFactorial=getFactorial(10);
console.log('First factorial result is',firsFactorial);

//factorial by while loop
function getFact(number) {
    let fact=1;
    let i=1;
    while (i<=number) {
        fact=fact * i;
        console.log(i);
        i++;
    }
    return fact;
}
const secondFact=getFact(7);
console.log('Second factorial result is',secondFact);

//decreamenting factorial by loop
function getFactorial2(number) {
    let factNum=1;
    let i=number;
    while (i>=1) {
        factNum=factNum * i;
        i--;
    }
    return factNum;
}
const factResult=getFactorial2(8);
console.log('Decrementing factorial result is',factResult);

//factorial by recursive way alternative of looping
function recursiveFactorial(n) {
    if (n==1) {
        return 1;
    }
    return n * recursiveFactorial(n-1);
}
const recursiveResult=recursiveFactorial(6);
console.log('Recursive factorial result is',recursiveResult)
