(function(){
    const avenger={
        nombre:"steve",
        clave:"Capitan America",
        poder:"Droga"
    }

    // destruturacion de obejtos no importa el orden
    const {nombre,clave,poder} = avenger
    // destruturacion en funciones
    const extraer = ({nombre,clave,poder}:any)=>{
        console.log(nombre);
        console.log(clave);
        console.log(poder);
    }
    extraer( avenger)

    
})()