"use strict"

let usersMap = [
    {
        name: "Michael John",
        location: "Austria",
        createAt: "Today",
        icon: "./assets/icons/user_icon.svg",
        text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
    },
    {
        name: "Oskar Samborsky",
        location: "Austria",
        createAt: "Yesterday",
        icon: "./assets/icons/user1.jpg",
        text: "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for",
    },
    {
        name: "Fredericka Michelin",
        location: "Austria",
        createAt: "Yesterday",
        icon: "./assets/icons/user2.jpg",
        text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. The best online zoo I’ve met. My son delighted very much ljves to",
    },
    {
        name: "Mila Riksha",
        location: "Austria",
        createAt: "Yesterday",
        icon: "./assets/icons/user3.jpg",
        text: "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf",
    },
    {
        name: "John Doe 1",
        location: "India",
        createAt: "24-04-2022",
        icon: "./assets/icons/user_icon.svg",
        text: "TEST - alpha alpha alpha alpha alpha alpha alpha alpha alpha",
    },
    {
        name: "Jane Doe 2",
        location: "Porto",
        createAt: "29-04-2022",
        icon: "./assets/icons/user_icon.svg",
        text: "TEST - bravo bravo bravo bravo bravo bravo bravo bravo bravo bravo bravo",
    },
    {
        name: "Mike Doe 3",
        location: "Spain",
        createAt: "24-01-2022",
        icon: "./assets/icons/user_icon.svg",
        text: "TEST - charlie TEST - charlie TEST - charlie TEST - charlie TEST - charlie TEST - charlie TEST - charlie TEST - charlie TEST - charlie",
    },
    {
        name: "John Doe 4",
        location: "China",
        createAt: "Yesterday",
        icon: "./assets/icons/user_icon.svg",
        text: "TEST - delta",
    },
    {
        name: "John Doe 5",
        location: "India",
        createAt: "Yesterday",
        icon: "./assets/icons/user_icon.svg",
        text: "TEST - echo  echo echo echo echo echo echo echo echo",
    },
    {
        name: "John Doe 6",
        location: "India",
        createAt: "Yesterday",
        icon: "./assets/icons/user_icon.svg",
        text: "TEST - foxtrot foxtrot foxtrot foxtrot foxtrot foxtrot foxtrot",
    },
    {
        name: "John Doe 7",
        location: "India",
        createAt: "Yesterday",
        icon: "./assets/icons/user_icon.svg",
        text: "TEST - golf golf golf golf golf golf golf golf golf golf",
    }
];


/*  <div class="slide">
        <div>
            <div>
                <img src="./assets/icons/user1.jpg">
                <p>Name</p>
                <p>Local Austria • Yesterday</p>
                <p>text</p>
            </div>
        </div>
    </div> */
function createTestSlide(cardObject) {

    if (
        !cardObject || 
        !cardObject.name || 
        !cardObject.location || 
        !cardObject.text
    ) {
        console.log("bad card object:", cardObject);
        return;
    } 

    let slide = document.createElement("div");
    slide.setAttribute("class", "slide");
        let div1 = document.createElement("div");
            let div2 = document.createElement("div");

                let img = document.createElement("img");
                img.setAttribute("alt", "user");
                img.setAttribute("src", cardObject.icon);
                div2.appendChild(img);

                let p = document.createElement("p");
                let p2 = document.createElement("p");
                let p3 = document.createElement("p");
                p.appendChild(document.createTextNode(cardObject.name));
                p2.appendChild(document.createTextNode("Local " + cardObject.location + " • " + cardObject.createAt));
                p3.appendChild(document.createTextNode(cardObject.text));
                div2.appendChild(p);
                div2.appendChild(p2);
                div2.appendChild(p3);

            div1.appendChild(div2);
        slide.appendChild(div1);
    test__carousel__body.appendChild(slide);
}

function generateTestCarouselSlides(users) {

    test__carousel__body.innerHTML = "";
    for (let i in users) {
        createTestSlide(users[i]);
    }
}

let testOffset;
function initSizes() {
    let slide = getComputedStyle(document.querySelector('.slide'));
    testOffset = parseInt(slide.marginRight) + parseInt(slide.width);
    let cols = usersMap.length - Math.ceil(test__carousel.offsetWidth/testOffset);
    zipper.setAttribute('max', cols);
}

function zipperHandler() {
    zipper.addEventListener('input', (e) => {
        test__carousel__body.style.marginLeft = - testOffset * e.target.value + "px";
    });
}

function slideHandler() {

    function buildPopup(parent) {

        let parentDiv = parent.querySelector('div');
        let parentDivDiv = parentDiv.querySelector('div');
        let parentLastP = parent.querySelector('div p:last-child');
        
        parent.style.position="fixed";
        parent.style.left = "50%"
        parent.style.top = "50%"
        parent.style.zIndex = '2000';
        parent.style.width = "268px";
        parent.style.height = "390px";
        parent.style.marginTop = "-195px";
        parent.style.marginLeft = "-134px";
        parent.style.cursor = "default";
        parentDiv.style.width = "264px";
        parentDiv.style.height = "386px";
        parentLastP.style.width = "240px";
        parentLastP.style.height = "310px";
        parentDivDiv.style.width = "240px";
        parentDivDiv.style.height = "310px";

        let back = document.createElement('div');
        back.setAttribute("id", 'test__back');
        test__carousel.appendChild(back);

        let cross = document.createElement('img');
        cross.setAttribute("src", '../online-zoo/assets/icons/redcross.svg');
        cross.setAttribute("alt", 'test__cross');
        cross.setAttribute("id", 'test__cross');
        parent.appendChild(cross);
    }

    function removePopup(parent) {
        let parentDiv = parent.querySelector('div');
        let parentDivDiv = parentDiv.querySelector('div');
        let parentLastP = parent.querySelector('div p:last-child');

        parent.style = null;
        parentDiv.style = null;
        parentDivDiv.style = null;
        parentLastP.style = null;
        document.getElementById('test__back').remove();
        document.getElementById('test__cross').remove();
    }


    test__carousel.addEventListener('click', (e) => {

        if (!e.target.closest('.slide')) return;
        let parent = e.target.closest('.slide');
        if (parent.offsetWidth < parent.offsetHeight) return;
        buildPopup(parent);

        let test__cross = document.getElementById('test__cross');
        let test__back = document.getElementById('test__back');
        test__cross.addEventListener('click', () => {removePopup(parent)}, {once: true})
        test__back.addEventListener('click', () => {removePopup(parent)}, {once: true})
    })
}

function start() {

    generateTestCarouselSlides(usersMap);
    initSizes();
    zipperHandler();
    slideHandler();

    new ResizeObserver(() => {
        test__carousel__body.style.marginLeft = "0px";
        zipper.value = "0";
        generateTestCarouselSlides(usersMap);
        initSizes();
    }).observe(test__carousel);

}

start();


