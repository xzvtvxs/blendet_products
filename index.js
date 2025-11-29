import"./assets/styles-JE8YjOlG.js";import{a as c}from"./assets/vendor-N5iQpiFS.js";const l="https://dummyjson.com",n={CATEGORIES:"/products/category-list",PRODUCTS:"/products"},r=12;c.defaults.baseURL=l;async function _(t){const{data:s}=await c.get(n.CATEGORIES);return s}async function g(t=1){const s=(t-1)*r,{data:o}=await c.get(`${n.PRODUCTS}?limit=${r}&skip=${s}`);return o}const i={categoriesList:document.querySelector(".categories"),productsList:document.querySelector(".products")};function m(t){const o=["All",...t].map(a=>`<li class="categories__item">
        <button class="categories__btn" type="button">${a}</button>
        </li>`).join("");i.categoriesList.innerHTML=o;const e=document.querySelector(".categories_btn");e&&e.classList.add("categories__btn--active")}function y(t){const s=t.map(({title:o,brand:e,category:a,price:d,thumbnail:u,id:p})=>`
    <li class="products__item" data-id="${p}">
    <img class="products__image" src="${u}" alt="${o}"/>
    <p class="products__title">${o}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: </span>${e||"no brand"}</p>
    <p class="products__category">Category: ${a}</p>
    <p class="products__price">Price: ${d}</p>
 </li>
 `).join("");i.productsList.insertAdjacentHTML("beforeend",s)}async function L(){const t=await _();console.log(t),m(t);const{products:s}=await g(2);y(s)}document.addEventListener("DOMContentLoaded",L);
//# sourceMappingURL=index.js.map
