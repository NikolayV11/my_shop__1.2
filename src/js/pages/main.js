import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js";
import { getProductCard } from "/src/js/components/productCard/productCard.js";

// Главная страница
export function getMainPage() {
  const page = document.createElement("div");
  page.classList.add("page", "main-page", "container");

  const mainTitle = getMainTitle("Главная страница");

  const list = document.createElement("ul");
  list.classList.add("product-list", "list-reset");

  list.append(
    getProductCard("Товар_1", 300),
    getProductCard("Товар_2", 350),
    getProductCard("Товар_3", 400)
  );

  page.append(mainTitle, list);
  return page;
}
