let gastosArray = [];

function adicionarGasto() {
    let descricao = document.getElementById("descricao").value;
    let valor = parseFloat(document.getElementById("valor").value);
    let ListaGastos = document.getElementById("gastos");

    if (descricao === "" || isNaN(valor) || valor <= 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }
    let gasto = {
        descricao: descricao,
        valor: valor
    };
    gastosArray.push(gasto);
    
    ListaGastos.innerHTML = ''; // Limpar a lista antes de adicionar os novos itens
    // Exibir os gastos na lista
    for (let rs of gastosArray) {
  ListaGastos.innerHTML += `<li>${rs.descricao} - R$ ${rs.valor.toFixed(2)}</li>`;
}

     // Limpar os campos de entrada
    document.getElementById("descricao").value = '';
    document.getElementById("valor").value = '';

    let soma = gastosArray.reduce((acc, gasto) => acc + gasto.valor, 0);
    document.getElementById("total").innerText = `Total: R$ ${soma.toFixed(2)}`;

}



