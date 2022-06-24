// Задача 8
// Используя функцию из задания 7 напишите функцию union, которая возвращает массив состоящий только из уникальных элементов из каждого массива.
// const array1 = [5, 2, 1, -10, 8];
// const array2 = [5, 2, 1, -9, 3, 7];
// const union = function(array1, array2) {
//     ваш код
// }
// document.writeln(union(array1, array2)); // [-10,8,5,2,1,-9,3,7]

const array1 = [5, 2, 1, -10, 8];
const array2 = [5, 2, 1, -9, 3, 7];
const result1 = union(array1, array2);

function union(array1, array2) {
    const array3 = [...array1, ...array2];
    return Array.from (new Set(array3));
}

let newDiv8 = document.createElement('div');
div_08_result.append(newDiv8);
newDiv8.innerHTML = result1;
