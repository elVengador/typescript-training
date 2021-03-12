(function(){
    const activar = (   quien:string,               // parametro requerido
                        momento?:string,            // parametro opcional
                        señal:string="batiseñal"    // parametro opcional con valor de default
                        )=>{
        if(momento){
            console.log(` ${quien} activo la ${señal} ${momento}`);
        }else{
            console.log(` ${quien} activo la ${señal}`);
        }
        
    }
    activar("elVengador")
    activar("elVengador","señal secreta")
    activar("elVengador","señal secreta","en la tarde")
})()