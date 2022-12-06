// 1. 2 тоон утга авдаг 2 function үүсгэ.
// 2. 2 авсан тоон утгын хоорондох тэгш 
//тоонуудын array буцаадаг 1 function.
// 2. 2 авсан тоон утгын хоорондох сондгой 
//тоонуудын array буцаадаг 1 function.

function tegsh(too1, too2){
    let arrTegsh=[];
    let index =0;
    for(let i=too1; i<=too2; i++){
        if(i%2==0){
            arrTegsh[index] = i;
            index++;
        }
    }
    return arrTegsh;
}
console.log(tegsh(1,9));

function sondgoi(too1, too2){
    let arrSondgoi=[];
    let index=0;
    for(let i=too1; i<=too2; i++){
        if(i%2!==0){
            arrSondgoi[index]=i;
            index++;
        }
    }
    return arrSondgoi;
}
console.log(sondgoi(1,9));


// function sondgoi(too1, too2){
//     if(too%2!==0){
//         return 'sondgoi';
//     }
// }

// tegsh(1,10);
// // [2,4,6,8]

// sondgoi(1,10);
// // [1,3,5,7,9]