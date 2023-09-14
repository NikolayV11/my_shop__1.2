import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js";

// Страница error
export function getNotFoundPage() {
  const page = document.createElement("div");
  page.classList.add("page", "catalog-page", "container");

  const mainTitle = getMainTitle("Страница не найдена");

  page.append(mainTitle);
  return page;
}
