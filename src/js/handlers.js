import { getCategories, getProducts } from "./products-api";
import { renderCategoryList, renderProductsList } from "./render-function";

export async function initHomePage() {
    const categories = await getCategories();
    console.log(categories);
    renderCategoryList(categories);
    const { products } = await getProducts(2);
    renderProductsList(products);
 };