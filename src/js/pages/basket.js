import { router } from "/src/js/main.js";

import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js";
import { getDesc } from "/src/js/components/desc/desc.js";

// Страница карзины
export function getBasketPage() {
  const page = document.createElement("div");
  page.classList.add("page", "basket-page", "container");

  const mainTitle = getMainTitle("Корзина");
  const desc = getDesc("Страница в разработке");

  // кнопка оформления заказа
  let linkOrder = document.createElement("a");
  linkOrder.href = "/order";
  linkOrder.classList.add("btn");
  linkOrder.textContent = "Оформление заказа";
  // linkOrder.setAttribute("data-navigo");

  linkOrder.addEventListener("click", (event) => {
    event.preventDefault(); // отключение стандартного повидения

    router.navigate("/order");
  });

  page.append(mainTitle, desc, linkOrder);
  return page;
}
