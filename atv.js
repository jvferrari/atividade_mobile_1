function verificaPalindromo(palavra) {
    // Remove espaços em branco e converte para minúsculas
    palavra = palavra.toLowerCase().replace(/ /g, '');

    // Inverte a palavra
    const palavraInvertida = palavra.split('').reverse().join('');

    // Verifica se a palavra original é igual à palavra invertida
    if (palavra === palavraInvertida) {
        return true;
    } else {
        return false;
    }
}

// Função para ler a palavra do teclado (simulação em Node.js)
function lerPalavra() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Digite uma palavra: ', (palavra) => {
        const resultado = verificaPalindromo(palavra);
        if (resultado) {
            console.log(`A palavra "${palavra}" é um palíndromo.`);
        } else {
            console.log(`A palavra "${palavra}" não é um palíndromo.`);
        }
        readline.close();
    });
}

// Chamada da função para ler a palavra
lerPalavra();
