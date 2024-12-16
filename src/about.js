import locationImg from "./assets/Location.png"

export default function about(){
    const body = document.querySelector('body');
    body.style.height = "100%";

    const main = document.querySelector('#content')
    const aboutContainer = document.querySelector('#main-page');

    aboutContainer.classList.forEach((className) =>{
        aboutContainer.classList.remove(className);
    })

    void aboutContainer.offsetWidth;

    //void menuContainer.offsetWidth;
    aboutContainer.classList.add('about');

    const hours = document.createElement('div');

    const hoursTitle = document.createElement('h3');
    hoursTitle.textContent = "Hours:";

    const hourText1 = document.createElement('p');
    hourText1.textContent = "Monday - Friday: 11:30 AM - 10:00 PM"; 

    const hourText2 = document.createElement('p');
    hourText2.textContent = "Saturday - Sunday: 12:00 PM - 11:00 PM"; 

    hours.appendChild(hoursTitle);
    hours.appendChild(hourText1);
    hours.appendChild(hourText2);

    const location = document.createElement('div');

    const locationTitle = document.createElement('h3');
    locationTitle.textContent = "Location:"

    const locationText = document.createElement('p');
    locationText.textContent = "Visit us at our location in the heart of Sushi City, where you can enjoy the freshest sushi in a modern and elegant setting."

    const locationImage = document.createElement('img');
    locationImage.src = locationImg;

    const locationAddress = document.createElement('h4');
    locationAddress.textContent = "Basement 1st Floor, Tsukamoto Sogyo Building, 4 Chome-2-15 Ginza, Chuo City, Tokyo 104-0061, Japan";

    location.appendChild(locationTitle);
    location.appendChild(locationText);
    location.appendChild(locationImage);
    location.appendChild(locationAddress);

    aboutContainer.appendChild(hours);
    aboutContainer.appendChild(location);
}
