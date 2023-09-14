import "./productCard.css";

import { router } from "/src/js/main.js";

// Создание карточек товаров
export function getProductCard(text, price) {
  const item = document.createElement("li");
  item.classList.add("product-list__item");

  const title = document.createElement("h2");
  title.classList.add("product-list__title");

  let productLink = document.createElement("a");
  productLink.textContent = text;
  productLink.addEventListener("click", (event) => {
    event.preventDefault();

    router.navigate(`/product/${text}`);
  });

  title.append(productLink);

  const priceProduct = document.createElement("strong");
  priceProduct.classList.add("product-list__price");
  priceProduct.textContent = `${price} руб`;

  const addBasket = document.createElement("button");
  addBasket.classList.add("btn");
  addBasket.textContent = "В корзину";

  item.append(title, priceProduct, addBasket);
  return item;
}
