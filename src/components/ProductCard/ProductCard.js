import "./ProductCard.css"
import { Button } from "../Button/Button"

export const ProductCard=(obj)=>{

    const{img,name, coffeePerc, milkPerc, price}= obj

    return `
        <div class="product-card">
            <img src="./img/${img}.png">
            <div class="product-card__details">
                <p class="product-card__name u-dark-yellow">${name}</p>
                <p class="product-card__ingredients u-gray">Coffee <span>${coffeePerc}</span>% | Milk <span>${milkPerc}</span>%</p>
                <p class="product-card__price u-dark-yellow">€<span>${price}</span></p>
                ${Button({url:"#", text:"Order now", color:"yellow"})}
            </div>
        </div>
    `
}