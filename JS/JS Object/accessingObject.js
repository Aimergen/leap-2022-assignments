let students=[
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
},
    {
    name: 'Индра',
    age: 19,
    gender: "female"
},
    {
    name: 'Хатнаа ',
    age: 21,
    gender: "male"
},
    {
    name: 'Тэмүүлэн',
    age: 24,
    gender: "male"
},
    {
    name: 'Намуун',
    age: 23,
    gender: "female"
},
]

//Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг
// олох object буцаадаг функц бичих 

function getGender( list, gender){
    let count =0;
    for(let j=0; j<list.length; j++){
        if(list[j].gender===gender){
            count++;
        }
    }
    return count;
}
const huisEm=getGender(students, 'female');
const huisEr=getGender(students, 'male');
console.log(`Niit ${huisEm} emegtei , ${huisEr} eregtei bn`);

//Сурагчдын насны дунджийг олох 
//функц бичих 

function aggAverage(list){
    let niitNas=0;    
    for(let i=0; i<list.length; i++){
        niitNas=niitNas+list[i].age;
        
    }
    return niitNas/list.length;
}
const average=aggAverage(students);
console.log(`Nasni dundaj ${average}`);

//Сурагчидад овог нэмж оруулах

function lasNameAdded(list){
   
    for(let i=0; i<list.length; i++){
       list[i].lastName ='Dulmaa';
    }
    
}
const last=lasNameAdded(students);
console.log(students);

