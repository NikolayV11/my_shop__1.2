import { router } from "/src/js/main.js";

import "./basketBtn.css";
import basketSVG from "bundle-text:/src/assets/img/basket.svg";

// import { getNavigationLink } from "../navigationLink/navigationLink";

export function getBasketBtn() {
  const basketBtn = document.createElement("a");
  basketBtn.href = "/basket";
  basketBtn.classList.add("basket-btn");
  basketBtn.innerHTML = basketSVG;

  basketBtn.addEventListener("click", (event) => {
    event.preventDefault();
    router.navigate("/basket");
  });

  return basketBtn;
}
