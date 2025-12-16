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
    if (!diaIngresado) {
      let respuesta = prompt(
        "No me dijiste nada mi rey, ¿Preferís irte? (si / no)"
      );

      if (!respuesta) {
        alert("Chau amigo, nos vemos!");
        return null;
      }

      if (respuesta === "si" || respuesta ==="Si") {
        alert("Ok, nos vemos otro día");
        return null;
      } else if (respuesta === "no" || respuesta === "No") {
        alert("Te vuelvo a preguntar, no te preocupes.");
        continue;
      } else {
        alert("No entendí. Te vuelvo a preguntar el día.");
        continue;
      }
    }

    //Por si lo pone en mayusculas:
    diaIngresado = diaIngresado.toLocaleLowerCase();

    //probelmas con la stildes:
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
