// Хамгийн эхний li элементийг аван утгыг console.log дээр хэвлэх
// Хамгийн сүүлийн li элементийг аван утгыг console.log дээр хэвлэх
// Сүхбаатар аймгийг элементийн id-аар аван console.log дээр хэвлэх
// Тухайн жагсаалтын элементүүдэд загвар оруулах (текстийн фонт, хэмжээ,
// текстийн өнгө, хүрээ, padding, margin)
// Аймгуудыг бүс, бүсээр ялган өөр, өөр background color  өгөх  
//(1 - Хангайн бүс, 2 - Баруун бүс, 3 - Зүүн бүс, 4 - Төвийн бүс, 5 - Улаанбаатар ) 
//Жишээ нь id = aimag-321 ийм байгаа 3 нь бүсийн дугаар, 21 нь аймгийн дугаар юм

// 1
const first=document.querySelector('#aimag-101');
console.log(first.innerHTML);

const last=document.querySelector('#aimag-522');;
console.log(last.innerHTML);

const suhbaatar=document.querySelector('#aimag-315');
console.log(suhbaatar.innerHTML);

// document.querySelector('#aimag-202').style.background='blue';

const aimguud=document.querySelectorAll('li');
for(let i=0; i<aimguud.length; i++){
    if(aimguud[i].id[6]==='1'){
        aimguud[i].style.backgroundColor='purple';
    }
    if(aimguud[i].id[6]==='2'){
        aimguud[i].style.backgroundColor='yellow';
    }
    if(aimguud[i].id[6]==='3'){
        aimguud[i].style.backgroundColor='brown';
    }
    if(aimguud[i].id[6]==='4'){
        aimguud[i].style.backgroundColor='orange';
    }
    if(aimguud[i].id[6]==='5'){
        aimguud[i].style.backgroundColor='aqua';
    }
}
