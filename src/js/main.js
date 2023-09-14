import Navigo from "navigo";
// компаненты
import { getHeader } from "/src/js/components/header/header.js";
import { getPageContainer } from "/src/js/components/pageContainer/pageContainer.js";

const app = document.querySelector("#app");

const header = getHeader();
const pageContainer = getPageContainer();

//router навигации
export const router = new Navigo("/");

// Главная страница
router.on("/", async () => {
  pageContainer.innerHTML = "";
  const moduleMain = await import("/src/js/pages/main.js");
  // главная страница
  const mainPage = moduleMain.getMainPage();
  pageContainer.append(mainPage);
  // Fired if the page URL matches '/foo/bar'.
  header.setActiveLink("home");
});

// Страница каталога
router.on("/catalog", async () => {
  pageContainer.innerHTML = "";
  const moduleCatalog = await import("/src/js/pages/catalog.js");
  // страница каталога
  const catalogPage = moduleCatalog.getCatalogPage();
  pageContainer.append(catalogPage);
  // Fired if the page URL matches '/foo/bar'.
  header.setActiveLink("catalog");
});

// Страница карзина
router.on("/basket", async () => {
  pageContainer.innerHTML = "";
  const moduleBasket = await import("/src/js/pages/basket.js");
  // страница корзины
  const basketPage = moduleBasket.getBasketPage();
  pageContainer.append(basketPage);
  // Fired if the page URL matches '/foo/bar'.
  header.setActiveLink("basket");
});

// Страница оформление
router.on("/order", async () => {
  if (true) {
    router.navigate("/");
    return;
  }
  pageContainer.innerHTML = "";
  const moduleOrder = await import("/src/js/pages/order.js");
  // страница оформление
  const orderPage = moduleOrder.getOrderPage();
  pageContainer.append(orderPage);
  // Fired if the page URL matches '/foo/bar'.
  header.setActiveLink();
});

// Страница продукта
router.on("/product/:title", async ({ data }) => {
  pageContainer.innerHTML = "";
  const moduleProduct = await import("/src/js/pages/product.js");
  // страница продукта
  const productPage = moduleProduct.getProductPage(data.title);
  pageContainer.append(productPage);
  // Fired if the page URL matches '/foo/bar'.
  header.setActiveLink();
});

// Страница не найдена
router.notFound(async () => {
  const moduleNotFound = await import("/src/js/pages/notFound.js");
  const notFoundPage = moduleNotFound.getNotFoundPage();
  pageContainer.append(notFoundPage);
  header.setActiveLink();
});

router.resolve();
app.append(header.header, pageContainer);
