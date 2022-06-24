// Задача 7
// Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).
// const arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
// function removeDuplicates(arr) {
// // Ваш код
// }
// document.writeln(result);  // [php,css,script,html,java]

const arrStr = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
const result = removeDuplicates(arrStr);

function removeDuplicates(arrStr) {
    return Array.from (new Set(arrStr));
}

let newDiv7 = document.createElement('div');
div_07_result.append(newDiv7);
newDiv7.innerHTML = result;
