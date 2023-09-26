import { navbarPage } from "./navbar";
import {homePage} from "./home";
import { menuPage } from "./menu";
import { aboutPage } from "./about";
import { footerPage } from "./footer";
import { homeBkg } from "./home-bkg";
import "./styles/style.css"

// ---------------------------------------------------------------------------

const content = document.getElementById("content");

function createHtmlElement(type, id, arrayClasses, content) {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (arrayClasses)
    arrayClasses.forEach((myClass) => element.classList.add(myClass));

    if (content) element.innerText = content;

    return element;
}

// Elements to be exported    ^
// ---------------------------|-----------------------------------------------
function home(){
    content.innerHTML = "";
    homeBkg();
    navbarPage();
    homePage();
    footerPage();
}
function menu(){
    content.innerHTML = "";
    homeBkg();
    navbarPage();
    menuPage();
    footerPage();
}
function about() {
    content.innerHTML = "";
    homeBkg();
    navbarPage();
    aboutPage();
    footerPage();
}

home();

document.addEventListener("click", (e) => {

    const target = e.target.innerText;
    const elementId = e.target;

    if (target === "Home" && elementId.id == "home") home();
    if ((target === "Menu" && elementId.id == "menu") || (elementId.id == 'menu-btn')) menu();
    if (target === "About" && elementId.id == "about") about();
});


export { content, createHtmlElement }