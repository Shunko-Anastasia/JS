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

