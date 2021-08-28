function ejercicio1() {
  var horas = document.getElementById("horasLaboradas").value;
  var salario = document.getElementById("salario").value;
  var total = 0;
  if (horas <= 40) {
    total = parseFloat(horas) * parseFloat(salario);
    alert("El salario total es: " + total);
  } else {
    if (horas > 40) {
      var horasExtras = parseFloat(horas - 40);
      var incremento = horasExtras * parseFloat(salario * 0.5);
      total =
        parseFloat((horas - horasExtras) * salario) +
        parseFloat(incremento) +
        salario * horasExtras;
      alert("El salario total es: " + total);
    }
  }
}

function ejercicio2() {
  var salario = document.getElementById("salario2").value;
  var total = 0;
  if (salario <= 1000) {
    total = salario - Math.floor(salario * 10) / 100;
    alert("El salario total es: " + total);
  } else {
    if (salario > 1000 && salario <= 2000) {
      total = salario - Math.floor(salario * 5) / 100;
      alert("El salario total es: " + total);
    } else {
      if (salario > 2000) {
        total = salario - Math.floor(salario * 3) / 100;
        alert("El salario total es: " + total);
      }
    }
  }
}

function ejercicio3() {
  var cantidad = document.getElementById("cantidad").value;
  var descuento = 0;
  if (cantidad > 100) {
    descuento = Math.floor(cantidad * 10) / 100;
    alert("El total a pagar es: " + descuento);
  } else if (cantidad < 100) {
    descuento = Math.floor(cantidad * 2) / 100;
    alert("El total a pagar es: " + descuento);
  }
}

function ejercicio4() {
  var segundos = document.getElementById("segundos").value;
  var segundos_faltantes;
  var total = 0;
  var vari;
  total = segundos / 60;
  vari = total.toFixed(2);
  vari = Math.trunc(vari) + 0.6;
  segundos_faltantes = (vari - total) * 100;
  alert("Los minutos totales son: " + total.toFixed(2));
  alert("Los segundos faltantes son: " + segundos_faltantes.toFixed(0));
}

function ejercicio5() {
  var min = document.getElementById("min").value;
  var horas = min / 60;
  var dias = min / 1440;
  alert("minutos: " + min + "\nhoras: " + horas + "\ndias: " + dias);
}

function ejercicio6() {
  var horast = document.getElementById("horast").value;
  var tarifa = document.getElementById("tarifa").value;
  var salario = 0;
  salario = tarifa * horast;
  alert("El salario es: " + salario);
}

function ejercicio7() {
  var costoArticulo = document.getElementById("costoArticulo").value;
  var numArticulo = document.getElementById("numArticulo").value;
  var total = costoArticulo * numArticulo;
  var precioNeto = total + Math.floor(total * 15) / 100;

  if (precioNeto > 50) {
    total -= Math.floor(precioNeto * 5) / 100;
    alert("El total a pagar es: " + total);
  } else if (precioNeto <= 50) {
    alert("El total a pagar es: " + precioNeto);
  }
}

function ejercicio8() {
  var edad = document.getElementById("edad").value;

  if (edad >= 0 && edad <= 10) {
    alert("Niño");
  } else {
    if (edad >= 11 && edad <= 14) {
      alert("Puber");
    } else {
      if (edad >= 15 && edad <= 18) {
        alert("Adolecente");
      } else {
        if (edad >= 19 && edad <= 25) {
          alert("Joven");
        } else {
          if (edad >= 26 && edad <= 65) {
            alert("Adulto");
          } else {
            if (edad > 65) {
              alert("Anciano");
            }
          }
        }
      }
    }
  }
}

function ejercicio9() {
  var hoy = new Date();
  var hora = hoy.getHours();
  if (hora >= 10 && hora <= 12) {
    alert("dibujos animados");
  } else if (hora >= 13 && hora <= 16) {
    alert("tele serie");
  } else if (hora >= 16 && hora <= 18) {
    alert("novelas repetidas");
  } else if (hora >= 18 && hora <= 22) {
    alert("dibujos animados");
  } else if (hora >= 22 && hora <= 23) {
    alert("noticiero");
  }
}

function ejercicio10() {
  var l1 = document.getElementById("lado1").value;
  var l2 = document.getElementById("lado2").value;
  var l3 = document.getElementById("lado3").value;

  if (l1 == l2 && l2 == l3) {
    alert("El triangulo es Equilatero");
  } else {
    if (l1 == l2 || l1 == l3 || l2 == l3) {
      alert("El triangulo es Isoseles");
    } else {
      if (l1 != l2 || l1 != l3 || l3 != l2) {
        alert("El triangulo es Escaleno");
      }
    }
  }
}

