'use script'


// *3
// 
// Вернуть только массив первых вдух объектов
const users2 = [
 { id: 1, name: "Вася" },
 { id: 2, name: "Петя" },
 { id: 3, name: "Маша" }
];
// Тут пиши код. Логику помещять в функцию


const getUsersFilter = users2 => 
   users2.filter(el => el.id < 3);

console.table(getUsersFilter(users2));
