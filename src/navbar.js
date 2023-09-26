import { content } from "./index";
import { createHtmlElement } from "./index";


export function navbarPage() {

    const tabs = ["Home", "Menu", "About"];
    let navWrapper = createHtmlElement("div", null, ["nav-wrapper"], null);
    let linkWrapper = createHtmlElement("div", null, ['link-wrapper'], null);
    
    tabs.forEach(tab => {
        let tabItem = createHtmlElement('a', tab.toLocaleLowerCase(), [`link-style`, tab], `${tab}`);
        linkWrapper.appendChild(tabItem)
    })

    navWrapper.appendChild(linkWrapper)
    content.appendChild(navWrapper)
}
