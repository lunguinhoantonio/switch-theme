function switchTheme() {
    body = document.querySelector('body');
    body.classList.toggle('dark');

    const titleButton = document.querySelector('.switch-theme');
    const textButton = document.querySelector('.switch-theme');
    const h1Name = document.querySelector('.switch-theme-name');
    const h1Emoji = document.querySelector('.emoji');
    const sound = new Audio();
    sound.src = './assets/bwomp.m4a';
    
    if(body.classList.contains('dark')){
        titleButton.setAttribute('title', 'Clique para trocar tema para claro (tristeza)');
        textButton.innerHTML = 'Trocar para tema claro';
        h1Name.innerHTML = 'Tema Escuro :D';
        h1Emoji.innerHTML = '😎😍🥰😘🤩😝😉😊😃';
        sound.src = './assets/yipeee.m4a';
    } else {
        titleButton.setAttribute('title', 'Clique para trocar tema para escuro (felicidade)');
        textButton.innerHTML = 'Trocar para tema escuro';
        h1Name.innerHTML = 'Tema Claro :(';
        h1Emoji.innerHTML = '😥😔😭😩😖😰🤕🤮🤢';
        sound.src = './assets/bwomp.m4a';
    }
    sound.play();
}

function playYipeee() {
    const sound = new Audio();
    sound.src = './assets/yipeee.m4a';
    sound.play();
}

function playBwomp() {
    const sound = new Audio();
    sound.src = './assets/bwomp.m4a';
    sound.play();
}

let easterEgg = document.querySelector('easter-egg');
let unusualButtons = document.querySelector('.unusual-buttons');
let i = 0;
function click() {
    ++i;
    console.log(i);
}