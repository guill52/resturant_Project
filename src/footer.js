import { content } from "./index";
import { createHtmlElement } from "./index";

export function footerPage() {

    let footerWrapper = createHtmlElement("div", null, ["footer-wrapper"], null);
    let footerContent = createHtmlElement("div", null, ["footer-content"], null);
    let footerMsg = createHtmlElement("p", null, ["footer-msg"], "- Resturant by Guill52 -");
    
    footerContent.appendChild(footerMsg);
    footerWrapper.appendChild(footerContent);
    content.appendChild(footerWrapper);
}