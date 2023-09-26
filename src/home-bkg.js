import { content } from "./index";
import bkgImg from "./asset/food-bkg.jpg"
// import { createHtmlElement } from "./index";
// import logo from "./asset/lenoides-logo.png"

export function homeBkg() {

    let img = document.createElement('img');
    img.src= bkgImg;
    img.classList.add("img")

    content.appendChild(img)
}