function calcularReajuste() {
    const salario = parseFloat(document.getElementById("salario").value);
    if (isNaN(salario) || salario <= 0) {
        return;
    }
    const classe = document.getElementById("classe").value;
    let reajusteClasse = 0;
    switch(classe) {
        case "A":
            reajusteClasse = 5; 
            break;
        case "B":
            reajusteClasse = 6;
            break;
        case "C":
            reajusteClasse = 7;
            break;
    }
    const nivel = parseInt(document.getElementById("nivel").value);
    let reajusteNivel = 0;

    switch(nivel) {
        case 1:
            reajusteNivel = 0;
            break;
        case 2:
            reajusteNivel = 1;
            break;
        case 3:
            reajusteNivel = 2.5;
            break;
    }
    const reajusteTotal = reajusteClasse + reajusteNivel;
    const novoSalario = salario * (1 + reajusteTotal / 100);
    document.getElementById("resultado").innerHTML = `Novo Salário: R$ ${novoSalario.toFixed(2)} (Reajuste: ${reajusteTotal}%)`;
}