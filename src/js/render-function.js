import { all } from "axios";
import { refs } from "./refs";

export function renderCategoryList(categories) { 
    const allCategories = ['All', ...categories];
    const markup = allCategories.map(category =>
        `<li class="categories__item">
        <button class="categories__btn" type="button">${category}</button>
        </li>`)
        .join('');
    refs.categoriesList.innerHTML = markup;
    
    const firstCategoryButton = document.querySelector(".categories_btn");
    if (firstCategoryButton) {
        firstCategoryButton.classList.add('categories__btn--active');
    }
};

export function renderProductsList(products) { 
    const markup = products.map(({ title, brand, category, price, thumbnail, id}) => `
    <li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: </span>${brand || "no brand"}</p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price: ${price}</p>
 </li>
 `).join('');
    
    refs.productsList.insertAdjacentHTML("beforeend", markup);
};