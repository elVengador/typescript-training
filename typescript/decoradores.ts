
(()=>{
    function imprimir(constructorClase:Function){
        console.log(constructorClase);
    }

    // definimos el decorador: para poder añadirle mas funcionalidades
    @imprimir
    class Avenger{
        constructor(public name:string){}

        show(){
            console.log("the name is:",this.name);
        }
    }

})()