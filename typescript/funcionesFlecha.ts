(function(){
    const hulk = {
        name:"Hulk",
        smash(){
            // la funcion anonima no crea su propio scope
            // popr lo tanto usa el this del scope de su invocador
            setTimeout(()=>{
                console.log(` ${this.name} smash!!`);
            },1000)
        }
    }

    hulk.smash()
})()