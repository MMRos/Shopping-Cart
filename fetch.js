const url = 'https://jsonplaceholder.typicode.com/users'

//fetch(url, {
//    method: 'POST', //Se usa para crear recursos deuntro de una API rest
//    headers: {
//        'Content-Type': 'application/json', //Con esto indicamos al servidor que los datos son en formato json
//        'Authorization': 'Bearer acadebieseexistiruntokendeautorización', //Parámetro opcional para hacer login. Ahí va la apkey
//    },
//    body: JSON.stringify({ //Así le mandamos datos al servidor
//        name:'ChanchitoFeliz',
//        website:'google.com'
//    })
//})
 //   .then((response) => response.json())//nos dan todos los usuarios en json. De haber puesto text nos lo daría en strings
 //   .then(data => console.log(data))
    //.then((response)=> console.log(response))
    //Esto nos ofrece métodos en la web. Los que usaremos aquí son text y json que son promesas

//Lo de arriba son promesas, lo de abajo asyncawait que se usa más. El código al estilo funcional no funciona con asyncawait, solo el de promesas. El de abajo es código imperativo y es el más usado

const fn = async () => {
    const response = await fetch(url, {
        method: 'POST', //Se usa para crear recursos deuntro de una API rest
        headers: {
            'Content-Type': 'application/json', //Con esto indicamos al servidor que los datos son en formato json
            'Authorization': 'Bearer acadebieseexistiruntokendeautorización', //Parámetro opcional para hacer login. Ahí va la apkey
        },
        body: JSON.stringify({ //Así le mandamos datos al servidor
            name:'ChanchitoFeliz',
            website:'google.com'
        })
    })
    const data = await response.json()
    console.log(data);
}
fn()
