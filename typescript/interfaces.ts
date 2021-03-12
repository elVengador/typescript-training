(()=>{

    interface Xmen{
        nombre:string;
        edad:number
        poder?:[string]
    }
    
    // xmen varible needs nombre and edad
    const enviarMission = (xmen:Xmen)=>{
        console.log(`${xmen.nombre} go o the mision`);
    }

    const wolvering:Xmen = {
        nombre:"Logan",
        edad:60
    }

    enviarMission(wolvering)

})()