function ejercicio11() {
  var sueldoMensual = document.getElementById("sueldoMensual").value;
  var montoVenta = document.getElementById("montoVenta").value;
  var total = 0;
  if (montoVenta >= 10000) {
    total =
      parseFloat(sueldoMensual) + parseFloat(Math.floor(montoVenta * 15) / 100);
    alert("El sueldo total es: " + total);
  } else if (montoVenta >= 5000 && montoVenta < 10000) {
    total =
      parseFloat(sueldoMensual) + parseFloat(Math.floor(montoVenta * 5) / 100);
    alert("El sueldo total es: " + total);
  } else if (montoVenta < 5000) {
    total = sueldoMensual;
    alert("El sueldo total es: " + total);
  }
}

function ejercicio12() {
  var c1 = document.getElementById("c1").value;
  var c2 = document.getElementById("c2").value;
  var c3 = document.getElementById("c3").value;
  var c4 = document.getElementById("c4").value;
  var c5 = document.getElementById("c5").value;

  if (
    c1 === "TIENES" &&
    c2 === "QUE SER" &&
    c3 === "INVITADO" &&
    c4 === "PARA" &&
    c5 === "INGRESAR"
  ) {
    alert("BIENVENIDO A LA FIESTA");
  } else {
    alert("TE EQUIVOCASTE DE FIESTA");
  }
}

function ejercicio13() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  var disc = parseFloat(b * b - 4 * a * c);
  if (disc < 0) {
    alert("existen raices imaginarias");
  } else {
    var x1 = -b - Math.sqrt(disc) / (2 * a);
    var x2 = -b + Math.sqrt(disc) / (2 * a);
    alert("X1= " + x1 + "\nX2= " + x2);
  }
}

function ejercicio14() {
  var monto = document.getElementById("monto").value;
  total = 0;

  if (monto >= 500) {
    total = monto - Math.floor(monto * 30) / 100;
    alert("El total a pagar es: " + total);
  } else {
    if (monto < 500 && monto >= 200) {
      total = monto - Math.floor(monto * 20) / 100;
      alert("El total a pagar es: " + total);
    } else {
      if (monto < 200 && monto >= 100) {
        total = monto - Math.floor(monto * 10) / 100;
        alert("El total a pagar es: " + total);
      }
    }
  }
}

function ejercicio15() {
  const arregloNum = [];
  do {
    var num = window.prompt(
      "Escribe un número, cuando desees parar solo escribe un numero negativo."
    );
    if (num >= 0) {
      arregloNum.push(num);
    }
  } while (num >= 0);
  var opcion = window.prompt(
    "Escoge una opcion:\n" +
      "1.- Menores a 15\n" +
      "2.-Mayores a 50\n" +
      "3.-Entre 25 y 50"
  );
  switch (opcion) {
    case "1":
      var aux = arregloNum.filter((menor) => menor <= 15);
      alert(aux);
      break;
    case "2":
      var aux = arregloNum.filter((mayor) => mayor > 50);
      alert(aux);
      break;
    case "3":
      var aux = arregloNum.filter((entre) => entre >= 25 && entre <= 50);
      alert(aux);
      break;
    default:
      alert("Esa opción no esta disponible");
  }
}

function ejercicio16() {
  var num = document.getElementById("num").value;
  var num2 = num;
  var total = 0;

  for (var i = 1; i <= num2; i++) {
    total += i;
  }
  alert("La suma de los " + num + " primeros numeros es: " + total);
}

function ejercicio17() {
  var num = 1;
  var total = 0;
  do {
    var horas = window.prompt(
      "ingresa las horas trabajadas del trabajador NO." + num
    );
    var salario = window.prompt("ingresa el salario del trabajador NO." + num);
    if (horas > 40) {
      var horasExtras = parseFloat(horas - 40);
      var incremento = (horasExtras * Math.floor(salario * 50)) / 100;
      total +=
        parseFloat((horas - horasExtras) * salario) + parseFloat(incremento);
      //alert("El total a pagar es: "+ total);
    } else {
      total += parseFloat(horas) * parseFloat(salario);
      //alert("El total a pagar es: "+total);
    }
    num++;
  } while (num <= 200);
  alert("El total a pagar es: " + total);
}

