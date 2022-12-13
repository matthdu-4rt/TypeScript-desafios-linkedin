//Las uniones de tipo nos permiten definir parametros o propiedades
// que pueden soportar varias formas de datos.

// Una clase que se encarga de Imprimir Valores dependiendo 
// de los parametros que se pasen al constructor de la clase

//Desafio:
// Definir uniones de tipos, para trabajar con diferentes tipos de datos
// y configuracion de impresion.

Type Union = number | string | boolean;

type UnionArreglo = Union[];

class Impresion {
    private _valores: UnionArreglo;
    private _color: string;
    private _mapeoDatos: (valor: Union) => Union;

    constructor(
        Valores: UnionArreglo,
        color: string,
        mapeoDatos: (valor: Union) => Union
    ) {
        this._valores = valores;
        this._color = color;
        this._mapeoDatos = mapeoDatos;
    }

    public imprimir() {
        this._valores.map(this._mapeoDatos).forEach( valor => console.log(`%c ${valor}`, `color: ${this._color}`));
    }
}

// la primera instancia se construye con arreglos de numeros
const numeros = new Impresion([1, 2, 3, 4, 5, 6, 7, 8, 9], '#bada55', (numero => (numero as number) * 2));
numeros.imprimir();

// la segunda instancia con arreglos de cadenas de caracteres
const textos = new Impresion(['Lorem', 'ipsum', 'dolor', 'sit', 'amet'], '#a3073d', (texto => (texto as string).toUpperCase()));
textos.imprimir();

// la tercera con un arreglo de valores booleanos
const booleanos = new Impresion([true, true, false, true, false, true], '#943b0c', (booleano -> (booleano as boolean)? 1 : 0));
booleanos.imprimir();

