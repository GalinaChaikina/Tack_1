// Задача 4.
// Напишите функцию, которая преобразовывает и объединяет все элементы массива (numbers + strings) в одно строковое значение. Элементы массива будут разделены запятой. Получите результат двумя разными методами (с использованием цикла и без него)
// Функция должна принимать массив а возвращать строку

let array = ['new', 1, 'javaScript', 8, 5, 'hello', 22, 18, 'task', 23];

// 1 способ с циклом
array = transformationArray2();
function transformationArray2() {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toString(); 
        return array;
    }
}

// 2 способ без цикла

// array = transformationArray1();
// function transformationArray1() {
//     let newDiv4 = document.createElement('div');
//     div_4.append(newDiv4);
//     newDiv4.innerHTML = array + '';
//     newDiv4.style.display = 'flex';
//     newDiv4.style.justifyContent = 'center';
// };

let newDiv4 = document.createElement('div');
div_04_result.append(newDiv4);
newDiv4.innerHTML = array.join(', ');