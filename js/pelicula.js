'use strict'

//console.log('Arrancado');

class Pelicula {
  constructor() {
    //console.log('Se ha creado una película');
    //this es el objeto que ejecuta el código
    this.titulo = 'Tiroteo en Mississippi';
    this.pueblo = new Pueblo('TodoPolvo', 'muy polvoriento, en mitad del desierto de Arizona y a donde nadie quería llegar')
    this.narrador = new Narrador();
    this.paco = new PersonajeBueno('Paco');
    this.maria = new PersonajeBueno('María');
    this.morgan = new PersonajeMalo('Morgan');
    this.paco.arma = new Arma('revólver', 2, 6);
    this.morgan.arma = new Arma('revólver', 6, 6);
    this.iniciar();
  }
  iniciar(){
    //Introducción
    document.write(`<h1>${this.titulo}</h1>`);
    document.write(`<p>${this.pueblo.nombre} era un pueblo ${this.pueblo.descripcion}.</p>`);

    //Diálogo
    personajeHabla(this.narrador, `Era una soleada mañana.`);
    personajeHabla(this.paco, `Hola ${this.maria.nombre}. Hoy hace un día espléndido.`);
    personajeHabla(this.maria, `Hola ${this.paco.nombre}, la verdad que sí.`);
    personajeHabla(this.narrador, `Ambos se miraron un instante y siguieron su camino...`);
    personajeHabla(this.morgan, `Vaya pueblo más... polvoriento`);
    personajeHabla(this.morgan, `¡Eh, tú! ¡Pringao! Dame tu caballo y el sombrero.`);
    personajeHabla(this.paco, `¡Jamás!`);
    personajeHabla(this.morgan, `¿Eso quieres?`);

    //Disparos
    for (let i=1; i<3; i++)
      morganDispara(this.morgan);

    //Comprobar balas de morgan y paco
    comprobarBalas(this.morgan);
    comprobarBalas(this.paco);

    //Diálogo
    personajeHabla(this.narrador, `${this.morgan.nombre} dispara dos veces a sangre fría a ${this.paco.nombre}...`);

    //Condiciones
    if(random()){
      personajeHabla(this.paco, '¡¡¡Aaayyy!!!');
      personajeHabla(this.narrador, `Y este acaba muriendo.`);
    }else{
      personajeHabla(this.narrador, `Pero no le da porque va curando heridas con el aliento.`);
      //Disparos
      for (let i=1; i<5; i++)
        morganDispara(this.morgan);
      
      //Comprobar balas de morgan y paco
      comprobarBalas(this.morgan);
      comprobarBalas(this.paco);
    }
  }
}

class Pueblo {
  constructor(nombre, descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}

class Narrador {
  hablar(texto){
    document.write(`<p>- ${texto}</p>`);
  }
}

class Personaje {
  constructor(nombre) {
    this.nombre = nombre;
    this.arma = new Arma();
  }
}

class Arma {
  constructor(arma, balas, cargador) {
    this.arma = arma;
    this.balas = balas;
    this.cargador = cargador;
  }
  disparar(personaje){
    if(this.balas < 1)
    personajeHabla(personaje, '*click*');
    else personajeHabla(personaje, '¡¡PUM!!');
    this.balas--;
  }
  cargar(balas){
    for(let i=this.balas;i<=balas && i<=this.cargador;i++)
      this.balas++;
  }
}

class PersonajeBueno extends Personaje{
  hablar(texto){
    document.write(`<p class="bueno">- <span class="negrita">${this.nombre}</span>: ${texto}</p>`);
  }
}

class PersonajeMalo extends Personaje{
  hablar(texto){
    document.write(`<p class="malo">- <span class="negrita">${this.nombre}</span>: ${texto}</p>`);
  }
}

//Funciones

function personajeHabla(personaje, dialogo){
  personaje.hablar(dialogo);
}

function morganDispara(morgan){
  morgan.arma.disparar(morgan);
}

function random(){
  let aleatorio = Math.floor((Math.random() * 2) + 1);
  if(aleatorio==1)
    return true;
  return false;
}

function comprobarBalas(personaje){
  console.log(personaje.nombre + ' tiene ' + personaje.arma.balas + ' balas.');
}

new Pelicula();
