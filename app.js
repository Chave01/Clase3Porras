function datos () {
    let cantidad = Number(prompt ('Cuantas bolsas de cafe queres?'))
    let precio = 2500
    let operacion = precio * cantidad 
  
    alert('El precio final es de' + " " + operacion);
    seguircomprando = confirm ('Queres seguir comprando?');

}
datos ()
