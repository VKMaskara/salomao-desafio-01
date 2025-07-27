let conteudos = {
    geral: {
        titulo: "Visão geral",
    },
    entrada: {
        titulo: "Entrada",
    },
    saida: {
        titulo: "Saída",
    },
    carteira: {
        titulo: "Carteira",
    }
};

function selecionarOpcao(elemento, tipo) {
    let opcoes = document.querySelectorAll('.card-opcao');
    opcoes.forEach(botao => {
        botao.classList.remove('ativo');
    });

    // Adiciona 'ativo' no botão clicado
    elemento.classList.add('ativo');

    // Atualiza o título na página
    let textoInterativo = document.getElementById('titulo-conteudo');
    textoInterativo.textContent = conteudos[tipo].titulo;

    // Filtra os lances conforme o tipo selecionado
    filtrarLances(tipo);
}

function filtrarLances(tipo) {
    let tbody = document.getElementById('lances-tbody');
    if (!tbody) return;

    tbody.innerHTML = '';

    let lancesFiltrados;
    if (tipo === 'geral') {
        lancesFiltrados = lances;
    } else {
        lancesFiltrados = lances.filter(item => item[3] === tipo);
    }

    lancesFiltrados.forEach(item => {
        let [descricao, valor, data, tipoLance, meio] = item;
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${tipoLance}</td>
            <td>${descricao}</td>
            <td>${valor}</td>
            <td>${data}</td>
            <td>${meio}</td>
        `;
        tbody.appendChild(row);
    });
}

let lancamentos = {
    entrada:{
        titulo: "Lançamento: Entrada",
    
    },
    saida:{
        titulo: "Lançamento: Saída"
    },
    ativos:{
        titulo: "Lançamento: Ativos"
    }
}
function selecaoLance(elemento, tipo){
    let tipolan = document.querySelectorAll('.escolha-lance')
    tipolan.forEach(botao =>{
        botao.classList.remove('ativo');
    });

    //adicionar 'ativo' no botão clicado
    elemento.classList.add('ativo');

    let titulolance = document.getElementById('titulo-lance')
    let  conteudolance = document.getElementById('lance-opcao')

    titulolance.textContent = lancamentos[tipo].titulo;
}

function adicionarAtivo() {
    document.getElementById("modal-overlay").classList.remove("hidden");
}

function fecharModal(){
    document.getElementById("modal-overlay").classList.add("hidden")
}

let lances = [];
let tipoLanceSelecionado = 'entrada'; // valor padrão

function selecaoLance(elemento, tipo){
    let tipolan = document.querySelectorAll('.escolha-lance')
    tipolan.forEach(botao =>{
        botao.classList.remove('ativo');
    });

    //adicionar 'ativo' no botão clicado
    elemento.classList.add('ativo');

    let titulolance = document.getElementById('titulo-lance')
    let  conteudolance = document.getElementById('lance-opcao')

    titulolance.textContent = lancamentos[tipo].titulo;

    // Salva o tipo selecionado
    tipoLanceSelecionado = tipo;
}

function salvarLance(){
    //criar os alertas sobre os dados
    let descricao = document.getElementById('descricao').value.trim();
    let valor = document.getElementById('value').value.trim();
    let data = document.getElementById('data') ? document.getElementById('data').value.trim() : '';
    let meio = document.getElementById('meio') ? document.getElementById('meio').value : '';

    if (!descricao || !valor || isNaN(Number(valor)) || !data || !meio) {
        document.getElementById('descricao').style.borderColor = !descricao ? 'red' : '';
        document.getElementById('value').style.borderColor = (!valor || isNaN(Number(valor))) ? 'red' : '';
        document.getElementById('data').style.borderColor = !data ? 'red' : '';
        document.getElementById('meio').style.borderColor = !meio ? 'red' : '';

        window.alert('Preencha todos os campos corretamente!');
        return;
    }

    //passando pela validação
    window.alert('Gasto salvo com Sucesso!')

    // Salva também o tipo do lance e o meio de pagamento
    lances.push([descricao, valor, data, tipoLanceSelecionado, meio]);
    fecharModal();
    atualizarLances();

    // Limpa os campos após fechar o modal
    document.getElementById('descricao').value = '';
    document.getElementById('value').value = '';
    if (document.getElementById('data')) document.getElementById('data').value = '';
    if (document.getElementById('meio')) document.getElementById('meio').value = '';

    window.alert(JSON.stringify(lances));
}

function atualizarLances() {
    let lista = document.getElementById('conteudo-opcao');
    lista.innerHTML = `
        <table class="lances_b">
            <thead>
                <tr>
                    <th>LANCE</th>
                    <th>DESCRIÇÃO</th>
                    <th>VALOR</th>
                    <th>DATA</th>
                    <th>MEIO</th>
                </tr>
            </thead>
            <tbody id="lances-tbody"></tbody>
        </table>
    `;

    let tbody = document.getElementById('lances-tbody');
    lances.forEach((item) => {
        let [descricao, valor, data, tipo, meio] = item;
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${tipo}</td>
            <td>${descricao}</td>
            <td>${valor}</td>
            <td>${data}</td>
            <td>${meio}</td>
        `;
        tbody.appendChild(row);
    });
}