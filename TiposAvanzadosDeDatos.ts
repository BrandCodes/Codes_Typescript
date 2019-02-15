//--Intersection Types--\\

class User {
    name: string;
}

class Admin {
    permissions: number;
    getPermission() { };
}

//Intersection
let user: User & Admin; //originalmente sería de tipo User&Admin
//Puede acceder a las dos clases:
user.name = "Vicente";
user.permissions = 8;
user.getPermission();

//Pero no se puede hacer de la siguiente manera:
user = new User();  //No se puede porque no pertenece al mismo tipo.



================================================================================

//--Type Assertions--\\

//interface para apoyarnos para hacer la corrección.
interface miCorrector{
    url: string;
}

//Objeto vacío por lo tanto causaría un error porque no tiene url
let options = {} as miCorrector; //type assertions (hace corrección del type con el que fu asignado en Ts).
options.url = "www.ejemplo.com";



================================================================================

//--Type Aliases--\\


//Las tuplas pueden almacenar mas de un tipo.
//El valor de la primera y segunda declaración deben ser del mismo tipo en ese mismo orden.
//Las siguientes declaraciones pueden ser: string | number.
let tupla: [string, number];

tupla[0] = 'Hola';  //String
tupla[1] = 2;       //Number
tupla[2] = 15;		//Manda error: Type '15' is not assignable to type 'undefined'.

//Si probamos éste otro:
let d: [number, string] = [105, "owl", 129, 45, "cat"];
//tambien manda error, lo cual quiere decir que es incorrecto la teoría antes descrita acerca de las Tuplas
/*
El error es el siguiente:
Type '[number, string, number, number, string]' is not assignable to type '[number, string]'.
  Types of property 'length' are incompatible.
    Type '5' is not assignable to type '2'.

El error vendría a causa de la longitud con la que es declarada la Tupla. Lo correcto a ello según eso sería:
let d: [number, string, number, number, string] = [105, "owl", 129, 45, "cat"];
*/



================================================================================

//--Enums--\\

//enumeración:
enum Tallas { Chica = 1, Mediana = 2, Grande = 3 }

//typescript por default asigna al primero el numero=1 
// o bien nosotros le podemos asignar dónde inicia la secuencia.
enum PaymentState { Creado = 1, Pagado, EnDeuda };  

class Pedido{
    talla: number;
}

let pedido: Pedido = new Pedido();
pedido.talla = Tallas.Chica;
console.log(PaymentState.EnDeuda);



