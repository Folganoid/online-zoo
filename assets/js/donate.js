"use strict"

function relinkHandler() {
    button_feed_friend.addEventListener('click', (e) => {location.href='#'});

    for (let i of document.querySelectorAll('.logo_footer')) {
        i.addEventListener('click', (e) => location.href='../../index.html');
    };
}

function lightPointsHandler() {

    document.querySelector('.bar__dots').addEventListener('mouseover', (e) => {

        function lightOff() {
            if (document.querySelector('.dot_shine')) {
                document.querySelector('.dot_shine').classList.toggle('dot_shine');
            }
        }

        if (e.target.closest('.bar__dot')) {
             lightOff();
             if (e.target.firstChild) {
                e.target.firstChild.classList.add('dot_shine');
            } else {
                e.target.classList.add('dot_shine');
            }

        }

        document.querySelector('.bar__dots').addEventListener('mouseleave', (e) => {
            lightOff();
        }, {once: true});
    });
}

function changeSumHandler() {

    let sumVars = [5000,2000,1000,500,250,100,50,25];

    function setSum(dataVal) {

        if (!dataVal || !sumVars.includes(+dataVal)) {
            if (document.querySelector('.sums_active')) {
                document.querySelector('.sums_active').classList.toggle('sums_active');
            }
    
            
            if (document.querySelector('.dot_active')) {
                document.querySelector('.dot_active').classList.toggle('dot_active');     
            }
            return;
        }
        input__amount.value = dataVal;
        let digitSum = document.querySelector(`.bar__sums li[data-val="${dataVal}"]`);
        let digitDot = document.querySelector(`.dot[data-val="${dataVal}"]`);

        if (document.querySelector('.sums_active')) {
            document.querySelector('.sums_active').classList.toggle('sums_active');
        }

        if (document.querySelector('.dot_active')) {
            document.querySelector('.dot_active').classList.toggle('dot_active');     
        }

        if (digitDot) digitDot.classList.add('dot_active');
        if (digitSum) digitSum.classList.add('sums_active');
    }

    document.querySelector('.bar__dots').addEventListener('click', (e) => {

        if (e.target.closest('.bar__dot')) {

            let dataVal;
            if (e.target.firstChild) {
                if (e.target.firstChild.dataset.val) dataVal = e.target.firstChild.dataset.val;

            } else {
                if (e.target.dataset.val) dataVal = e.target.dataset.val;
            }

            setSum(dataVal);
        }
    });


    input__amount.addEventListener('input', (e) => {
        if (e.target.value.length > 4) e.target.value = e.target.value.substring(0, 4);
        if (e.target.value <= 0) e.target.value = ""
        setSum(e.target.value);

    });

}

relinkHandler();
changeSumHandler();
lightPointsHandler();

