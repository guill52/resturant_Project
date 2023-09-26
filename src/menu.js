import { content } from "./index";
import { createHtmlElement } from "./index";

export function menuPage() {

    const menuItems = {
        food: [
            {
                name: "Fillet Millone",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi itaque placeat vero commodi recusandae maiores quia magni impedit officiis distinctio.",
                price: 21
            },
            {
                name: "Salmon Dish",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi itaque placeat vero commodi recusandae maiores quia magni impedit officiis distinctio.",
                price: 17
            },
            {
                name: "Chicken Dish",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi itaque placeat vero commodi recusandae maiores quia magni impedit officiis distinctio.",
                price: 19
            },
            {
                name: "Tofu Dish",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi itaque placeat vero commodi recusandae maiores quia magni impedit officiis distinctio.",
                price: 14
            },
            {
                name: "Ground Beef Dish",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi itaque placeat vero commodi recusandae maiores quia magni impedit officiis distinctio.",
                price: 23
            },
            {
                name: "Steak Dish",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi itaque placeat vero commodi recusandae maiores quia magni impedit officiis distinctio.",
                price: 26
            }
        ]
    }

    const menuWrapper = createHtmlElement("div", null, ["menu-wrapper", "middle-content"], null);

    for (let i = 0; i < menuItems.food.length; i++) {
        
        const foodItem = menuItems.food[i]
        const foodCard = createHtmlElement("div", null, ["food-card"], null);
        const foodName = createHtmlElement("p", null, ["food-name"], foodItem.name);
        const foodDesciption = createHtmlElement("p", null, ["food-description"], foodItem.description);
        const foodPrice = createHtmlElement("p", null, ["food-price"], `$${foodItem.price}.00`);

        foodCard.appendChild(foodName);
        foodCard.appendChild(foodDesciption);
        foodCard.appendChild(foodPrice);
        menuWrapper.appendChild(foodCard)
    }
    
    content.appendChild(menuWrapper)
}