// Задача 2.
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for(let i = 0; i < week.length; i++) {
    if (week[i] == 'Суббота' || week[i] == 'Воскресенье') {
        week[i] = week[i].bold();
    } 

    let newDiv2 = document.createElement('div');
    div_02_result.append(newDiv2);
    newDiv2.innerHTML = week[i];
}
