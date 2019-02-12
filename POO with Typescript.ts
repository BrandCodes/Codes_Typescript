class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);

//////////////////////////////////////////////////////////////
-Clase speaker

class Speaker{
    hi(nombre: string) {
        console.log(nombre);
    }
}

let speaker: Speaker = new Speaker();
speaker.hi("Moguwi");


//////////////////////////////////////////////////////////////
-Clase Video: (con métodos)

class Video { 
    title: string; 
    constructor(title:string) { //Constructor
        this.title = title;
    }
    //Declarando métodos:
    printTitle() { console.log(this.title); }//método 1

    changeTitle(title: string) { this.title = title; }//metodo 2

    getTitle(): string { return this.title; }//Metodo 3
}

//Mi Ojeto:
let miVideo: Video = new Video("mensaje de mi constructor!");

//Invocando mis métodos:
miVideo.printTitle();
miVideo.changeTitle("Título de mi método con parámetro");
console.log(miVideo.getTitle());




//////////////////////////////////////////////////////////////
-Clase con Herencia:


class Video {   //Clase Base
    title: string; 
    constructor(title:string) {
        this.title = title;
    }
    play() { console.log("Playing"); }
    stop() { console.log("Stopped"); }
}

class YouTubeVideo extends Video{ //Indica que hereda de la Clase Base
    constructor(title: string) {
        super(title);
        console.log("Inicializando Youtube");
    }
    play() {
        super.play();   //Llama al método play de la clase padre.
        console.log("Playing a youtube video");
    }
}

let miVideo: YouTubeVideo = new YouTubeVideo("mensaje de mi constructor!");

miVideo.play();


//////////////////////////////////////////////////////////////
- Clase: Variables y metodos estáticos:

class Requestor{
    static url: string = "www.ejemplo.com";   //Variable estática
    //Métodos estáticos:
    static getCourses() {
        console.log(`${Requestor.url}/cursos`);
    }
    static getArticles() {
        console.log(`${Requestor.url}/artículos`);
    }
}

Requestor.getArticles();


//////////////////////////////////////////////////////////////
- Clase: Haciendo uso de Interface


interface Asset{    //interface 
    x, y, width, height: number;    //props
    getCoords(): string;
}

class Hero implements Asset { //clase implementando la interfaz
    //Los atributos deben ser los mismos de la interface
    x: number;
    y: number;
    width: number;
    height: number;

    getCoords(): string{
        return "";
    }
}

//let hero: Asset = new Hero();

class Bullet implements Asset { //
    //
    x: number;
    y: number;
    width: number;
    height: number;

    getCoords(): string{
        return "";
    }
}

class Enemy implements Asset { //
    //
    x: number;
    y: number;
    width: number;
    height: number;

    getCoords(): string{
        return "";
    }
}

//class SpaceBullet extends Bullet { }     ó:
class SpaceBullet extends Bullet implements Asset{ }

//nuevo obj.
let spaceBullet: Asset = new SpaceBullet();

class Collisions {
    static check(obj: Asset, object2: Asset) {
        
    }
}


//////////////////////////////////////////////////////////////
Clase Abstracta



abstract class Asset{
    x: number;
    y: number;
    width: number;
    height: number;
    getCoords(): string { return `${this.x},${this.y}` };

    //método abstracto
    abstract move(speed: number): boolean;
}


class Hero extends Asset{
    move(speed: number) { return true}
}
