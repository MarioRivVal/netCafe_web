import "./Order.css";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { productsDB } from "../../data/products";

export const Order = () => {
  const cards = productsDB.map((product) => ProductCard(product));

  return `
        <section class="section">
           <div class="orders">
               <h2 class="secondary-title u-dark-yellow">Enjoy a new blend of coffee style</h2>
               <h3 class="tertiary-title u-gray">Explore all flavours of coffee with us. There is always a new cup worth experiencing</h3>
               <div class="cards">
                  ${cards.join("")}
               </div>
           </div>    
        </section>

`;
};
