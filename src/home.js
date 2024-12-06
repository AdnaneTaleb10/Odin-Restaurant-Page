import chef from "./assets/ChefPhoto.jpg"

export default function home(){
   const body = document.querySelector('body');
    body.style.height = '100vh'

    const main = document.querySelector('#content');
    const homePage = document.querySelector('#main-page');

    homePage.classList.forEach(className => {
        homePage.classList.remove(className);
    });
    homePage.classList.add('home');

    const h3 = document.createElement('h3');
    h3.textContent = "Welcome to Sushi City";
    homePage.appendChild(h3);

    const h2 = document.createElement('h2');
    h2.textContent = "Meet our Chef";
    homePage.appendChild(h2);

    const h4 = document.createElement('h4');
    h4.textContent = "Akiko Saito";
    homePage.appendChild(h4);

    const image = document.createElement('img');
    image.id = "chef"
    image.src = chef;
    homePage.appendChild(image);

    const h5 = document.createElement('h5');
    h5.textContent = 'Orders in the link below';
    homePage.appendChild(h5);

    main.appendChild(homePage);
}