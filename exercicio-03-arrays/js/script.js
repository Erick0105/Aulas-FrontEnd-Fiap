
arraySalarios = [
    {"id":1,"salario":4300},
    {"id":2,"salario":3500},
    {"id":3,"salario":1460},
    {"id":4,"salario":2000},
    {"id":5,"salario":1650},
    {"id":6,"salario":1250},
    {"id":7,"salario":2135},
    {"id":8,"salario":1900},
    {"id":9,"salario":1250},
    {"id":10,"salario":3785},    
];

arrayId = [
    {"nome":"Lucinda Luna","id":1},
    {"nome":"Ray Morton","id":2},
    {"nome":"Maria Ellis","id":3},
    {"nome":"Lula Keller","id":4},
    {"nome":"Johnny Hopkins","id":5},
    {"nome":"Gordon Alvarado","id":6},
    {"nome":"Marc Watson","id":7},
    {"nome":"Jackson Holt","id":8},
    {"nome":"Mitchell Richards","id":9},
    {"nome":"Eleanor Valdez","id":10},    
];

//* Função para aumentar o sálario correspondente
const salariosAtualizados = arraySalarios.map((salarioFunc) =>{
    let salarioAtualizado = salarioFunc.salario <= 2000 ? salarioFunc.salario + (salarioFunc.salario*0.15):salarioFunc.salario + (salarioFunc.salario*0.1);
    salarioFunc.salario = salarioAtualizado;

    let nomeFunc = arrayId.find(idFunc => idFunc.id === salarioFunc.id);

    return {...salarioFunc, nome:nomeFunc.nome};
});

function mostrarDados(){
    let elLista = document.getElementById("lista");
    elLista.innerHTML = "";

    salariosAtualizados.forEach(funcionario => {
        funcDoc = document.createElement("li");
        funcDoc.textContent = funcionario.nome + funcionario.id + funcionario.salario;
        elLista.appendChild(funcDoc);
    });
}

console.log(salariosAtualizados);

document.getElementById("mostrar").addEventListener("click", mostrarDados);

//* Filtrando os salarios maiores que 2500


//* Somando esses valores para um só usando Reduce
