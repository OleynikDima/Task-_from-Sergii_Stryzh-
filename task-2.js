'use script'

//2
// Найти объект с id=2
const users1 = [
 { id: 1, name: "Вася" },
 { id: 2, name: "Петя" },
 { id: 3, name: "Маша" }
];
// Тут пиши код. Логику помещять в функцию

const getUserFind = (users1,id) => 
     users1.find(user => 
        user.id === id);

console.log(getUserFind(users1, 2));
