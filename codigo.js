function saludoBienvenida() {
  alert(
    "Hola!, binevenido a la peluqueria de yoni. Mediante esta aplicación vamos a poder darte un turno."
  );
}
saludoBienvenida();

function elegirDia() {
  const diasValidos = [
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];

  let diaIngresado;

  while (true) {
    diaIngresado = prompt(
      "¿Qué día quieres cortarte el pelo? (Lunes, Martes, Miércoles, Jueves, Viernes o Sábado)"
    );

    //problema si no ingresa nada
    if (diaIngresado === null) {
      let confirmarSalida = confirm(
        "¿Realmente quieres salir de la reserva de turnos?"
      );
      if (confirmarSalida) {
        alert("Chau amigo, nos vimooo!");
        return null; 
      } else {
        alert("Ok, te pregunto de nuevo mi rey!");
        continue; 
      }
    }

    // Si el usuario ingresa un string vacío
    if (diaIngresado.trim() === "") {
      alert("No ingresaste ningún día. Por favor, intentalo de nuevo mamerto");
      continue;
    }

    //Por si lo pone en mayusculas:
    diaIngresado = diaIngresado.toLocaleLowerCase();

    //probelmas con la tildes:
    if (diaIngresado === "miercoles") diaIngresado = "miércoles";
    if (diaIngresado === "sabado") diaIngresado = "sábado";

    //problema si es erroneo el texto
    if (!diasValidos.includes(diaIngresado)) {
      alert("Ese dia no existe, lo siento. Prueba de lunes a sabado");
      continue;
    }
    alert("perfecto, estonces te doy " + diaIngresado);
    break;
  }
}
elegirDia();

//definición de los Horarios

function generarTurnos() {
  const dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sabado"];
  const horarios = ["10:00", "11:00", "12:00", "13:00", "14:00"];
  let turno = [];

  dias.forEach((dia) => {
    horarios.forEach((hora) => {
      turno.push(`${dia} a las ${hora}`);
    });
  });

  return turno;
}
