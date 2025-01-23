import "./Nav.css";
import { Button } from "../Button/Button";

export const Nav = () => `
  <nav class="nav">
      <p class="nav__logo">neocafé</p>
      <ul class="nav__links">
        <li class="nav__item">
        ${Button({ url: "#", text: "Home", color: "trans" })}
        </li>

        <li class="nav__item">${Button({
          url: "#",
          text: "Order",
          color: "trans",
        })}</li>
        <li class="nav__item">${Button({
          url: "#",
          text: "About",
          color: "trans",
        })}</li>
        <li class="nav__item">${Button({
          url: "#",
          text: "Contact",
          color: "trans",
        })}</li>
        
      </ul>
      <ul class="nav__links">
        <li class="nav__item">${Button({
          url: "#",
          text: "Sign in",
          color: "trans",
        })}</li>
        <li class="nav__item">${Button({
          url: "#",
          text: "Sign up",
          color: "yellow",
        })}</li>
        </li>
      </ul>
  </nav>
`;
