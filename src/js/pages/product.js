import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js";
import { getDesc } from "/src/js/components/desc/desc.js";
// Страница товара
export function getProductPage(data) {
  const page = document.createElement("div");
  page.classList.add("page", "product-page", "container");
  const mainTitle = getMainTitle(data);
  const desc = getDesc("Страница в разработке");

  page.append(mainTitle, desc);
  return page;
}
