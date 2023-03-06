const Rectangulo = class R {

}
//Clase asignada al instante a una constante. Se llama Expresión de Clase y puede ser anónima (en este caso, quitando la R)

const r = new Rectangulo()

class Circulo {

}
//Declaración de clase


function Cuadrado() {}
//Estas funciones son enviadas al inicio. Esto es Hoisting.Es lo mismo que pasa con var
//Las clases declaradas o expresadas no tienen hoisting. Esto puede llevar a poder cambiar el cómo funciona un programa mediante alterar las var y function, supongo


//Con new podemos instanciar la clase y activar la propiedad de constructor
//Esta forma de colocar distintos estados en una función mediante el constructor
class Chancho {
    constructor(estado = 'feliz') {//Estado por defecto
        console.log('soy un chancho ${estado}');
    }
}

const feliz = new Chancho('feliz')//Estas dos reemplazan el paréntesis de estado
const triste = new Chancho('triste')
const nose = new Chancho()//Este deja el que está por defecto en estado





class Cerdo {
    
    constructor(estado = 'feliz'){
        this.estado = estado
    }
    hablar() {//esto es un método. Es parecido a una fución. Queda dentro de su prototype __proto__
        console.log('soy un cerdo ${this.estado}')
    }
}

const feliS = new Cerdo ('feliz')
feliS.hablar()
const triZte = new Cerdo ('triste')
triZte.hablar()
const noZe = new Cerdo ()
noZe.hablar()

//Los prototype son herencia de un objeto que forma otros objetos. Se les puede agregar más prototypes o propiedades usando Cerdo.prototype.edad = 30;
//Los prototypes se refieren a la relación entre objetos y su relación de herencia, mientras que las props se refieren a las variables o valores que se pasan a un componente para ser utilizadas en su lógica interna.
//Para agregar una propiedad podríamos usar Cerdo.pelo = "negro"; o si ya la tiene Cerdo["pelo"] = "negro";

'<Persona colorPelo="negro" />'
//Así se asigna una propiedad en react sin las ''

class Persona extends React.Component {
  render() {
    return <div>Mi color de cabello es: {this.props.colorPelo}</div>;
  }
}

//Así se pasa de padre a hijo. 
//Las propiedades sin inmutables y deben pasarse de componentes padres a hijos.Los states pueden cambiarse desde el mismo componente