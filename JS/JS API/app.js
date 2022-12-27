const getCars= async ()=>{
    const res= await fetch('http://localhost:3333/api/cars');
    const data=await res.json();
    console.log(data);
    return data;
};

const currenFormatter=(value)=>{
    return new Intl.NumberFormat('nm-MN',{maximumFractionDigits:3 }).format(value);
};

const getCarCard=(car)=>{
    return `
    <div class="col-3">
    <div class="card">
        <div class="ratio ratio-4x3">
            <img src="${car.imageUrl}" 
            alt=""
            class="card-img-top">
        </div>
        <div class="card-body">
            <p class="card-name">${car.model}</p>
            <p class="card-category">${car.brand}</p>
            <p class="card-name card-price">${currenFormatter(car.price)}</p>
            <div class="d-flex justify-content-end gap-3">
                <button type="button" class="btn btn-success" onclick="updateCars(${car.id})">Zasah</button>
                <button type="button" class="btn btn-danger" onclick="deleteCar(${car.id})">Ustgah</button>
            </div>

        </div>
    </div>
</div>
    `;
}

const carsTarget=document.querySelector('#cars');

const getCarsHtml= async()=>{
    carsTarget.innerHTML='';
    const cars=await getCars();
    for(const car of cars){
        carsTarget.innerHTML+=getCarCard(car);
    }
};
getCarsHtml();

const submitButton=document.querySelector('#formSubmit');

const imageUrlTarget=document.querySelector('#imageUrl');
const modelTarget=document.querySelector('#model');
const brandTarget=document.querySelector('#brand');
const priceTarget=document.querySelector('#price');

submitButton.addEventListener('click',async()=>{
    const newCar={
        imageUrl:imageUrlTarget.value,
        model:modelTarget.value,
        brand:brandTarget.value,
        price:priceTarget.value,
    };
    
    const req= await fetch('http://localhost:3333/api/cars',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(newCar),
    });
    const res=await req.json();
    console.log(res);
    getCarsHtml();
});


//ustgah functs
const deleteCar=async(id)=>{
    console.log(id);
    if(confirm('ustgahuu?'))
    fetch('http://localhost:3333/api/cars',{
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({id}),
    })
    .then((res)=> console.log(res))
    .finally((data)=>{
        alert('amjilltai');
        getCarsHtml();
    });
};

const modal=new bootstrap.Modal(document.getElementById('modal'));
//haruulna
modal.show();
//nuuna
modal.hide();
 

//zasah functs
const getCar=async(id)=>{
    const res=await fetch('http://localhost:3333/api/cars'+id);
    const data=await res.json();
    return data;
};

const updateCars=(id)=>{
   const updatedCar={

   };
   fetch('http://localhost:3333/api/cars',{
    method:'PUT',
    headers:{
        'Content-Type': 'application/json',
    },
    body:JSON.stringify(updatedCar),
   });
};
