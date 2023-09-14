import { getNavigationLink } from "/src/js/components/navigationLink/navigationLink";
import { getLogo } from "/src/js/components/logo/logo";
import { getBasketBtn } from "/src/js/components/basketBtn/basketBtn";

import "./header.css";

//создать шапку
export function getHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const container = document.createElement("div");
  container.classList.add("container", "header__container");

  const logo = getLogo();
  logo.classList.add("header__logo");

  const basketBtn = getBasketBtn();

  const nav = document.createElement("nav");
  nav.classList.add("header__navigation");

  const links = {
    home: getNavigationLink("/", "Главная страница"),
    catalog: getNavigationLink("/catalog", "Каталог"),
    basket: basketBtn,
  };

  // кнопки навигации
  for (const oneLink in links) {
    nav.append(links[oneLink]);
  }

  function setActiveLink(link = "") {
    for (const oneLink in links) {
      links[oneLink].classList.remove("active");
    }
    if (link != "") {
      links[link].classList.add("active");
    }
  }

  setActiveLink("home");

  container.append(logo, nav, basketBtn);
  header.append(container);

  return { header, setActiveLink };
}
