console.log('Hello Word!')


/// Diferença entres em objeto e função

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto{} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())