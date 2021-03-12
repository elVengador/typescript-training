
(()=>{

    // tipado del rotorno de una funcion

    // tipado para valores se conocen
    //      typescript puede intuir en estos escenarios
    const sumar = (a:number,b:number)=>a+b;
    const nombre = () => "hola Jimy"

    // typescript no puede intuir
    // entonces le definimos el valor que devolvera la promesa
    const obtenerSalario = ():Promise<string> => {
        return new Promise((resolve,reject)=> resolve("jimy"))
    }

})()