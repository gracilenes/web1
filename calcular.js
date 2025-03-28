function calcularReajuste(salario, classe, nivel) {
    const percentuaisClasse = {
        'A': 5,
        'B': 6,
        'C': 7
    };

    const percentuaisNível = {
        1: 0,
        2: 1,
        3: 2.5
    };

    if (!(classe in percentuaisClasse)) {
        return "Classe inválida";
    }
    if (!(nível in percuntuaisNível)) {
        return "Nível inválido";
    }

    const aumentoClasse = percentuaisClasse[classe];
    const aumentoNível = percentuaisNível[nível];

    const aumentoTotal = aumentoClasse + aumentoNível;
    const reajuste = salario * (aumentoTotal/100);
    const novoSalario = salario + reajuste;
    return {
        novoSalario: novoSalario.toFixed(2),
        reajuste: reajuste.toFixed(2)
    };
}

const salarioInicial = 5000;
const classe = 'A';
const nível = 2;

const resultado = calcularReajuste(salarioInicial, classe, nível);

console.log('Salário inicial: R$ $ {salarioInicial}');
console.log('Novo salário após reajuste: R$ ${resultado.novoSalario');
console.log('Reaguste aplicado: R$ $ {resultado.reajuste');

