"use strict"

const projetos = [
    {
        nome: 'Cadastro de pessoas',
        link: 'http://cadastro-de-funcionarios.herokuapp.com/',
        tecnologias: ['java', 'spring', 'react-js', 'bootstrap', 'my-sql'],
        imagem: 'img/cadastroPessoas.png'
    },
    {
        nome: 'site advocacia',
        link: 'https://rafamelop.github.io/LandingPage_Advocacia/',
        tecnologias: ['html', 'css'],
        imagem: 'img/advocacia.png'
    },
    {
        nome: 'clone netflix',
        link: 'https://rafamelop.github.io/clone_netflix/',
        tecnologias: ['html', 'css', 'jquery'],
        imagem: 'img/netflix.png'
    },
    {
        nome: 'e-commerce de computadores',
        link: 'http://intelligent-taste.surge.sh/',
        tecnologias: ['html', 'css', 'react-js'],
        imagem: 'img/ecommercePc.png'
    }
];
let projetosFiltered = projetos;
const container = document.querySelector('main .projetos-container');;
const tecnologias = Array.from(document.querySelectorAll("main .filter div"));

tecnologias.map(tecnologia => {

    tecnologia.addEventListener('click', function (event) {
        projetosFiltered = projetos;

        if (event.target.id == 'tudo' || tecnologia.classList.contains('selected')) {
            tecnologias.map(item => item.setAttribute('class', 'item'));
            document.getElementById('tudo').setAttribute('class', 'selected');
        }

        else {
            const id = event.target.id;
            tecnologias.map(item => item.setAttribute('class', 'item'));
            document.getElementById(id).setAttribute('class', 'selected');
            projetosFiltered = projetos.filter(elemento => {
                const list = elemento.tecnologias.join('');

                return (list.indexOf(id) > -1);
            });
        }

        container.innerHTML = "";
        carregaProjetos();
    });

});

const carregaProjetos = () => {
    projetosFiltered.length < 1 ?
        container.innerHTML += "<h2>Ainda não há projetos com essa tecnologia...</h2>"
        : projetosFiltered.map(item => {
            container.innerHTML += `
                <div class="projeto">
                    <div class="titulo"> 
                        ${item.nome} 
                        <a href="${item.link}" target="_blank">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                    <div class="imagem">
                        <div class="skills">
                            ${item.tecnologias.map(tecnologia => `<div class="skill">${tecnologia}</div>`)}
                        </div>
                        <img src="${item.imagem}" alt="imagem ${item.nome}">
                    </div>
                </div>
            `;
        });
}

carregaProjetos();
