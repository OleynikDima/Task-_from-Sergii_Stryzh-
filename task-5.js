'use script'

/*
 * 5
 */
// Произвести общий подсчет кроме чисел которые идут под четными индексами массива
const nums = [10, 20, 30, 40, 50];
// Тут пиши код. Логику помещять в функцию



const getSummEvenNumbers = nums => nums.filter((_,index) => 
           index % 2 != 0 )
           .reduce((el,arr) => arr += el);

console.table(getSummEvenNumbers(nums));


