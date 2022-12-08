//1. Ангийнхаа сурагчидын дата үүсгэ. (name: "Гончигсумлай", birthOfYear: 1999, hobby: "морь", single: false)

const studentuud = [
    {Single: 'false', firstname: 'Ermuun', lastname: 'Bat', hobby: 'painting', age: '1999'},
    {Single: 'false', firstname: 'Temuulen', lastname: 'Batbold', hobby: 'table tennis', age: '2002'},
    {Single: 'false', firstname: 'Usukhbayar', lastname: 'Bayaraa', hobby: 'basketball', age: '2003'},
    {Single: 'false', firstname: 'Sukhbat', lastname: 'Sukhbat', hobby: 'turnik', age: '2005'},
    {Single: 'false', firstname: 'Ganbold', lastname: 'Boldoo', hobby: 'gaming', age: '1996'},
    {Single: 'false', firstname: 'Amur', lastname: 'Amar', hobby: 'volleyball', age: '1999'},
    {Single: 'false', firstname: 'Dulguun', lastname: 'Dalai', hobby: 'writing', age: '1988'},
    {Single: 'false', firstname: 'Namuunbaigali', lastname: 'Baigalaa', hobby: 'book', age: '1987'},
    {Single: 'false', firstname: 'Baljinnyam', lastname: 'Nyamaa', hobby: 'gym', age: '1964'},
    {Single: 'false', firstname: 'Anand', lastname: 'Daram', hobby: 'box', age: '2009'},
    {Single: 'true', firstname: 'Odbayar', lastname: 'Dorjsuren', hobby: 'sport', age: '1999'},
    {Single: 'true', firstname: 'Narantsetseg', lastname: 'Jargalsaikhan', hobby: 'art', age: '2003'},
    {Single: 'true', firstname: 'Aimergen', lastname: 'Tukhbyetolla', hobby: 'football', age: '1993'},
    {Single: 'false', firstname: 'Tengisbold', lastname: 'Tengis', hobby: 'gaming', age: '2005'},
    {Single: 'false', firstname: 'Indra', lastname: 'Baasanjargal', hobby: 'ballet', age: '2000'},
    {Single: 'false', firstname: 'Binderya', lastname: 'Erdene', hobby: 'coffee', age: '1998'},
    {Single: 'false', firstname: 'Sed-Erdene', lastname: 'Batbayar', hobby: 'cooking', age: '1997'},
    {Single: 'false', firstname: 'Javkhlant', lastname: 'Jargal', hobby: 'music', age: '2008'},
    {Single: 'false', firstname: 'Dalaikhuu', lastname: 'Dalai', hobby: 'cake', age: '1996'},
]

//2. Сурагчидаас 20 - оос дээш насны сурагчидыг буцаах function бичэх.

function ageTwentyUp(list){
    const thisYear= 2022;
    for(let i=0; i<list.length; i++){
        list[i].ageNumber = thisYear-list[i].age;  
    }
   return list;
}

const nasnuud=ageTwentyUp(studentuud);
console.log(nasnuud);