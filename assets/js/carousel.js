"use strict"

let animalsMap = [
    {
        mainImg: "./assets/images/gallery/card1.png",
        mainImgAlt: "pandas",
        isPredator: false,
        name: "GIANT PANDAS",
        location: "Native to Southwest China"
    },
    {
        mainImg: "./assets/images/gallery/card2.png",
        mainImgAlt: "eagles",
        isPredator: true,
        name: "EAGLES",
        location: "Native to South America"
    },
    {
        mainImg: "./assets/images/gallery/card3.png",
        mainImgAlt: "gorillas",
        isPredator: false,
        name: "GORILLAS",
        location: "Native to Congo"
    },
    {
        mainImg: "./assets/images/gallery/card4.png",
        mainImgAlt: "sloth",
        isPredator: false,
        name: "TWO-TOED SLOTH",
        location: "Mesoamerica, South America"
    },
    {
        mainImg: "./assets/images/gallery/card5.png",
        mainImgAlt: "cheetahs",
        isPredator: true,
        name: "CHEETAHS",
        location: "Native to Africa"
    },
    {
        mainImg: "./assets/images/gallery/card6.png",
        mainImgAlt: "penguins",
        isPredator: true,
        name: "PENGUINS",
        location: "Native to Antarctica"
    },
];

let totalWidth;
let sliderWidth;
let cardsOnPage;

function getSizes() {
    totalWidth = slider__body.scrollWidth;
    sliderWidth = slider.offsetWidth;
    sliderWidth += (sliderWidth < 1190) ? 2 : -2;
    cardsOnPage = (sliderWidth <= 632) ? 4 : 6;
    console.log(sliderWidth);
}

function sliderHandler() {

    slider.addEventListener('mouseover', (e) => {
        if (e.target.tagName == "IMG" && e.target.classList.contains('gal')) {

            let t = e.target.parentElement.querySelector('.fog');

            let dataStyles = {
                top: t.style.top,
                width: t.style.width,
                left: t.style.left,
            };
            let picStyles = {
                "width": window.getComputedStyle(e.target).getPropertyValue('width'),
                "margin-top": window.getComputedStyle(e.target).getPropertyValue('margin-top'),
                "margin-left": window.getComputedStyle(e.target).getPropertyValue('margin-left'),
                "border-radius": window.getComputedStyle(e.target).getPropertyValue('border-radius'),
            };

            t.style.top=parseInt(picStyles.width, 10)-9 + "px";
            t.style.left="-10px";
            t.style.width=parseInt(picStyles.width, 10) + 20 + "px";
            e.target.style.width = parseInt(picStyles.width, 10) + 20 + "px";

            e.target.style['margin-top'] ="-10px";
            e.target.style['margin-left'] = "-10px";
            e.target.style['border-radius'] = "5px 5px 0px 0px";

            e.target.addEventListener('mouseout', (e) => {
                    t.style.top=dataStyles.top;
                    t.style.width=dataStyles.width;
                    t.style.left=dataStyles.left;
                    e.target.style.width = picStyles.width;
                    e.target.style['margin-top'] = picStyles['margin-top'];
                    e.target.style['margin-left'] = picStyles['margin-left'];
                    e.target.style['border-radius'] = picStyles['border-radius'];

                    e.target.removeEventListener('mouseout', this);

            });

        }
    });
}

