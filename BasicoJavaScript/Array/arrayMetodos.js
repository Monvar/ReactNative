const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro! 
console.log(pilotos) // sai o ultimo da lista

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') 
// cuidado na escrita, há função 'slice' e pode dar problema por não mostar o erro kkkk
console.log(pilotos)

// remover
pilotos.splice(2,1) // Bottas sai
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)  // novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)