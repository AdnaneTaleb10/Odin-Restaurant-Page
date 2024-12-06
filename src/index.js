import "./styles.css";
import home from "./home";
import menu from "./menu";
import about from "./about";

const content = document.querySelector("#content");

const loadHome = document.querySelector('#home');
const loadMenu = document.querySelector('#menu');
const loadAbout = document.querySelector('#about');

loadHome.addEventListener('click', () => {
    home();
})

loadMenu.addEventListener('click', () => {
    menu();
})

loadAbout.addEventListener('click', () => {
    about();
})
