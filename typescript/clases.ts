(()=>{

    class Avenger{
        // el constructor se inicializara al isntanciar la clase

        // el valor del parametro
        //  public: indica que se pude acceder desde afuera y dentro
        //  private: indica que se puede acceder solo desde dentro de la clase
        constructor(public nombre:string,
                    public equipo:string,
                    public nombreReal?:string,
                    public puedePelear:true=true,
                    public pelasGanadas:number=0){
            
        }
    }

    const antman = new Avenger("antman","capi")
    console.log(antman );

})()