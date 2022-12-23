const params = new URL(window.location).searchParams;
  const category = params.get('category');
  const limit = Number(params.get('limit')) || 12;
  const page = Number(params.get('page')) || 1;
  const searchQuery = params.get('q');
  
// negj card iin html beldej baigaa function
function getProductCard(product) { 
    return `<div class="col-3">
              <div class="card">
              <div class="ratio ratio-4x3">
                <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}" />
              </div>
                <div class="card-body">
                  <p class="card-name">${product.title}</p>
                  <p class="card-category">${product.category}</p>
                  <p class="card-name card-price">$${product.price}</p>
                </div>
              </div>
            </div>`;
  }
  
  const productsTarget = document.querySelector('#productsTarget'); //html -s id gaarn main tsesiig avj bn
  
//   niit huudaslaltiin html beldej baigaa ni
  function getPagination(total, currentPage, limit) {
    let pagination = `<nav aria-label="..."> <ul class="pagination justify-content-center">`;
    const totalPages = Math.ceil(total / limit);
    for (let page = 1; page <= totalPages; page++) {
      if (page === currentPage) {
        pagination += ` 
            <li class="page-item active" aria-current="page">
                <span class="page-link">${page}</span>
          </li>`;
      } else {
        const queryParam=searchQuery ? "&q=" + searchQuery : "";
        pagination += `
        <li class="page-item">
            <a class="page-link" href="${window.location.pathname}?limit=${12}&page=${page}">
            ${page}
            </a>
        </li>`;
      }
    }
    pagination += `</ul></nav>`;
    return pagination;
  }
  
//   baraanii jagsaaltiin hmtl beldej baigaa ni
  async function getProducts(limit, page, category, searchQuery) { //data ogogdoloos Productiin medeeleliig avj bn
    productsTarget.innerHTML = '';
    const skip = (page - 1) * limit;
  
    let dataUrl = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    if (category) {
      dataUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
    }
    if (searchQuery) {
      dataUrl = `https://dummyjson.com/products/search?q=${searchQuery}&limit=${limit}&skip=${skip}`;
    }
  
    const res = await fetch(dataUrl);
    const data = await res.json();
  
    let products = data.products;
  
    products.forEach(function (product) {
      productsTarget.innerHTML += getProductCard(product);
    });
  
    productsTarget.innerHTML += getPagination(data.total, page, limit);
  }
  
//   baraanii jagsaaltaa duudaj baigaa ni
  getProducts(limit, page, category, searchQuery);
  
//   negj menu nii html beldej baigaa heseg
  function getMenuItem(menuItem) { 
    return `
      <li class="nav-item">
        <a class="nav-link ${menuItem.isActive && 'active'}"
           aria-current="page"
           href="${menuItem.link}">
           ${menuItem.name}
        </a>
      </li>`;
  }
  
  const menuTarget = document.querySelector('#menuTarget');
  
//   angilaliin data-g 3dagch holboosoos aas avj baigaa function
  async function getCategories() { 
    const res = await fetch('https://dummyjson.com/products/categories');
    const categories = await res.json();
    return categories.slice(0, 5);
  }
//   tsesen deer angilaluudiig gargaj baigaa function
  async function getMenus() { 
    const categories = await getCategories();
  
    const menuCategories = categories.map((category) => {
      return {
        isActive: false,
        link: window.location.pathname + '?category=' + category,
        name: category,
      };
    });
  
    menuCategories.map((menuCategory) => {
      menuTarget.innerHTML += getMenuItem(menuCategory);
    });
  }
  
  getMenus();