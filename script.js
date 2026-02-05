const livros = [
    { nome: "Gênesis", id: "G0REWUA99pQ", testamento: "VT" },
    { nome: "Êxodo", id: "e7_7_D-280M", testamento: "VT" },
    { nome: "Levítico", id: "W9833vOnWNo", testamento: "VT" },
    { nome: "Números", id: "tp5Z_06N58k", testamento: "VT" },
    { nome: "Deuteronômio", id: "2X_09vI7f0E", testamento: "VT" },
    { nome: "Josué", id: "fW_X0jYtP1Y", testamento: "VT" },
    { nome: "Juízes", id: "q69N7I9Qz7U", testamento: "VT" },
    { nome: "Mateus", id: "y6G1L67C_7A", testamento: "NT" },
    { nome: "Marcos", id: "r-9N-yB9Yg4", testamento: "NT" },
    { nome: "Lucas", id: "xYqC3U4w8pU", testamento: "NT" },
    { nome: "João", id: "X-N0Z4o8-8I", testamento: "NT" },
    { nome: "Atos", id: "0o-lXfC6f4I", testamento: "NT" },
    { nome: "Romanos", id: "fLidC99pS-I", testamento: "NT" },
    { nome: "Apocalipse", id: "5-fMv7v6P9s", testamento: "NT" }
];

const listaUl = document.getElementById('lista-livros');

function renderizarLivros(filtro = "") {
    listaUl.innerHTML = "";
    livros.filter(l => l.nome.toLowerCase().includes(filtro.toLowerCase())).forEach(livro => {
        let li = document.createElement('li');
        li.innerText = livro.nome;
        li.className = livro.testamento === "VT" ? "item-vt" : "item-nt";
        li.onclick = () => {
            document.getElementById('titulo-livro').innerText = `Estudo de ${livro.nome}`;
            
            // CORREÇÃO PARA GITHUB PAGES:
            const host = window.location.protocol + "//" + window.location.host;
            const embedUrl = `https://www.youtube.com/embed/${livro.id}?enablejsapi=1&origin=${encodeURIComponent(host)}&rel=0`;
            
            document.getElementById('video-player').src = embedUrl;
        };
        listaUl.appendChild(li);
    });
}

function filtrarLivros() {
    renderizarLivros(document.getElementById('busca').value);
}

function abrirDicionario() {
    const termo = prompt("O que deseja buscar no dicionário?");
    if(termo) {
        // Site estável para dicionário
        window.open(`https://www.bibliaonline.com.br/dicionario-biblico/${termo}`, '_blank');
    }
}

function abrirChave() {
    const titulo = document.getElementById('titulo-livro').innerText;
    if(titulo !== "Selecione um livro") {
        const livro = titulo.replace('Estudo de ', '');
        window.open(`https://www.biblegateway.com/quicksearch/?search=${livro}&version=NVI-PT`, '_blank');
    } else {
        alert("Selecione um livro no menu lateral primeiro!");
    }
}

// Inicializa a lista
renderizarLivros();
