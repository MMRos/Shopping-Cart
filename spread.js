const fn = (a,b,c) => console.log(a,b,c)

const arr = [1, 2, 3, 4]

//fn(arr[0], arr[1], arr[2]) Muestra la suma de los valores de arr (hasta el 3) conforme a la constante fn 
fn(...arr)
//Esto es un spread operator que hace lo mismo que la anterior

const arr1 = [5,6]

//const arr2= arr.concat(arr1) Concatena ambas const 
//const arr2= [...arr, ...arr1] Lo mismo
const arr2= [...arr, 2, 3] //le agrega valores al arr concatenándolo
const arr3 = arr
arr[0] = 'chanchito feliz' //Modifica el primer valor de arr
//console.log(arr, arr2,arr3); //Así se muestra que los cambios a una constante posteriores a la creación de arr1 no modifican arr2

const obj1 = { a: 1, b: 2}
const obj2 = { b:5, c:'chanchito feliz'}

const obj3 = {...obj1}//Copia del obj1. Podemos modificar el obj3 sin dañar el 1

obj1.a = 10
//console.log(obj3, obj1);

const obj4 = {...obj1, ...obj2} //Aquí toma ya los valores tras modificar el obj1
console.log(obj4);

const obj5 = {
   ...obj1,
   loading: true,
   data: {
    prop:'lala',
    animal: 'perrito'
   } 
}
console.log(obj5);