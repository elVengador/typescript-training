(function(){
    const avenger=["thor","ironman","capitan"]
    // destructuramos las variables del arreglo 
    // de acuerdo al orden

    // las comas
    const [,,capitan]=avenger
    console.log(capitan);

    // tambien podemos destructurar en funciones
    const extraer = ([,,capitan]:string[])=>console.log(capitan);

    extraer(avenger)
})()