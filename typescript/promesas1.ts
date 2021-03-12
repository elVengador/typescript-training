(()=>{
    console.log("inicio");
    const prom1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("se termino el timeout")
        },1000)
    })

    prom1
        .then((msg)=>console.log(msg))
        .catch((err)=>console.warn(err))

    console.log("fin");
})()