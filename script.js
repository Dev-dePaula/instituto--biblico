const livros = [
    { nome: "Gênesis", id: "G0REWUA99pQ", testamento: "VT" },
    { nome: "Êxodo", id: "e7_7_D-280M", testamento: "VT" },
    { nome: "Levítico", id: "W9833vOnWNo", testamento: "VT" },
    { nome: "Números", id: "tp5Z_06N58k", testamento: "VT" },
    { nome: "Deuteronômio", id: "2X_09vI7f0E", testamento: "VT" },
    { nome: "Josué", id: "fW_X0jYtP1Y", testamento: "VT" },
    { nome: "Juízes", id: "q69N7I9Qz7U", testamento: "VT" },
    { nome: "Rute", id: "m_rI8Yh0Lmo", testamento: "VT" },
    { nome: "1 Samuel", id: "XQ_TzIqFpW4", testamento: "VT" },
    { nome: "2 Samuel", id: "T7UfG0hY8-s", testamento: "VT" },
    { nome: "1 e 2 Reis", id: "WkS2E_D-h7o", testamento: "VT" },
    { nome: "1 e 2 Crônicas", id: "nU6fR0p1Qf8", testamento: "VT" },
    { nome: "Esdras / Neemias", id: "v39z6hR_40U", testamento: "VT" },
    { nome: "Ester", id: "g_S5D9x2R9Y", testamento: "VT" },
    { nome: "Jó", id: "gK6_jE89L54", testamento: "VT" },
    { nome: "Salmos", id: "o5U5jC9-q68", testamento: "VT" },
    { nome: "Provérbios", id: "8D0R8l6V_R4", testamento: "VT" },
    { nome: "Eclesiastes", id: "e6A6uH1yB0o", testamento: "VT" },
    { nome: "Cântico dos Cânticos", id: "pGv4h2vS5h4", testamento: "VT" },
    { nome: "Isaías", id: "d0A6Uchb1F8", testamento: "VT" },
    { nome: "Mateus", id: "y6G1L67C_7A", testamento: "NT" },
    { nome: "Marcos", id: "r-9N-yB9Yg4", testamento: "NT" },
    { nome: "Lucas", id: "xYqC3U4w8pU", testamento: "NT" },
    { nome: "João", id: "X-N0Z4o8-8I", testamento: "NT" },
    { nome: "Atos", id: "0o-lXfC6f4I", testamento: "NT" },
    { nome: "Romanos", id: "fLidC99pS-I", testamento: "NT" },
    { nome: "1 Coríntios", id: "Rz0I0M0U6S8", testamento: "NT" },
    { nome: "2 Coríntios", id: "nU6fR0p1Qf8", testamento: "NT" },
    { nome: "Gálatas", id: "X_Lp6fN9S-w", testamento: "NT" },
    { nome: "Efésios", id: "L_I7S7E8P_Y", testamento: "NT" },
    { nome: "Filipenses", id: "o_mN_F0oU_w", testamento: "NT" },
    { nome: "Colossenses", id: "X_Lp6fN9S-w", testamento: "NT" },
    { nome: "1 e 2 Tessalonicenses", id: "pGv4h2vS5h4", testamento: "NT" },
    { nome: "1 e 2 Timóteo / Tito / Filemom", id: "L_I7S7E8P_Y", testamento: "NT" },
    { nome: "Hebreus", id: "0N-X0pY9-8U", testamento: "NT" },
    { nome: "Tiago", id: "o_mN_F0oU_w", testamento: "NT" },
    { nome: "1 e 2 Pedro", id: "X_Lp6fN9S-w", testamento: "NT" },
    { nome: "1-3 João / Judas", id: "pGv4h2vS5h4", testamento: "NT" },
    { nome: "Apocalipse", id: "5-fMv7v6P9s", testamento: "NT" }
];

function renderizarLivros(filtro = "") {
    const listaUl = document.getElementById('lista-livros');
    if (!listaUl) return;
    
    listaUl.innerHTML = "";
    const filtrados = livros.filter(l => l.nome.toLowerCase().includes(filtro.toLowerCase()));
    
    filtrados.forEach(livro => {
        const li = document.createElement('li');
        li.innerText = livro.nome;
        li.className = livro.testamento === "VT" ? "item-vt" : "item-nt";
        li.onclick = () => {
            document.getElementById('titulo-livro').innerText = `Estudo de ${livro.nome}`;
            const host = window.location.origin;
            const embedUrl = `https://www.youtube.com/embed/${livro.id}?enablejsapi=1&origin=${encodeURIComponent(host)}&rel=0`;
            document.getElementById('video-player').src = embedUrl;
        };
        listaUl.appendChild(li);
    });
}

function filtrarLivros() {
    const termo = document.getElementById('busca').value;
    renderizarLivros(termo);
}

function abrirDicionario() {
    const termo = prompt("🔍 O que deseja pesquisar no Dicionário?");
    if(termo) window.open(`https://www.bibliaonline.com.br/dicionario-biblico/${termo}`, '_blank');
}

function abrirChave() {
    const titulo = document.getElementById('titulo-livro').innerText;
    if(titulo !== "Selecione um livro") {
        const livro = titulo.replace('Estudo de ', '');
        window.open(`https://www.biblegateway.com/quicksearch/?search=${livro}&version=NVI-PT`, '_blank');
    } else {
        alert("Selecione um livro primeiro!");
    }
}

// Inicia o menu assim que o navegador terminar de carregar o HTML
document.addEventListener('DOMContentLoaded', () => {
    renderizarLivros();
});
