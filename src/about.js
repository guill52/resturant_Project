import { content } from "./index";
import { createHtmlElement } from "./index";

export function aboutPage() {

    const pageWrapper = createHtmlElement("div", null, ["page-wrapper", "middle-content", null]);
    const msgContent = createHtmlElement("div", null, ["msg-content"], null)
    const welcomeMsg = createHtmlElement("p", null, null, 'Thanks for visting');
    const thankYouMsg = createHtmlElement("p", null, null, " - see you next time 👋")

    msgContent.appendChild(welcomeMsg);
    msgContent.appendChild(thankYouMsg);
    pageWrapper.appendChild(msgContent)
    content.appendChild(pageWrapper);

}