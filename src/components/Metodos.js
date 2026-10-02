function Metodos() {
// Para llamar a los metodos, debemos hacerlo con funciones lambda (anons) y la sintaxis es la siguiente:
// const miMetodo = () -> {
// Codigo del metodo
// }
const mostrarMensaje = () => {
    console.log("Mostrando mensaje");
}
const metodoRender = () => {
    console.log("Mostrando en render");
}
//Podemos recibir parametros dentro de los metodos en los parentesis de su declaracion
const metodoParams = (p1) => {
console.log("Probando el valor " + p1)
}
  return <div>
    <h2>Ejemplo de métodos React</h2>
    {metodoRender()}
    <button onClick={() => mostrarMensaje()}>Pulsar...</button>
    <button onClick={() => metodoParams("Hola")}>Pulsar para ver el param</button><hr></hr>
  </div>;
}
export default Metodos;
