// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaaaa' // contexto léxico 2
    return saudacao
}


//Objetos são grupos aninhandos de pares nome/valor

const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Miguel Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)