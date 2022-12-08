

let animals = [
    {type: "dog", sound: "woof"}, 
    {type: "cow",sound: "omboo"},
    {type: "fox",sound: "hatee hatee hatee-ho"},
    {type: "cat",sound: "meow"},
] 

function avia(list,ner){
    for(let i=0; i<list.length; i++){
        if(list[i].type===ner){ 
           return list[i].sound 
        }
    }
return 'iim amitan obsoo'
}

const amitanDuu=avia(animals, 'fox');
console.log(amitanDuu);