/*
<div class="card">
    <img class="gal" src="./assets/images/gallery/card1.png" alt="pandas">
    <div class="fog">
        <p>GIANT PANDAS</p>                    
        <p>Native to Southwest China</p>                        
    </div>
    <p>GIANT PANDAS</p>                    
    <p>Native to Southwest China</p>
    <img class="card_icon" src="./assets/icons/banana-bamboo_icon.svg" alt="bananas">
</div>
*/
function createSlide(cardObject, reverse = false) {

    if (
        !cardObject || 
        !cardObject.name || 
        !cardObject.location || 
        !cardObject.mainImg
    ) {
        console.log("bad card object:", cardObject);
        return;
    } 

    const meatImg = './assets/icons/meet-fish_icon.svg';
    const bananaImg = './assets/icons/banana-bamboo_icon.svg';

    let div = document.createElement("div");
    div.setAttribute("class", "card");
        let img = document.createElement("img");
        img.setAttribute("class", "gal");
        img.setAttribute("alt", cardObject.mainImgAlt);
        img.setAttribute("src", cardObject.mainImg);
        div.appendChild(img);

        let fog = document.createElement("div");
            fog.setAttribute("class", "fog");
                let fogP = document.createElement("p");
                let fogP2 = document.createElement("p");
                fogP.appendChild(document.createTextNode(cardObject.name));
                fogP2.appendChild(document.createTextNode(cardObject.location));
                fog.appendChild(fogP);
                fog.appendChild(fogP2);
            div.appendChild(fog);

        let p = document.createElement("p");
        let p2 = document.createElement("p");
        p.appendChild(document.createTextNode(cardObject.name));
        p2.appendChild(document.createTextNode(cardObject.location));
        div.appendChild(p);
        div.appendChild(p2);

        let img2 = document.createElement("img");
        img2.setAttribute("class", "card_icon");
        if (cardObject.isPredator) {
            img2.setAttribute("alt", "meat and fish");
            img2.setAttribute("src", meatImg);
        } else {
            img2.setAttribute("alt", 'bananas');
            img2.setAttribute("src", bananaImg);
        }
        div.appendChild(img2);

    if (reverse) {
        slider__body.prepend(div);
    } else {
        slider__body.appendChild(div);
    }
        
}

function arrowsHandler() {

    let delay = (time) => {
        return new Promise((resolve, reject) => setTimeout(resolve, time))
     }

    arrow_left.addEventListener('click', (e) => {

        if(arrow_left.getAttribute('disabled') === "true") return;

        arrow_left.setAttribute('disabled', "true");
        arrow_right.setAttribute('disabled', "true");

         delay(0)
         .then(() => {
            slider__body.style.transition = "all 0ms";
            animalsMap = shuffle(animalsMap);
            addSlides(animalsMap, cardsOnPage, true);
            slider__body.style.marginLeft = (parseInt(slider__body.style.marginLeft) || 0) - sliderWidth + "px";
            return delay(100)
         })
         .then(() => {
            slider__body.style.transition = "all 400ms ease-in-out";
            slider__body.style.marginLeft = "0px";
           return delay(400)
         }).then(() => {
            deleteSlides(cardsOnPage, true);
            arrow_left.setAttribute('disabled', "false");
            arrow_right.setAttribute('disabled', "false");
            return delay(0)
         })
    });
    
    arrow_right.addEventListener('click', (e) => {
    
        if(arrow_right.getAttribute('disabled') === "true") return;

        arrow_left.setAttribute('disabled', "true");
        arrow_right.setAttribute('disabled', "true");

         delay(0)
         .then(() => {
            slider__body.style.transition = "all 400ms ease-in-out";
            animalsMap = shuffle(animalsMap);
            addSlides(animalsMap, cardsOnPage);
            slider__body.style.marginLeft = (parseInt(slider__body.style.marginLeft) || 0) - sliderWidth + "px";
           return delay(500)
         })
         .then(() => {
            slider__body.style.transition = "all 0ms";
            deleteSlides(cardsOnPage);
            slider__body.style.marginLeft = "0px";
            arrow_left.setAttribute('disabled', "false");
            arrow_right.setAttribute('disabled', "false");
           return delay(500)
         })
           
        });
}


function generateCarouselSlides(animals, sum = 6) {

    slider__body.innerHTML = "";
    let cnt = 1;
    for (let i in animals) {
        createSlide(animals[i]);
        if (cnt >= sum) break;
        cnt++;
    }
}

function addSlides(animals, sum, reverse = false) {

    let cnt = 1;
    for (let i in animals) {
        createSlide(animals[i], reverse);
        if (cnt >= sum) break;
        cnt++
    }
}

function deleteSlides(sum = 6, reverse = false) {
    let slider = document.getElementById('slider__body');
    for (let i = 0; i < sum; i++) {
        if (reverse) {
            slider.lastChild.remove();
        } else {
            slider.firstChild.remove();
        }
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function start() {
    animalsMap = shuffle(animalsMap);
    generateCarouselSlides(animalsMap);
    getSizes();
    arrowsHandler();
    sliderHandler();
    
    new ResizeObserver(() => {
         getSizes();
         generateCarouselSlides(animalsMap, cardsOnPage);
         console.log('resize');
     }).observe(slider);
}

start();