function ejercicio18() {
  const arregloNum = [];
  do {
    var num = window.prompt(
      "Escribe las calificaciones, cuando termines pon un numero negativo "
    );
    if (num >= 0) {
      arregloNum.push(num);
    }
  } while (num >= 0);
  alert(arregloNum);
  do {
    var opcion = window.prompt(
      "Escoge una opcion:\n" +
        "1.- Materias Reprobadas\n" +
        "2.-Materias Aprobadas\n" +
        "3.-Promedio calificaciones\n" +
        "4.-Promedio calificaciones reprobadas y aprobadas\n" +
        "5.-Salir"
    );
    switch (opcion) {
      case "1":
        var aux = arregloNum.filter((menor) => menor <= 5);
        alert("La cantidad de calificaciones reprobadas es: " + aux.length);
        break;
      case "2":
        var aux = arregloNum.filter((mayor) => mayor >= 6);
        alert("La cantidad de calificaciones aprobadas es: " + aux.length);
        break;
      case "3":
        var suma = 0;
        var promedio = 0;
        for (var i = 0; i < arregloNum.length; i++) {
          suma += parseInt(arregloNum[i]);
          promedio = suma / arregloNum.length;
        }
        alert("El promedio de las calificaciones: " + promedio);
        break;
      case "4":
        var suma1 = 0;
        var promedio1 = 0;
        var suma2 = 0;
        var promedio2 = 0;

        var aux1 = arregloNum.filter((menor) => menor <= 5);
        for (var i = 0; i < aux1.length; i++) {
          suma1 += parseInt(aux1[i]);
          promedio1 = suma1 / aux1.length;
        }
        var aux2 = arregloNum.filter((mayor) => mayor >= 6);
        for (var i = 0; i < aux2.length; i++) {
          suma2 += parseInt(aux2[i]);
          promedio2 = suma2 / aux2.length;
        }
        alert(
          "El promedio de las calificaciones reprobadas es: " +
            promedio1 +
            "\n" +
            "El promedio de las calificaciones aprobadas es: " +
            promedio2
        );
        break;

      case "5":
        break;

      default:
        alert("Esa opción no esta disponible");
    }
  } while ((opcion = 5));
}

function ejercicio19() {
  var numero = document.getElementById("numero").value;
  var total = 0;
  numero.split("").forEach((numero) => (total += parseInt(numero)));
  alert("El resultado es: " + total);
}

function ejercicio20() {
  const arregloNum = [];
  const pares = [];
  const impares = [];
  const positivos = [];
  const negativos = [];

  for (var i = 1; i <= 50; i++) {
    var num = window.prompt("Escribe un numero " + i);
    arregloNum.push(num);
  }

  for (var i = 0; i < arregloNum.length; i++) {
    if (arregloNum[i] % 2 == 0) {
      pares.push(arregloNum[i]);
    } else {
      impares.push(arregloNum[i]);
    }
  }

  for (var i = 0; i < arregloNum.length; i++) {
    if (arregloNum[i] > 0) {
      positivos.push(arregloNum[i]);
    } else {
      negativos.push(arregloNum[i]);
    }
  }

  alert(
    "La cantidad de numeros pares es: " +
      pares.length +
      "\n" +
      "La cantidad de numeros impares es: " +
      impares.length +
      "\n" +
      "La cantidad de numeros positivos es: " +
      positivos.length +
      "\n" +
      "La cantidad de numeros negativos es: " +
      negativos.length
  );
}

function ejercicio21() {
  var numFactorial = document.getElementById("numFactorial").value;
  var factorial = 1;
  if (numFactorial === 1) {
    alert("El factorial de:" + numFactorial + " es: " + numFactorial);
  } else {
    for (var i = 1; i <= numFactorial; i++) {
      factorial = factorial * i;
    }
    alert("El factorial de: " + numFactorial + " es: " + factorial);
  }
}

function ejercicio22() {
  const arregloNum = [];
  var suma;
  var promedio;

  for (var i = 1; i <= 100; i++) {
    var num = window.prompt("Escribe un numero " + i);
    arregloNum.push(num);
  }

  for (var i = 0; i < arregloNum.length; i++) {
    suma += parseInt(arregloNum[i]);
    promedio = suma / arregloNum.length;
  }
  alert("La media de los 100 numeros ingresados es: " + promedio);
}

