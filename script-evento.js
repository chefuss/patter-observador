function Modelo() {
  this.number = 0;
  this.incrementado = new Sujeto(this);
}

Modelo.prototype = {
  incrementarValor: function() {
    this.number++;
    console.log('notificar');
    this.incrementado.notificar();
  }
};

function Observador(id, modelo) {
  this.elemento = document.getElementById(id);
  this.modelo = modelo;
  var contexto = this;
  this.modelo.incrementado.suscribir(function() {
    contexto.actualizar();
  })
}
Observador.prototype = {
  actualizar: function() {
    if (this.elemento) {
      this.elemento.innerHTML = this.modelo.number;
    }
  }
};

var modelo = new Modelo();
var observador1 = new Observador('observer1', modelo);
var observador2 = new Observador('observer2', modelo);

window.setInterval(function() {
  modelo.incrementarValor();
}, 2500);

// document.querySelector('button').addEventListener('click', function() {
//   modelo.incrementarValor();
// })