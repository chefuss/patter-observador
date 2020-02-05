//Evento
var Sujeto = function(emisor) {
  this.sujeto = emisor;
  this.observadores = [];
};

Sujeto.prototype = {
  suscribir: function(observador) {
    this.observadores.push(observador);
  },
  notificar: function() {
    for (var i = 0; i < this.observadores.length; i++) {
      this.observadores[i](this.sujeto);
    }
  }
};
