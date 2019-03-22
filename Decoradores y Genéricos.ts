/* Decoradores con Argumentos */

//'Auditable'(el decorador) Nos ayuda a que nuestro mensaje se imprima diferente según sea el caso.
function Auditable(message: string) {       
    return function (clsProto: any, methodName: string, descriptor?: any) {
        let originalFunction = clsProto[methodName];

        let decoratedFunction = function () {
            originalFunction();
            console.log(message);
        }

        descriptor.value = decoratedFunction;
        return descriptor;
    }
}

class Speaker{
    //Llamando al decorador con diferente mensaje:
        @Auditable('OldN está obsoleto, debrá usar n')
        oldN() { console.log(10); }

        @Auditable('n fue ejecutado')
        n() { console.log(20);}
    }

    let speaker: Speaker = new Speaker();

    speaker.n();
    speaker.oldN();