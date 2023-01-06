"use strict"

function addRelink() {
    button_feed_friend.addEventListener('click', (e) => {location.href='./pages/donate/index.html'});
    button_donate_volonteers.addEventListener('click', (e) => {location.href='./pages/donate/index.html'});

    for (let i of document.querySelectorAll('.logo_footer')) {
        i.addEventListener('click', (e) => location.href='#main');
    };

}

function addOtherClick() {
    button_watch_online.addEventListener('click', (e) => {alert("click!")});
    button_choose_fav.addEventListener('click', (e) => {alert("click!")});
    button_leave_feedback.addEventListener('click', (e) => {alert("click!")});
}

addRelink();
addOtherClick();
