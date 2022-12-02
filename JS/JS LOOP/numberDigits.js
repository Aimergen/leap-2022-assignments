//  1. Prompt - оор 1 тоо авна.
// 2. Prompt - оор авсан тоог хэдэн оронтойг хэвлэж гарга.
// example: input = 1234567; digit: = 7;

// let too=prompt('duriin too oruulna uu');
// let utga=too.length;
// prompt('tooni urt='+utga);


let n=prompt('too oruulna uu?');
let len=0;

while(Number(n)>0){
    len+=1;
    n=Math.floor(n/10);
}
alert(len);