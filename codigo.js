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
  return diaIngresado;
}
function elegirHorario(dia) {
  const horariosValidos = ["10", "11", "12", "13", "14"];
  let horarioIngresado;

  while (true) {
    horarioIngresado = prompt(
      `Perfecto, entonces te doy turno el ${dia}. ⏰ ¿A qué hora preferís, amigo?\n\n10, 11, 12, 13 o 14 hs`
    );

    // Por si acaso respuestas null o vacías
    if (!horarioIngresado) {
      let respuesta = prompt(
        "No me dijiste el horario, ¿preferís irte? (si / no)"
      );

      if (!respuesta) {
        alert("Chau amigo, nos vemos!");
        return null;
      }

      // Minúsculas y espacios en blanco
      respuesta = respuesta.trim().toLowerCase();

      if (respuesta === "si" || respuesta === "sí") {
        alert("Ok, nos vemos otro día");
        return null;
      } else if (respuesta === "no") {
        alert("Te vuelvo a preguntar el horario, no te preocupes.");
        continue;
      } else {
        alert("No entendí. Te vuelvo a preguntar el horario.");
        continue;
      }
    }
    horarioIngresado = horarioIngresado.trim();

    // Validar si el horario es correcto
    if (!horariosValidos.includes(horarioIngresado)) {
      alert("Ese horario no está disponible. Elegí entre 10, 11, 12, 13 o 14.");
      continue;
    }

    break;
  }

  return horarioIngresado + ":00 hs";
}

function confirmarTurno(dia, hora) {
  while (true) {
    let respuesta = prompt(
      `Tu turno sería el ${dia} a las ${hora}.\n¿Te parece bien? (si / no)`
    );

    if (!respuesta) {
      alert("Necesito que me digas 'si' o 'no', rey.");
      continue;
    }

    respuesta = respuesta.toLowerCase();

    if (respuesta === "si" || respuesta === "sí") {
      alert("¡Perfecto! Tu turno quedó reservado. ¡Te esperamos!");
      return true;
    }

    if (respuesta === "no") {
      alert("No hay problema, volvemos a elegir el turno.");
      return false;
    }

    alert("No entendí. Escribí solamente 'si' o 'no'.");
  }
}

//funcion completa

function reservarTurno() {
  saludoBienvenida();

  while (true) {
    const dia = elegirDia();
    
    // Si el usuario se quiso ir al elegir día
    if (dia === null) {
      break;
    }

    const hora = elegirHorario(dia);
    
    // Si el usuario se quiso ir al elegir horario
    if (hora === null) {
      break;
    }

    const confirmado = confirmarTurno(dia, hora);
    
    if (confirmado) {
      break;
    }
  }
}

// Ejecución


reservarTurno();

