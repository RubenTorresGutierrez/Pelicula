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
    document.write(`<h1>${this.titulo}</h1>`);
    document.write(`<p>${this.pueblo.nombre} era un pueblo ${this.pueblo.descripcion}.`);
    this.narrador.hablar(`Era una soleada mañana.`);
    this.paco.hablar(`Hola ${this.maria.nombre}. Hoy hace un día espléndido.`);
    this.maria.hablar(`Hola ${this.paco.nombre}, la verdad que sí.`);
    this.narrador.hablar(`Ambos se miraron un instante y siguieron su camino...`);
    this.morgan.hablar(`Vaya pueblo más... polvoriento`);
    this.morgan.hablar(`¡Eh, tú! ¡Pringao! Dame tu caballo y el sombrero.`);
    this.paco.hablar(`¡Jamás!`);
    this.morgan.hablar(`¿Eso quieres?`);
    for (let i=1; i<3; i++)
      this.morgan.arma.disparar();
    console.log(this.morgan.arma.balas);
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
  disparar(){
    this.balas--;
    if(this.balas < 1)
      document.write('<p>*click*</p>');
    else document.write('<p>¡¡PUM!!</p>');
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
    document.write(`<p class="malo">- <span class="negrita">${this.nombre}</span>: GRRRRR... ${texto}</p>`);
  }
}

new Pelicula();
