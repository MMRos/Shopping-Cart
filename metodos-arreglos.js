//const arr = [0, 1, 2, 3, 4]

//const r = arr.filter(el=> el>2)
//console.log(r)
//Esto nos devuelve un arreglo que cumpla las condiciones dadas. Siempre la misma longitud o menor

const arr = [5, 1, 2, 3, 4]

const r = arr.filter((el, i)=> {
    console.log(i);
    return el > 2
})
console.log(r)
//Con esto podemos agregar un índice que muestre el resto de valores además del destructuring filtrado

//const mapped = arr.map((el)=>el * 2)
//console.log(mapped);
//Esto crea un nuevo arreglo sacando los elementos multiplicados. Filtra, toma, multiplica

//const mapped = arr.map((el)=> `<h1>${el}</h1>`)
//console.log(mapped);
//Esto nos devuelve el arreglo con html. Cada valor entregado como titulo

const users = [
    { id: 1, name: 'Chanchito'},
    { id: 2, name: 'Chanchote'},
    { id: 3, name: 'Chanchoto'},
    { id: 4, name: 'Chanchuto'},
]

const mapped = users.map((user) => `<h1>${user.name}</h1>`)
//Así nos devuelve los elementos listados escogiendo solo los nombres

//const r1 = arr.reduce((acc, el)=> acc + el, 0) //Acc son los elementos acumulados. Aquí en la primera iteración le damos al acc el valor de 0, cuando pasa por arr el toma el primer valor (5) que luego se suma al acc (0) y pasa a ser acc (5). En la siguiente iteración acc (5) se suma a el (1, ya que es el siguiente valor del arr) y el resultado pasa a acc (6). Después se repetirá con 2, luego 3 y finalmente 4 dando un total de 15 que será el valor final de r1 en este caso.

const getMax = (a,b) => Math.max(a,b)
const r1 = arr.reduce(getMax)//aquí podemos meter (getMax, 0) es decir, el segundo argumento. Esto se considerará un valor del array que se está evaluando.
console.log(r1);
//Esto nos dará el número máximo del arreglo. Si todos fueran negativos nos daría el menor porque está más cerca de ser positivo. Si en ese caso hubiera un 0 ESE sería el más alto.

const r2 =users.reduce ((ac, el)=> 
    `${acc === '' ? '' : `${acc},`} ${el.name}`, '')//Aquí el segundo argumento 0 es un string vacío
console.log(r2)//Esto nos dará los nombres como un string
//El agregado a acc es para evitar que nos muestre una coma. Esto ocurre porque en la primera iteración el acc está vacío, pero pone una coma por defecto. De esta manera lo que hace es dejar el vacío sin comas.

const r3 = users.reduce((acc, el)=> {
    if (el.id < 2) {
        return acc
    }
    return acc.concat(el)
}, [])
console.log(r3)
//El segundo argumento es el arreglo vacío. Al acc, el se le pide que no muestre los ids menores a 2 los cuales lanzará concatenados