import "./style.css";
import { Home } from "./pages/Home/Home";
import { Order } from "./pages/Order/Order";

const app = document.querySelector("#app");

const pages = {
  Home,
  Order,
};

async function navigateTo(page) {
  console.log(page);
  try {
    if (pages[page]) {
      app.innerHTML = pages[page]();
    }
  } catch (error) {
    app.innerHTML = "<h1>Page not found</h1>";
  }
}
navigateTo("Home");

document.querySelectorAll("a[data-page]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const page = event.target.dataset.page;
    navigateTo(page);
  });
});
