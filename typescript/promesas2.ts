(()=>{
    const retirarDinero = (monto:number):Promise<number>=>{
        // devuelve una promesa
        // si todo sale bien devemos ejecutar resolve
        // si hay error, debemos ejecutar reject
        // el tipo de dato que retornara la promesa: es el tipo de dato que recive resolve

        let dineroActual = 1000
        console.log("hola Mundo");

        return new Promise((resolve,reject)=>{
            if(monto> dineroActual){
                reject("Ups, no hay direo suficiente")
            }else{
                dineroActual-=monto
                resolve(dineroActual)
            }
        })
    }

    // al ejecutar la promesa: 
    //  - si todo esta ok, se ejecutara then
    //  - si hay algun error se ejecutara catch
    retirarDinero(100)
        .then((msg)=>console.log(msg))
        .catch(console.warn)            // se puede pasar el parametro a cwa, de esta forma tambien
})()