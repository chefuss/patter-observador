function Modelo() {
  this.number = 0;
  this.observadores = [];
}

Modelo.prototype = {
  agregarObservador: function(observador) {
    this.observadores.push(observador)
  },
  notificar: function() {
    var contexto = this;
    this.observadores.forEach(function(observador) {
      observador.actualizar(contexto);
    });
  },
  incrementarValor: function() {
    this.number++;
    this.notificar();
  }
}

function Observador(id) {
  this.elemento = document.getElementById(id);
}
Observador.prototype = {
  actualizar: function(modelo) {
    if (this.elemento) {
      this.elemento.innerHTML = modelo.number;
    }
  }
}

var modelo = new Modelo();
var observador1 = new Observador('observer1', modelo);
var observador2 = new Observador('observer2', modelo);

modelo.agregarObservador(observador1);
modelo.agregarObservador(observador2);

window.setInterval(function() {
  modelo.incrementarValor();
}, 2500);