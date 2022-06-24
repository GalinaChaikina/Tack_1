// Задача 6
// Составьте массив дней недели. С помощью foreach выведите все дни недели, а текущий день выведите курсивом.
// Текущей день недели должен быть получен с помощью JS класса Date

const weekDay = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let todayDay = new Date();

weekDay.forEach((item, index) => {
    if (index == todayDay.getDay()-1) {
        weekDay[index] = weekDay[index].italics();
    }

    let newDiv6 = document.createElement('div');
    div_06_result.append(newDiv6);
    newDiv6.innerHTML = weekDay[index];
});
