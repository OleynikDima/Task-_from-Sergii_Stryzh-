'use script'


/*
 * 4
 */
// Вернуть только массив без объекто у которого id === 2
const users3 = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 3, name: "Маша" }
  ];
  // Тут пиши код. Логику помещять в функцию


const getUsersWidthId = (users3,id) => users3.filter(el => el.id !==id );


console.table(getUsersWidthId(users3, 2));


