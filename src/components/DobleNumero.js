function DobleNumero() {
  const ejecutarDobleNumero = (n1) => {
    let doble = n1 * 2;
    console.log(doble);
  };
  let mensaje = "Hoy es viernes";
  //Aunque se cambie el mensaje no realiza el render de nuevo
  //Para poder modificar los datos del render y que haga un seguimiento lo haremos mediante estados
  const cambiarMensaje = () => {
    console.log("Antes del cambio:" + mensaje);
    console.log();
    mensaje = "Mensaje cambiado";
    console.log();
    console.log("Despues del cambio:" + mensaje);
  };
  //ESTILOS
  //En react las llamadas a las clases de CSS es propia
  //Al aplicar los estilos en el codigo en lugar de utilizar la palabra class, se utiliza la palabra
  //className
  //tambien se puede escribir CSS en formato JSON
  var estilo = {
    color: "red",
    backgroundColor: "yellow"
  }

  // y la tercera opcion es utilizar estilos inline
  return (
    <div>
      <h1 style={estilo}>Métodos doble número</h1>
      <button onClick={() => ejecutarDobleNumero(14)}>
        Click para ver el doble
      </button>
      <button onClick={() => cambiarMensaje()}>Cambiar el mensaje</button>
    </div>
  );
}
export default DobleNumero;
