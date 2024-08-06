listaDados = [
    {"nome":"Luiz" ,"idade":19},
    {"nome":"Erick" ,"idade":18},
    {"nome":"Vicenzo" ,"idade":20}
];



//* Função que mostra  as listas
function mostrarDados() {
    
    let elNomes = document.getElementById("listaNomes");
    elNomes.innerHTML = "";

    let elIdades = document.getElementById("listaIdades");
    elIdades.innerHTML = "";

    listaDados.forEach(pessoa => {
        nomeItem = document.createElement("li");
        nomeItem.textContent = pessoa.nome;
        elNomes.appendChild(nomeItem);

        idadeItem = document.createElement("li");
        idadeItem.textContent = pessoa.idade;
        elIdades.appendChild(idadeItem);
    });
    
}

document.getElementById("mostrar").addEventListener("click", mostrarDados);



//* Função que adiciona dados na lista
function addDados(nome,idade){
    listaDados.push({"nome": nome, "idade": idade});
    mostrarDados();
};

document.getElementById("addDados").addEventListener("click", ()=>{
    novoNome = document.getElementById("idNome").value;
    novaIdade = document.getElementById("idIdade").value;

    if (novoNome === "" || novaIdade === ""){
        document.getElementById("aviso").textContent = "Preencha os dois campos"
    }else{
        document.getElementById("aviso").textContent = ""
        addDados(novoNome,novaIdade);
    }
});



//* Parte que reverte as listas
document.getElementById("reverse").addEventListener("click", ()=>{
    listaDados.reverse();
    mostrarDados();
});



//* Parte que organiza as listas por idade
document.getElementById("ordenarIdade").addEventListener("click", ()=>{
    listaDados.sort((a, b) => a.idade - b.idade);
    console.log(listaDados);
    mostrarDados();
});



//* Parte que organiza as listas por nome
document.getElementById("ordenarNome").addEventListener("click", ()=>{
    listaDados.sort((a, b) => a.nome.localeCompare(b.nome)); //! Perguntar uma explicação melhor sobre
    console.log(listaDados);
    mostrarDados();
});



//* Função que pesquisa se tem um nome na lista
function pesquisar(alvo){
    
    resultado = listaDados.find(procurado => procurado.nome === alvo);

    
    if (resultado !== undefined){
        document.getElementById("aviso").textContent = "Usuário encontrado";
    }else{
        document.getElementById("aviso").textContent = "Usuário não encontrado";
    }
}

document.getElementById("pesquisar").addEventListener("click", ()=>{
    pessoasPesquisada = document.getElementById("idPesquisa").value
    
    if (pessoasPesquisada === ""){
        document.getElementById("aviso").textContent = "Preencha o campo de pesquisa"
    }else{
        document.getElementById("aviso").textContent = ""
        pesquisar(pessoasPesquisada)
    }
});