function ejercicio23() {
  var sumatoria = 0;
  var producto = 1;

  for (var i = 20; i <= 400; i++) {
    if (i % 2 === 0) {
      sumatoria += i;
      producto *= i;
    }
  }
  alert("sumatoria: " + sumatoria + "\nproducto: " + producto);
}

function ejercicio24() {
  do {
    var letra = window.prompt("Introduzca una letra ");
  } while (
    letra != "a" &&
    letra != "e" &&
    letra != "i" &&
    letra != "o" &&
    letra != "u"
  );
  alert("Usted ingreso la vocal: " + letra);
}

function ejercicio25() {
  const num = [];
  var max = 5000;
  var min = 500;
  for (var i = 1; i <= 2500; i++) {
    num.push(Math.floor(Math.random() * (max - min)) + min);
  }
  alert("El sueldo minimo es:" + parseInt(Math.min.apply(null, num)));
  alert("El sueldo minimo es:" + parseInt(Math.max.apply(null, num)));
}

function ejercicio26() {
  var horasdiurnas;
  var horasnocturnas;
  var tarifadiurna = 10;
  var tarifanocturna = 20;
  var sumahoras;
  var salario;
  do {
    var horasdiurnas = window.prompt(
      "Introduzca la cantidad de horas diurnas trabajadas en el mes "
    );
    var horasnocturnas = window.prompt(
      "Introduzca la cantidad de horas nocturnas trabajadas en el mes"
    );

    salario = horasdiurnas * tarifadiurna + horasnocturnas * tarifanocturna;
    alert("El salario toal a pagar es: " + salario);
    sumahoras = horasdiurnas + horasnocturnas;
    if (sumahoras > 15 && sumahoras > 0) {
      alert("Siga siendo buen trabajador");
    } else {
      alert("Usted debe ser despedido, no trabaja suficiente !!");
    }
  } while (sumahoras > 0);
  alert("El trabajador no laboro en el mes, despidalo !!");
}

function ejercicio27() {
  var tarifa = 100;
  var total = 100;
  var horasTrabajadas = 0;
  var numTrabajadores = 0;
  do {
    horasTrabajadas = parseInt(
      window.prompt(
        "Ingresa las horas trabajadas, si requieres terminar la operacion coloca un 0"
      )
    );
    total = tarifa * horasTrabajadas;
    if (total >= 500) {
      numTrabajadores++;
    }
  } while (horasTrabajadas > 0);
  alert(
    "numero de trabajadores con salario mayor o igual a 500: " + numTrabajadores
  );
}

function ejercicio28() {
  const personas = [];
  const m_mayores = [];
  const m_menores = [];
  const f_mayores = [];
  const f_menores = [];

  for (var i = 1; i <= 50; i++) {
    var edad1 = window.prompt("Escribe la edad de la persona " + i);
    var sexo1 = window.prompt("Escribe el sexo de la persona " + i + " (f/m)");
    var per = {
      edad: edad1,
      sexo: sexo1,
    };
    personas.push(per);
    alert(personas);
  }

  for (var i = 0; i < personas.length; i++) {
    if (personas[i].edad >= 18 && personas[i].sexo === "m") {
      m_mayores.push(personas[i]);
    } else {
      if (personas[i].edad < 18 && personas[i].sexo === "m") {
        m_menores.push(personas[i]);
      } else {
        if (personas[i].edad >= 18 && personas[i].sexo === "f") {
          f_mayores.push(personas[i]);
        } else {
          if (personas[i].edad < 18 && personas[i].sexo === "f") {
            f_menores.push(personas[i]);
          }
        }
      }
    }
  }

  alert(
    "La cantidad de masculinos mayores es: " +
      m_mayores.length +
      "\n" +
      "La cantidad de masculinos menores es: " +
      m_menores.length +
      "\n" +
      "La cantidad de femeninas mayores es: " +
      f_mayores.length +
      "\n" +
      "La cantidad de femeninas menores es: " +
      f_menores.length +
      "\n"
  );
}

function ejercicio29() {
  var numPar = 0;
  var numImpar = 0;
  do {
    var num = parseInt(
      window.prompt(
        "Ingresa un numero, si requieres terminar la operacion coloca un 0"
      )
    );

    if (num === 0) {
      break;
    } else if (num % 2 === 0) {
      numPar++;
    } else {
      numImpar++;
    }
  } while (num > 0);
  alert(
    "La cantidad de números pares es: " +
      numPar +
      "\n la cantidad de numeros impares es: " +
      numImpar
  );
}
