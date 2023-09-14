import { router } from "/src/js/main.js";
import "./navigationLink.css";
export function getNavigationLink(path, title = "") {
  // кнопки навигации
  let link = document.createElement("a");
  link.href = path;
  link.classList.add("navigation-link");
  link.textContent = title;
  // link1.setAttribute("data-navigo", true);

  link.addEventListener("click", (event) => {
    event.preventDefault(); // отключение стандартного повидения

    router.navigate(path);
  });

  return link;
}
