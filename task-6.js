'use script'

import scientist from './scientist.js'


//1) Вернуть массив в котором будут персонажи которые родились с 1850 года и прожили 80 или больше лет


const getFilter = scientist
.filter(year => year.year > 1850)
.filter(user => (user.year + 80) <= user.passed)
.map(user => user.first);
console.log(getFilter);

// если (user.year + 80 ktn) =< user.passed   ? { `Name: ${user.first}`, }: user.year



/*
* 7
*/
// Подщитать общее количество проживших лет персонажей с этого же массива
const getSummYear = scientist
.map(el => el.passed - el.year)
.reduce((acc,val) => acc += val)
console.log(getSummYear);

