//const rest = (...argumentos) => {
//    console.log(argumentos);
//}

//rest(1, 2, 3)
//Con esto introducimos en el rest los argumentos que queramos y quedan dentro de un arreglo. Esto puede usarse para guardar datos en las cookies o en el mismo programa

const rest = (a, ...argumentos) => {
    console.log(a);
    console.log(argumentos);
}

//rest(1, 2, 3)
//El rest operator debe ser siempre el último en una función. De esta forma el primer argumento se lo queda a, el resto el rest operator. Si se siguieran metiendo más letras antes del rest operator, se repartirán y siempre se quedará el rest operator los restantes

const obj = {
    a: 1, b: 2, c: 3, d: 4
}

//const { a, b, ...restobj } = obj
//console.log(a, b, restobj);
//Así se hace lo mismo, pero con objetos. Esto es un destructuring

const arr = [1, 2, 3, 4, 5]

const [a, b, ...r] = arr
console.log(a, b, r)
//Así se pueden sacar los valores de un arreglo

const useState = () => ['valor',() => {} ]

//console.log(useState); así imprimimos el valor
const [valor, setValor] = useState()//con esto valor es el string, setValor una función
console.log(valor, setValor); //Así se imprimen ambos. Usar el hoog useState retorna un arreglo con un valor y una función. 

//Con el rest podemos agrupar los elementos y con el distructuring tomarlos

