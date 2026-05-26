const vetor1 = [];
const vetor2 = [];
const resultado = [];

alert("Vamos preencher o Vetor 1");
for (let i = 0; i < 5; i++) {
    const valor = Number(prompt("Digite o " + (i + 1) + "º número do Vetor 1:"));
    vetor1.push(valor);
}

alert("Vamos preencher o Vetor 2");
for (let i = 0; i < 5; i++) {
    const valor = Number(prompt("Digite o " + (i + 1) + "º número do Vetor 2:"));
    vetor2.push(valor);
}

for (let i = 0; i < vetor1.length; i++) {
    const elemento = vetor1[i];
    if (vetor2.includes(elemento) && !resultado.includes(elemento)) {
        resultado.push(elemento);
    }
}

alert("Vetor 1: [" + vetor1.join(", ") + "]\n" + "Vetor 2: [" + vetor2.join(", ") + "]\n\n" + "Resultado -> [" + resultado.join(", ") + "]");