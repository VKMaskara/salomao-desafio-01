let conteudos = {
 geral: {
    titulo: "Visão geral",
     conteudo: " <input typer='number'>"
 },
 entrada: {
  titulo: "Entrada",
   conteudo: " <input typer='number'>"
 },
 saida: {
    titulo: "Saida",
    conteudo: `
        <form>
            <label for="descricao">Descrição:</label>
            <input type="text" id="descricao" placeholder="Digite a descrição"><br><br>

            <label for="valor">Valor:</label>
            <input type="number" id="valor" placeholder="Digite o valor"><br><br>

            <button type="button" id="btn" onclick="adicionarGasto()">Adicionar Gasto</button>
        </form>
    `
},
 carteira: {
    titulo: "Carteira",
    conteudo: " <input typer='number'>"
 }
}
function selecionarOpcao(elemento, tipo){
    let opcao = document.querySelectorAll('.card-opcao').forEach(botao => {
        botao.classList.remove('ativo');
    });

    //adicionar 'ativo' no botão clicado
    elemento.classList.add('ativo');

     // 3. Atualiza o título na página
   let textoInterativo = document.getElementById('titulo-conteudo');
   let conteudoInterativo = document.getElementById('conteudo-opcao')


   textoInterativo.textContent = conteudos[tipo].titulo;
   conteudoInterativo.innerHTML = conteudos[tipo].conteudo
}

let lancamentos = {
    entrada:{
        titulo: "Lançamento: Entrada",
        conteudo:``,
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
    conteudolance.innerHTML = lancamentos[tipo].conteudo;


}