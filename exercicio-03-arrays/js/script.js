
arraySalarios = [4300,3500,1460,2000,1650 ,1250,2135,1900,2950,3785];

//* Função para aumentar o sálario correspondente
const salariosAtualizados = arraySalarios.map((salario) =>{
    return salario > 2000 ? salario + (salario *0.1):salario + (salario *0.15);
});


//* Filtrando os salarios maiores que 2500
const filtrarSalarios = salariosAtualizados.filter((salariozinho)=> salariozinho >= 2500);


//* Somando esses valores para um só usando Reduce
const salarioSomados = filtrarSalarios.reduce((imposto,salarioAtual)=> imposto + salarioAtual);

console.log(salarioSomados)