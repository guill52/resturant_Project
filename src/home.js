import { content } from "./index";
import { createHtmlElement } from "./index";

export function homePage() {
    let homeWrapper = createHtmlElement("div", null, ["home-wrapper", "middle-content"], null);
    let contentWrapper = createHtmlElement("div", null, ["content-wrapper"], null);
    const resturantTitle = createHtmlElement("p", null, ["res-title"], "Always fresh, never frozen.")
    const resturantDescription = createHtmlElement("p", null, ["res-description"], "Discover exquisite flavors at our restaurant and indulge in a culinary journey like no other")
    const menuBtn = createHtmlElement("button", "menu-btn", ["menu-btn", "btn-style"], "menu");

    contentWrapper.appendChild(resturantTitle);
    contentWrapper.appendChild(resturantDescription);
    contentWrapper.appendChild(menuBtn);
    homeWrapper.appendChild(contentWrapper);
    content.appendChild(homeWrapper)
}