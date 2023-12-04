function Pessoa() {
    this.idade=0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

// Mesma base do código do ThisBind2.js