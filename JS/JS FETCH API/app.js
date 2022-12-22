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
    const res=await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    const data=await res.json();

    for(const product of data.products){
        productTarget.innerHTML+=getProductCard(product);
    }
    productTarget.innerHTML+=getPagination(data.total,skip / limit, limit);

}

getProducts();

