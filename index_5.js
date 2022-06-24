// Задача 5
// Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.

let btn_05 = document.createElement('button');
btn_05.innerHTML = 'Введите многозначное число';
div_05_result.append(btn_05);
btn_05.addEventListener('click', conclusionPrompt);

let newDiv5 = document.createElement('div');
div_05_result.append(newDiv5);

function conclusionPrompt() {
    let num = prompt ('Введите многозначное число', '');
    let resultInput = colonOdd(num);

    function colonOdd(num) {
        let strNum = num.toString();
        let resultNum = [strNum[0]];
        for (let i = 1; i < strNum.length; i++) {
            if ((strNum[i-1] % 2 !== 0)&&(strNum[i] % 2 !== 0)) {
                resultNum.push(':', strNum[i]);
            } else {
                resultNum.push(strNum[i]);
            }
        }
        return resultNum.join('');
    }
    newDiv5.innerHTML = resultInput;
}

// 2 вариант??
// function colonOdd(num) {
//     let strNum = num.toString();
//     strNum = strNum.split('');
//     let resultNum = '';
//     for (let i = 0; i < strNum.length; i++) {
//         if (strNum[i] % 2 !== 0 && strNum[i+1] % 2 !== 0) {
//             resultNum += strNum[i] + ':';
//         } else {
//             resultNum += strNum[i];
//         }
//     }
//     return resultNum;
// }
