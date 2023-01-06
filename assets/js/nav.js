"use strict"

function addEmailListener() {
    
    email_input.addEventListener('input', (e) => {
        let reg = e.target.value.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
        if (reg) {
            button_subscribe.classList.add("email_btn_active");
            button_subscribe.classList.remove("email_btn_inactive");
            email_input.className="";
            email_input.classList="border_green";

        } else {
            button_subscribe.classList.add("email_btn_inactive");
            button_subscribe.classList.remove("email_btn_active");
            email_input.className="";
            email_input.classList="border_red";
        }
    });

    button_subscribe.addEventListener('click', (e) => {
        if (!e.target.classList.contains('email_btn_inactive')) {
            alert("click!")
        }
    });
}

function burgerMenu() {

    let cross = document.querySelector('img[alt="burger-cross"]');
    let triple = document.querySelector('img[alt="burger-menu"]');

    let close = () => {
        burger__menu.style.maxHeight = "0px";
        burger__menu_back.style.height = "0px";
        triple.style.opacity = "1";
        cross.style.opacity = "0";
    };

    let open = () => {
        burger__menu.style.maxHeight = "100%";
        burger__menu_back.style.height = "100%";
        triple.style.opacity = "0";
        cross.style.opacity = "1";
        burger__menu_back.addEventListener('click', () => {
            close();
        }, {once: true});
    }

    burger.addEventListener('click', (e) => {

        if (burger__menu.style.maxHeight == "100%") {
            close();
        } else {
            open();
        }

    });
}

function socialHandler() {

    document.querySelector('.contacts').addEventListener('click', (e) => {
        if (!e.target.closest('.social')) return;
        let alt = "";
        if (e.target.tagName == "P") {
            alt = e.target.innerHTML;
        } else if (e.target.tagName == "IMG") {
            alt = e.target.getAttribute('alt');
        } else {
            alt = e.target.querySelector('img').getAttribute('alt');
        }
        location.href="https://" + alt + ".com";
    })
}

addEmailListener();
burgerMenu();
socialHandler();