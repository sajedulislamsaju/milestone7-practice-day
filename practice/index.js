// ccc
let num = 0;

const interval = setInterval(()=>{
    // num++;
    console.log(++num);

    if (num === 10) {
        clearInterval (interval);
    }
},1000)
// console.log(6)
// console.log(8)
// console.log(1)
// console.log(9)