// const mainvisuals = ['./img/mainvisual2.jpg', './img/mainvisual3.jpg'];
// const mvArea = document.querySelector('#mainvisual');
// mvArea.insertAdjacentHTML('beforeend', '<img src="./img/mainvisual1.jpg">');
// console.log(mvArea)
// let num = -1;

// const setMainvisual = () => {
//     if (num===1) {
//         num = 0;
//     } else {
//         num++;
//     }
//     document.querySelector('#mainvisual img').src = mainvisuals[num];
// }


// setInterval(setMainvisual, 3000);

const mv = document.querySelector('#mainvisual img');

let i = 1;
const setMv = () => {

    if(i===3) {
        i = 1
    } else {
        i++;
    }
    mv.src = `img/mainvisual${i}.jpg`;
};

setInterval(setMv, 2000);