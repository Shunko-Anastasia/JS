/* 1.Дан массив целых чисел. 
Числа не отсортированы и могут повторяться. 
Необходимо найти в данном массиве такие два числа M и N, чтобы их сумма была равна 7. Например, 3 + 4 = 7 или 0 + 7 = 7 или -2 + 9 = 7 и тд. 
Для решения достаточно найти хотя бы одну подходящую пару чисел M и N. */

let arr=[-2,5,-1,-5,9,3,7,0,1,4,8,12,3];
	for (let m=0; m<arr.length;m++){
 		for (let n=0; n<arr.length;n++) {
 			if (arr[m] + arr[n] ===7 ) {
 			console.log ("Сумма числа "+arr[m]+" и числа "+arr[n]+" равна 7");
 			}
 		}
	}

/* 2.Вывести через console.log все числа от 1 до 100, с двумя исключениями. 
Для чисел, нацело делящихся на 3, она должна выводить ‘Three’, а для чисел, делящихся на 5 (но не на 3) – ‘Five’. 
Измените код так, чтобы она выводила «ThreeFive» для всех чисел, которые делятся и на 3 и на 5. */

for (let i=1; i<=100; i++) {
	if (i%5===0 && i%3===0) {
		console.log(i+" ThreeFive");
	} else if (i%3===0) {
		console.log(i+" Three");
	} else if (i%5===0) {
		console.log(i+" Five") 
	} else {
		console.log(i)
	}
}

/* 3. Задать количество тарелок и количество моющего средства.
 Моющее средство расходуется из расчета 0,5 на одну тарелку. 
 В цикле выводить сколько моющего средства осталось после мытья каждой тарелки 
 В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.
 */

let x=2; //тарелки
let y=3; //моющее средство

do {
	x=x-1;
	y=y-0.5;
	console.log(y+" моющего средства осталось после вымытой тарелки");
	if (y===0) {
		console.log(x+" тарелок осталось,когда закончилось моющее средство");
		break;
	} else if (x===0){
		console.log(y+" осталось моющего средства, когда вымыли все тарелки");
		break;
	}
}
while (x!==0 && y>0)

/* 4.Создайте 2 массива равной длины, выведите массивы на экран. 
Посчитайте среднее арифметическое элементов каждого массива и сообщите, для какого из массивов это значение оказалось больше (либо сообщите, что их средние арифметические равны).
 */

let arr1 = [7, 1, 4, 5, 3, 2, 6];
let arr2 = [1, 8, 4, 2, 3, 5, 7];
console.log(arr1, arr2);
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
    sum2 += arr2[i];
}
let average1 = sum1 / arr1.length;
let average2 = sum2 / arr2.length;
console.log(average1, average2);
if (average1 > average2) {
    console.log("cреднее арифм. массива 1 > среднего арифм. массива 2");
} else if (average2 > average1) {
    console.log("cреднее арифм. массива 2 > среднего арифм массива 1");
} else if (average1 == average2) {
    console.log("cреднее арифм. массива 1 = среднему арифм. массива 2");
};

/* 5.1)Пользователь вводит число,
 создать массив заданного размера, 
 вывести элементы массива в обратном порядке */

let number = prompt("Необходимо ввести число");
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
    let rand = [];
        for (let i = 0; i < number; i++) {
        rand[i] = getRandomInt(0, 31);
        console.log(rand[i]);
}
    console.log(rand.reverse());


/* 2)Создайте программу, 
выводящую на экран первые 20 элементов последовательности 2 4 8 16 32 64 128 */

var num = 1;
    for (let i = 0; i < 20; i++) {
	num *= 2;
	console.log(num);
};