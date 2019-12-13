/* 1. Дано натуральное число N. 
Вычислите сумму его цифр, используя рекурсию (строки, массивы и циклы использовать запрещено). */
function sumNum(num) {
if (num < 0) {
        return "Число не натуральное";
    }
if (num < 10) {
        return num;
    }
    let rest = num % 10;
    let sum = Math.floor(sumNum(num / 10)) + rest;
    return sum;
}
console.log(sumNum(26));

/* 2. Напишите функцию range, принимающую три аргумента, два обязательных: 
начало и конец диапазона, 
третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива. 
Функция возвращает массив, который содержит все числа из него, включая начальное и конечное. 
Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]. */

function range(begin, end, step=1) {
    let arr = [];
    arr[0] = begin;
    for (let i = 1; i <= (end - begin) / step; i++) {
        arr[i] = arr[i-1] + step;
    }
    return arr;
}

let ex = range(-4, 12, 3);
console.log(ex);

/* 3. Напишите функцию, 
которая в зависимости от переданного в нее целочисленного аргумента count, будет возвращать слово «день» в нужной форме 
(«12 дней», но «22 дня» и тд). */

function getNumberOfDay(count) {
    let dec = count % 10;
    if (dec > 2 && dec < 5) {
        return count + "Дня";
    }
    if (dec == 1) {
        return count + "День";
    }
    return count + "Дней";
}
console.log(getNumberOfDay(21));

/* 4. Сгенерировать 5 массивов из случайных чисел 
(самостоятельно посмотреть про рандом).
 Вывести массивы и сумму их элементов на экран.
  Найти массив с максимальной суммой элементов. 
  Вывести его на экран еще раз.
   Генерация массива и подсчет суммы - разные функции */
   
function randomArrow(arrLength) {
    let arrow = [];
    for (let i=0; i<arrLength; i++) {
    arrow[i] = Math.floor(Math.random()*100);
    }
    return arrow;
}

function sumArr(arrow) {
    let sum = 0;
    for (let i=0; i<arrow.length; i++) {
        sum += arrow[i]
    }
    return sum;
}

function findBiggest(arrow) {
    let biggest = arrow[0];
    for (i=0; i<arrow.length; i++) {
        if (arrow[i]>biggest) {
            biggest=arrow[i];
        }
    }
    return biggest;
}

let arr1 = randomArrow(5);
console.log(arr1);
let sum1 = sumArr(arr1);
console.log(sum1);

let arr2 = randomArrow(5);
console.log(arr2);
let sum2 = sumArr(arr2);
console.log(sum2);

let arr3 = randomArrow(5);
console.log(arr3);
let sum3 = sumArr(arr3);
console.log(sum3);

let arr4 = randomArrow(5);
console.log(arr4);
let sum4 = sumArr(arr4);
console.log(sum4);

let arr5 = randomArrow(5);
console.log(arr5);
let sum5 = sumArr(arr5);
console.log(sum5);

let arrOfSums = [sum1, sum2, sum3, sum4, sum5];
console.log("суммы массивов: "+arrOfSums);

let biggestSum = findBiggest(arrOfSums);
console.log("наибольшая сумма: "+biggestSum);



