'use script'


/*
 * 1
 */
// Код ниже получает из массива строк новый массив, содержащий их длины:
const arr = ["Есть", "жизнь", "на", "Марсе"];
// Тут пиши код. Логику помещять в функцию

const getUserLength = arr => arr.map(el => el.length);

console.log(getUserLength(arr));
