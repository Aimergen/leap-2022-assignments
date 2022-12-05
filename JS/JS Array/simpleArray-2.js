//Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг анхны утгыг оруулна уу.
// Array - аас эхний 3 компанийг хайчилж ав
// Array - аас сүүлийн 3 компанийг хайчилж ав
// Мэдээллийн технологийн дунд компани эсвэл компаниудыг arrey - аас хайчилж ав
// Эхний мэдээллийн технологийн компанийг array - аас хас
// Сүүлийн мэдээллийн технологийн компанийг array - аас хас


let itCompanies1=['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];

console.log(itCompanies1[3]+' '+itCompanies1[4]+' '+itCompanies1[5]+' '+itCompanies1[6]);

console.log(itCompanies1[0]+' '+itCompanies1[1]+' '+itCompanies1[2]+' '+itCompanies1[3]);

console.log(itCompanies1[0]+' '+itCompanies1[1]+' '+itCompanies1[2]+' '+itCompanies1[3]+' '+itCompanies1[6]);

for(let i=itCompanies1.length-1; i>=0;i--){
    itCompanies1[i+1]=itCompanies1[i];

}
itCompanies1[0]='';
console.log(itCompanies1);

//6
for(let i=itCompanies1.length; i>=0;i--){
    itCompanies1[i+1]=itCompanies1[i];

}
itCompanies1[6]='';
console.log(itCompanies1);


// console.log(itCompanies1.slice(0, 3))