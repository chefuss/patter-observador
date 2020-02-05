# Patrón observador.
## Objetivos.
Tenemos dos formas de notificar a nuestras vistas de los cambios.
La primera estará a cargo del "modelo", ya que éste además de tratar con los datos se encargará de notificar a cada vista, y llevar el control de los observadores.

En el segundo caso, tendremos una clase aparte que se encargue del manejo de las notificaciones y suscripciones, y notificará a través de un evento.
