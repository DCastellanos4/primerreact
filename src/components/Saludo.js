function saludo(props){
    //SOLAMENTE PODRÁ TENER UN RETURN POR COMPONENTE

    //AQUI PODEMOS DECLARAR VARIABLES SIN PROBLEMA
    var mensaje= "Hoy es viernes";
    //let nombre= props.nombre;
    //SINTAXIS DE DECONSTRUCCION
    const { nombre, edad} = props;
    //SINTAXIS DE DECONSTRUCCION


    return(<div>
        <h1>Hola mundo desde react</h1>
        <h2>Mi primer react!{mensaje}</h2>
        <h3>Bienvenido/a {nombre} y su edad es {props.edad}</h3>
        <hr></hr>
        </div>
    );
}
//EL COMPONENTE DEBERÁ EXPORTAR SIEMPRE SU CONTENIDO 
export default saludo;