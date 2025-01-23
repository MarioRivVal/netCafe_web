import "./Home.css";
import { Nav } from "../../components/Nav/Nav";
import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => `
    <main>
        ${Nav()}
        <header class="header">
          <div class="header__text-box">
              <h3 class="tertiary-title">We’ve got your morning covered with</h3>
              <h1>Coffee</h1>
              <p class="header__paragraph">It is best to start your day with a cup    of coffee. Discover the
              best flavours coffee you will ever have. We provide the best
              for our customers.</p>
              ${Button({ url: "#", text: "Order now", color: "yellow" })}
          </div>
        </header>
        
    </main>
    <section class="section ">
        <div class="intro">
            <div class="intro__text-box">
                <h2 class="secondary-title u-dark-yellow">Discover the best coffee</h2>
                <p class="u-gray">Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
                ${Button({url:"#", text:"Learn more", color:"yellow"})}
            </div>
            <div class="intro__img">
                <img src="./img/img-3.png">
            </div>
        </div>
    </section>
    ${Footer()}

`;
