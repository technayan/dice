let dices = ['img/1.png','img/2.png','img/3.png','img/4.png','img/5.png','img/6.png'];

let first = dices[0];

let img = document.getElementById('dice-img');

let counter = document.getElementById('counter');

let step = 0;

function setImage() {
    let number = Math.floor(Math.random() * 6);
    if (number == 1) {
        img.setAttribute('src', dices[0]);
        img.style.transition = 'all 1s ease';
        img.style.transform='rotate(60deg)';
        step += 1;
        counter.innerHTML = step;
    } else if (number == 2) {
        img.setAttribute('src', dices[1]);
        img.style.transition = 'all 1s ease';
        img.style.transform='rotate(120deg)';
        step += 1;
        counter.innerHTML = step;
        
    } else if (number == 3) {
        img.setAttribute('src', dices[2]);
        img.style.transition = 'all 1s ease';
        img.style.transform='rotate(180deg)';
        step += 1;
        counter.innerHTML = step;

    } else if (number == 4) {
        img.setAttribute('src', dices[3]);
        img.style.transition = 'all 1s ease';
        img.style.transform='rotate(240deg)';
        step += 1;
        counter.innerHTML = step;

    } else if (number == 5) {
        img.setAttribute('src', dices[4]);
        img.style.transition = 'all 1s ease';
        img.style.transform='rotate(300deg)';
        step += 1;
        counter.innerHTML = step;

    } else {
        img.setAttribute('src', dices[5]);
        img.style.transition = 'all 1s ease';
        img.style.transform='rotate(360deg)';
        step += 1;
        counter.innerHTML = step;

    } 
}

function reset () {
    step = 0;
    counter.innerHTML = step;
    img.setAttribute('src', '');

}