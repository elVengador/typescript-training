// import y export solo existe en sintaxis moderna de js,
// para que funciones este ejemplo se debe configurar webpack 
// para hacer uso de sus metodos de import y export
// de esta forma se podra importar y exportar
// en js antiguo

// webpack es importante

import {Avenger} from './avenger.class';

(()=>{

    const cap = new Avenger("steve royers")
    cap.show()

})()