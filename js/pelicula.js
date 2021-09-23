'use strict'

//console.log('Arrancado');

class Pelicula {
  constructor() {
    //console.log('Se ha creado una película');
    //this es el objeto que ejecuta el código
    this.titulo = 'Tiroteo en Mississippi';
    this.pueblo = new Pueblo('TodoPolvo', 'muy polvoriento, en mitad del desierto de Arizona y a donde nadie quería llegar');
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
      personajeDispara(this.morgan);

    //Diálogo
    personajeHabla(this.narrador, `${this.morgan.nombre} dispara dos veces a sangre fría a ${this.paco.nombre}...`);

    //Condiciones
    if(random()){
      personajeHabla(this.paco, '¡¡¡Aaayyy!!!');
      personajeHabla(this.narrador, `Y este acaba muriendo.`);
      personajeHabla(this.narrador, `Y finalmente, ${this.maria.nombre} huye desesperadamente para no acabar igual, y ${this.morgan.nombre} gana la batalla.`);
    }else{
      personajeHabla(this.narrador, `Pero no le da porque va curando heridas con el aliento.`);
      //Disparos
      for (let i=1; i<4; i++)
        personajeDispara(this.morgan);
      //Diálogo
      personajeHabla(this.morgan, `${this.paco.nombre}, voy a por tiiii...`);
      personajeHabla(this.maria, `¡¡¡Huye ${this.paco.nombre}, huyee!!!`);
      //Disparo
      personajeDispara(this.morgan);
      if(random()){
        personajeHabla(this.maria, '¡¡¡Aaayyy!!!');
        personajeHabla(this.narrador, `${this.morgan.nombre} dispara a ${this.maria.nombre}, y esta muere...`);
        personajeHabla(this.paco, `!!!NOOOOOO¡¡¡`);
        personajeHabla(this.narrador, `${this.paco.nombre}, furioso, saca su ${this.paco.arma.arma}, y dispara dos veces a ${this.morgan.nombre}.`);
        //Disparos
        for(let i=1;i<3;i++)
          personajeDispara(this.paco);
        if(random()){
          personajeHabla(this.morgan, '¡¡¡Aaayyy!!!');
          personajeHabla(this.narrador, `Y finalmente, ${this.paco.nombre}, mata a ${this.morgan.nombre} y entierra a ${this.maria.nombre} con sus familiares.`);
        }else{
          personajeHabla(this.narrador, `${this.morgan.nombre}, no recibe ninguna bala, y procede a disparar a ${this.paco.nombre}, cuando de repente...`);
          personajeDispara(this.morgan);
          personajeHabla(this.morgan, `¿Eh?`);
          for(let i=1;i<3;i++)
            personajeDispara(this.morgan);
          personajeHabla(this.narrador, `Ambos se quedan sin balas, pero casualmente hay una bala entre ellos dos.`);
          if(random()){
            cargarBalas(1, this.morgan);
            personajeDispara(this.morgan);
            personajeHabla(this.paco, '¡¡¡Aaayyy!!!');
            personajeHabla(this.narrador, `${this.morgan.nombre} coge la última bala y carga su ${this.morgan.arma.arma}, para acabar matando a ${this.paco.nombre}.`);
            personajeHabla(this.narrador, `Finalmente, ${this.morgan.nombre}, acaba con todos...`);
          }else{
            cargarBalas(1, this.paco);
            personajeDispara(this.paco);
            personajeHabla(this.morgan, '¡¡¡Aaayyy!!!');
            personajeHabla(this.narrador, `${this.paco.nombre} coge la última bala y carga su ${this.paco.arma.arma}, para acabar matando a ${this.morgan.nombre}.`);
            personajeHabla(this.narrador, `Finalmente, ${this.paco.nombre}, acaba con ${this.morgan.nombre} y entierra a ${this.maria.nombre} con sus familiares.`);
          }
        }
      }else{
        personajeHabla(this.narrador, `${this.morgan.nombre} sigue sin darles, porque va mas borracho que un cuñao en un bautizo...`);
        personajeHabla(this.narrador, `Y finalmente, tanto ${this.paco.nombre} como ${this.maria.nombre} consiguen huir del pueblo.`)
      }
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
    document.write(`<p class="narrador">- ${texto}</p>`);
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
    if(this.balas > 0)
      this.balas--;
  }
  cargar(balas){
    for(let i=this.balas;i<balas && i<this.cargador;i++)
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

function personajeDispara(personaje){
  personaje.arma.disparar(personaje);
}

function cargarBalas(balas, personaje){
  personaje.arma.cargar(balas);
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
