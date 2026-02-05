const livros = [
    // VELHO TESTAMENTO
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
    { nome: "1 Reis", id: "WkS2E_D-h7o", testamento: "VT" },
    { nome: "2 Reis", id: "WkS2E_D-h7o", testamento: "VT" },
    { nome: "1 Crônicas", id: "nU6fR0p1Qf8", testamento: "VT" },
    { nome: "2 Crônicas", id: "nU6fR0p1Qf8", testamento: "VT" },
    { nome: "Esdras / Neemias", id: "v39z6hR_40U", testamento: "VT" },
    { nome: "Ester", id: "g_S5D9x2R9Y", testamento: "VT" },
    { nome: "Jó", id: "gK6_jE89L54", testamento: "VT" },
    { nome: "Salmos", id: "o5U5jC9-q68", testamento: "VT" },
    { nome: "Provérbios", id: "8D0R8l6V_R4", testamento: "VT" },
    { nome: "Eclesiastes", id: "e6A6uH1yB0o", testamento: "VT" },
    { nome: "Cântico dos Cânticos", id: "pGv4h2vS5h4", testamento: "VT" },
    { nome: "Isaías (1-39)", id: "d0A6Uchb1F8", testamento: "VT" },
    { nome: "Isaías (40-66)", id: "S_O4eOaL-f0", testamento: "VT" },
    { nome: "Jeremias", id: "p_7f_69T6V4", testamento: "VT" },
    { nome: "Lamentações", id: "p8GJKw8L_rI", testamento: "VT" },
    { nome: "Ezequiel (1-32)", id: "SDeCwwS-S8o", testamento: "VT" },
    { nome: "Ezequiel (33-48)", id: "mE8_9fM_6uY", testamento: "VT" },
    { nome: "Daniel", id: "9c3jNAnY_6Y", testamento: "VT" },
    { nome: "Oseias", id: "IAnS8fU8K_s", testamento: "VT" },
    { nome: "Joel", id: "zM_YVn_mI_k", testamento: "VT" },
    { nome: "Amós", id: "VIsL96S_9I8", testamento: "VT" },
    { nome: "Obadias", id: "oM8f9I_YI_s", testamento: "VT" },
    { nome: "Jonas", id: "f-M7zM6_S-k", testamento: "VT" },
    { nome: "Miqueias", id: "M8f9I_YI8-k", testamento: "VT" },
    { nome: "Naum", id: "M8f9I_YI8-s", testamento: "VT" },
    { nome: "Habacuque", id: "M8f9I_YI8-u", testamento: "VT" },
    { nome: "Sofonias", id: "M8f9I_YI8-v", testamento: "VT" },
    { nome: "Ageu", id: "M8f9I_YI8-x", testamento: "VT" },
    { nome: "Zacarias", id: "M8f9I_YI8-z", testamento: "VT" },
    { nome: "Malaquias", id: "M8f9I_YI8-1", testamento: "VT" },

    // NOVO TESTAMENTO
    { nome: "Mateus (1-13)", id: "y6G1L67C_7A", testamento: "NT" },
    { nome: "Mateus (14-28)", id: "G_L67C_7A", testamento: "NT" },
    { nome: "Marcos", id: "r-9N-yB9Yg4", testamento: "NT" },
    { nome: "Lucas (1-9)", id: "xYqC3U4w8pU", testamento: "NT" },
    { nome: "Lucas (10-24)", id: "U4w8pU", testamento: "NT" },
    { nome: "João (1-12)", id: "X-N0Z4o8-8I", testamento: "NT" },
    { nome: "João (13-21)", id: "N0Z4o8-8I", testamento: "NT" },
    { nome: "Atos (1-12)", id: "0o-lXfC6f4I", testamento: "NT" },
    { nome: "Atos (13-28)", id: "lXfC6f4I", testamento: "NT" },
    { nome: "Romanos (1-4)", id: "fLidC99pS-I", testamento: "NT" },
    { nome: "Romanos (5-16)", id: "idC99pS-I", testamento: "NT" },
    { nome: "1 Coríntios", id: "Rz0I0M0U6S8", testamento: "NT" },
    { nome: "2 Coríntios", id: "nU6fR0p1Qf8", testamento: "NT" },
    { nome: "Gálatas", id: "X_Lp6fN9S-w", testamento: "NT" },
    { nome: "Efésios", id: "L_I7S7E8P_Y", testamento: "NT" },
    { nome: "Filipenses", id: "o_mN_F0oU_w" },
    { nome: "Colossenses", id: "X_Lp6fN9S-w", testamento: "NT" },
    { nome: "1 Tessalonicenses", id: "U_w8pU", testamento: "NT" },
    { nome: "2 Tessalonicenses", id: "w8pU", testamento: "NT" },
    { nome: "1 Timóteo", id: "fLidC99pS-I", testamento: "NT" },
    { nome: "2 Timóteo", id: "idC99pS-I", testamento: "NT" },
    { nome: "Tito", id: "Rz0I0M0U6S8", testamento: "NT" },
    { nome: "Filemom", id: "nU6fR0p1Qf8", testamento: "NT" },
    { nome: "Hebreus", id: "0N-X0pY9-8U", testamento: "NT" },
    { nome: "Tiago", id: "X_Lp6fN9S-w", testamento: "NT" },
    { nome: "1 Pedro", id: "L_I7S7E8P_Y", testamento: "NT" },
    { nome: "2 Pedro", id: "o_mN_F0oU_w", testamento: "NT" },
    { nome: "1-3 João", id: "X_Lp6fN9S-w", testamento: "NT" },
    { nome: "Judas", id: "U_w8pU", testamento: "NT" },
    { nome: "Apocalipse (1-11)", id: "5-fMv7v6P9s", testamento: "NT" },
    { nome: "Apocalipse (12-22)", id: "fMv7v6P9s", testamento: "NT" }
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
    
    // Captura o domínio atual (ex: https://seu-usuario.github.io)
    const currentOrigin = window.location.origin;
    
    // Monta a URL com os parâmetros que o YouTube exige para sites externos
    const embedUrl = `https://www.youtube.com/embed/${livro.id}?enablejsapi=1&origin=${encodeURIComponent(currentOrigin)}&rel=0`;
    
    document.getElementById('video-player').src = embedUrl;
};
            
            // LINK SIMPLIFICADO PARA EVITAR BLOQUEIO NO GITHUB
            const embedUrl = `https://www.youtube.com/embed/${livro.id}`;
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

renderizarLivros();

