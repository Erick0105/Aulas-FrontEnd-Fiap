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
        document.getElementById("aviso").innerHTML = "Preencha os dois campos"
    }else{
        addDados(novoNome,novaIdade);
        document.getElementById("aviso").innerHTML = ""
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
