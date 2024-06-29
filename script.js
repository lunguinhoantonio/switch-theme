function switchTheme() {
    body = document.querySelector('body');
    body.classList.toggle('dark');

    const titleButton = document.querySelector('.switch-theme');
    const textButton = document.querySelector('.switch-theme');
    const h1 = document.querySelector('h1');
    if(body.classList.contains('dark')){
        titleButton.setAttribute('title', 'Trocar tema para claro (tristeza)');
        textButton.innerHTML = 'Trocar para tema claro';
        h1.innerHTML = 'Tema Escuro :D';
    } else {
        titleButton.setAttribute('title', 'Trocar tema para escuro (felicidade)');
        textButton.innerHTML = 'Trocar para tema escuro';
        h1.innerHTML = 'Tema Claro :(';
    }
}
