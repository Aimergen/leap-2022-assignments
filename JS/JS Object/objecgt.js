const student = {
  lastName: "Odgerel",
  firstName: "Sed-Erdene",
  age: 17,
  hobby: ["video gaming", "watching stream", "anime", "panda"],
};
console.log(student);
console.log(
  `${student.lastName} ovogtoi ${student.firstName} n ${student.age}`
);

const studentCopy = Object.assign(student);

const data = [
  { gender: "male", firstName: "Dorj", Lastname: "Bat", point: 80, age: 19 },
  {
    gender: "female",
    firstName: "Naruto",
    Lastname: "Dulmaa",
    point: 70,
    age: 29,
  },
  {
    gender: "male",
    firstName: "Hidan",
    Lastname: "Matraa",
    point: 80,
    age: 39,
  },
  {
    gender: "female",
    firstName: "Kakuzu",
    Lastname: "Burmaa",
    point: 90,
    age: 49,
  },
  {
    gender: "male",
    firstName: "Deidara",
    Lastname: "Suhee",
    point: 67,
    age: 59,
  },
  {
    gender: "female",
    firstName: "Itachi",
    Lastname: "Dondgoo",
    point: 80,
    age: 69,
  },
  {
    gender: "male",
    firstName: "Orochimaru",
    Lastname: "Luvsan",
    point: 80,
    age: 79,
  },
  {
    gender: "female",
    firstName: "Kakashi",
    Lastname: "Sharav",
    point: 78,
    age: 89,
  },
  {
    gender: "male",
    firstName: "Yondaime",
    Lastname: "Tsetsge",
    point: 89,
    age: 99,
  },
  {
    gender: "female",
    firstName: "Jiraya",
    Lastname: "Monhoo",
    point: 99,
    age: 109,
  },
];

//Huiseern er ted em ted
// nasni angilalaarn 0-18 hurtleh, 18-25 ,25-40, 40+
// avsan dungeer m A B C D F

function getCountByGender(list, gender) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].gender === gender) {
      count++;
    }
  }
  return count;
}

const femaleCount = getCountByGender(data, "female");
const maleCount = getCountByGender(data, "male");

console.log(`Niit ${femaleCount} emegtei, ${maleCount} eretei bn.`);

function getCountByAgeRange(list, min, max) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].age >= min && list[i].age < max) {
      count++;
    }
  }
  return count;
}

//nasni angilalaar n0-17 hurtelh
const childrenCount = getCountByAgeRange(data, 0, 18);
const youth = getCountByAgeRange(data, 18, 25);
const adult = getCountByAgeRange(data, 30, 55);
const elder = getCountByAgeRange(data, 55, 200);
console.log(`niit: ${childrenCount} huuhed, 
            ${youth} zaluuchuud, 
            ${adult} dundaj nas , 
            ${elder} ahmad nas`);

function getCountByFieldValuRange(list, point, min, max) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].point >= min && list[i].point < max) {
      count++;
    }
  }
  return count;
}
// console.log(data[0].age)
const totalA = getCountByFieldValuRange(data, data[0].point, 90, 100);
const totalB=getCountByFieldValuRange(data,data[0].point,80,89);
const totalC=getCountByFieldValuRange(data,data[0].point,70,79);
const totalD=getCountByFieldValuRange(data,data[0].point,60,69);
const totalF=getCountByFieldValuRange(data,data[0].point,0,59);

console.log(`niit: ${totalA} avsan bn, 
            ${totalB} sain dun, 
            ${totalC} dund avsan bn , 
            ${totalD} muu avsan bn
            ${totalF} mash  muu avsan bn`);

//             const childrenCount= getCountByAgeRange(data,'age',0,18);
// const youth= getCountByAgeRange(data,18,25);
// const adult= getCountByAgeRange(data,30,55);
// const elder= getCountByAgeRange(data,55,200);
// console.log(`niit: ${childrenCount} huuhed,
//             ${youth} zaluuchuud,
//             ${adult} dundaj nas ,
//             ${elder} ahmad nas`);


