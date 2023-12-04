const pessoa = {
    saudacao: 'Bom dia!',
    falar (){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) 
// bind amarra a função para que consiga associar o This corretamente
falarDePessoa()