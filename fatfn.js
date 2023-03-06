function Fn() {
    return 'chanchito feliz'
}

const r = Fn()
console.log(r)
//Esto es una función normal


function App() {
  this.prop = 'propiedad'
}

const t = new App()
//Esto es un objeto literal


function Ter() {
  this.prop = 'propiedad'
}

Ter.prototype.lala = function FuncionDePrototipo() {}
const y = new Ter()
//console.log(y.__proto__);
//Esto es una función de prototipo


//Todas las funciones con la palabra function pueden ser una función o tener contexto de this y tener herencia. Además son clases basadas en prototipos

const fatFn = () => {
    return 'chanchito feliz'
}

const r1 = fatFn()

console.log(r1)

//Las => no pueden ser llamadas con new. No tienen concepto de this.

const fatNR = () => 'chanchito triste'

const r2= fatNR()

console.log(r2)

//Además, el return no es necesario SI NO HAY {}