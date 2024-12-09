import sashimiImg from './assets/sachimi.jpg';
import nigiriSushiImg from './assets/NigiriSushi.jpg';
import makiImg from './assets/Maki.jpg';
import uramakiImg from './assets/Uramaki.jpg';
import temakiImg from './assets/Temaki.jpg';
import chirashiImg from './assets/Chirashi.jpg';

export default function menu(){
    const body = document.querySelector("body");
    body.style.height = '100%';
    const main = document.getElementById('content');

    const menu = [
        {
            name: "Sashimi",
            image: sashimiImg,
            description: "Fresh slices of raw fish, served with soy sauce and wasabi for a pure taste experience."
        },

        {
            name: "Nigiri Sushi",
            image: nigiriSushiImg,
            description: "Hand-pressed sushi rice topped with fresh seafood, often served with a dab of wasabi."
        },

        {
            name: "Maki",
            image: makiImg,
            description: "Rice and fillings rolled in seaweed, cut into bite-sized pieces for a perfect balance of flavor."
        },

        {
            name: "Uramaki",
            image: uramakiImg,
            description: "Inside-out roll with rice on the outside, filled with various ingredients and rolled with nori."
        },

        {
            name: "Temaki",
            image: temakiImg,
            description: "A cone-shaped hand roll filled with rice, seafood, and vegetables, wrapped in crisp seaweed."
        },

        {
            name: "Chirashi",
            image: chirashiImg,
            description: "A bowl of sushi rice topped with a colorful assortment of sashimi and garnishes."
        },
    ]
    const menuContainer = document.querySelector('#main-page');
    menuContainer.classList.forEach(className => {
        menuContainer.classList.remove(className);
    })

    void menuContainer.offsetWidth;

    menuContainer.classList.add('menu');

    menu.forEach(obj => {
        const foodCard = document.createElement('div');
        foodCard.classList.add('food-card');
        const foodImg = document.createElement('img');
        foodImg.src = obj.image;
        const foodText = document.createElement('div');
        foodText.classList.add('food-text'); 
        const h4 = document.createElement('h4');
        h4.textContent = obj.name;
        const p = document.createElement('p');
        p.textContent = obj.description;

        foodCard.append(foodImg);
        
        foodText.append(h4);
        foodText.append(p);
        foodCard.append(foodText);

        menuContainer.append(foodCard);
    })

}
