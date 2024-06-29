function switchTheme() {
    body = document.querySelector('body');
    body.classList.toggle('dark');

    const titleButton = document.querySelector('.switch-theme');
    const textButton = document.querySelector('.switch-theme');
    const h1Name = document.querySelector('.switch-theme-name');
    const h1Emoji = document.querySelector('.emoji')

    if(body.classList.contains('dark')){
        titleButton.setAttribute('title', 'Clique para trocar tema para claro (tristeza)');
        textButton.innerHTML = 'Trocar para tema claro';
        h1Name.innerHTML = 'Tema Escuro :D';
        h1Emoji.innerHTML = '😎😍🥰😘🤩😝😉😊😃';
    } else {
        titleButton.setAttribute('title', 'Clique para trocar tema para escuro (felicidade)');
        textButton.innerHTML = 'Trocar para tema escuro';
        h1Name.innerHTML = 'Tema Claro :(';
        h1Emoji.innerHTML = '😥😔😭😩😖😰🤕🤮🤢';
    }
}
