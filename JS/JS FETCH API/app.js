// fetch("http://127.0.0.1:5501/data.html")
//  .then((res) => res.json())
//  .then((data) => {
//    console.log(data);
// });

// fetch('https://dummyjson.com/products')
// .then(res=> res.json())
// .then((data)=>console.log(data));

function getProductCard(product){
    return `<div class="col-4">
         <div class="card">
        <div class="ratio ratio-4x3">
            <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
        </div>
        <div class="card-body">
          <p class="card-name">${product.title}</p>
          <p class="card-category">${product.category}</p>
          <p class="card-price">${product.price}</p>
        </div>
      </div>
</div>`;
}

// // davtalt 1
// for (let i = 0; i < data.products.length; i++) {
//     const product = data.products[i];
//     productsTarget.innerHTML += getProductCard(product);
//   }
//   // davtalt 2
//   for (const product of data.products) {
//     productsTarget.innerHTML += getProductCard(product);
//   }

//   // davtalt 3
  products.products.forEach(function (product) {
    productsTarget.innerHTML += getProductCard(product);
  });

//   // davtalt 4
//   data.products.map((product) => {
//     productsTarget.innerHTML += getProductCard(product);
//   });

let products=data.products

products=products.filter((product)=>{
    return product.title.includes('iPhone');
});

products=products.filter((product)=>{
    return product.price < 500;
});
const productTarget=document.querySelector('#productTarget');

function getPagination(total,curentPage,limit){
    let pagination=`<nav aria-label="..."> <ul class="pagination justify-content-center">`;
    const totalpage=Math.ceil(total / limit);
    for(let page=1; page<=totalpage; page++){
        if(page===curentPage){
            pagination+=`
            <li class="page-item active" aria-current="page">
                <span class="page-link">${page}</span>
            </li>`;
        }else{
            pagination+=` 
            <li class="page-item"
                <a class="page-link" href="javascript:getProduct(${limit},${limit * (page-1)});">${page}</a>
            </li>`;
        }
    }
    pagination+=`</ul></nav>`;
    return pagination;
}
async function getProducts(limit=9,skip=0){
    productTarget.innerHTML= '';
    let dataUrl=`https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    if(category){
        dataUrl=`https://dummyjson.com/products?limit=${category}&skip=${skip}`;
    }
    if(searchQuery){
        dataUrl=`https://dummyjson.com/products?limit=${searchQuery}&skip=${skip}`;
    }
    const res=await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    const data=await res.json();

    for(const product of data.products){
        productTarget.innerHTML+=getProductCard(product);
    }
    productTarget.innerHTML+=getPagination(data.total,skip / limit, limit);

}

const params=new URL(window.location).searchParams;
console.log(params);
const category =params.get('category');
const limit =Number(params.get('limit')) || 12; 
const page =Number(params.get('page')) || 1;
const searchQuery=params.get('q');

getProducts();

function getMenuItem(menuItem){
return`
<li class="nav-item">
<a class="nav-link active" ${menuItem.isActive && 'active'}"
 aria-current="page" 
 href="${menuItem.link}">
 ${menuItem.name}
 </a>
</li>`;
}

const menuTarget=document.querySelector('#menTarget');

async function getCategories(){
    const res=await fetch('https://dymmyjson.com/products/categories');
    const categories=await res.json();
    return categories.slice(0, 5);
}

 async function getMenus(){
    let categories=await getCategories();
    const menuCategories= categories.map((category)=>{
        return{
            isActive:false,
            link: '/apps/work/fetch.html?category='+category,
            name: category,
        };
    });

    menuCategories.map((menuCategory)=>{
        menuTarget.innerHTML+=getMenuItem(menuCategory);
    })
}

