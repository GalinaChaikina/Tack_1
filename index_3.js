// Задача 3.
// Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал.
// vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// function arrayClone(arr) {
// Ваш код
// }

const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
const arr = arrayClone();

function arrayClone(arr) {
    arr = [...vegetables];
    
    let newDiv3 = document.createElement('div');
    div_03_result.append(newDiv3);
    newDiv3.innerHTML = arr;
};
