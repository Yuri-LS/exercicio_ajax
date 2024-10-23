document.addEventListener('DOMContentLoaded', function() {
    const nome = document.querySelector('#nome');
    const usuario = document.querySelector('#usuario');
    const avatar = document.querySelector('#avatar');
    const repositorios = document.querySelector('#repositorios');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/Yuri-LS')
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        nome.innerText = json.name;
        usuario.innerText = json.login;
        avatar.src = json.avatar_url;
        repositorios.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        link.href = json.html_url;
    })
})