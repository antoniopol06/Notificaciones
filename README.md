## SISTEMA DE NOTIFICACIONES

###Sistema de notificaciones como libreria para HTML
* HTML
```
<div id="notifications">

```
* JS
```
var n = Notifications({canUrl: true, url: "http://www.twitter.com/antoniopol06"}); // ejemplo de setear algunas opciones
n.createNotification(title, text);
```

###Sistema de notificaciones como módulo de AngularJS
* HTML
```
<div id="notifications">

```
* JS
```
var app = angular.module("app", ["ngNotifications"]);

app.controller("IndexController", function($scope, $notification){
  $notification.set({image: true, removable: false});//ejemplo de setear algunas opciones
  $notification.create("hola", "Esto es una prueba");
});

```

###SETTINGS
```
settings = {
        position:"top-right" //posicion absoluta pantalla, valores: "top-right", "top-left", "bottom-left", "bottom-right"
        backgroundColor : "#333", // color del fondo de la notificacion
        color: "#fff", //color del texto y de la X de cerrar la notificación
        animation: "slide-in-right", //animaciones disponibles "slide-in-right", "slide-in-left", "scale"
        image: false, // agregar imagen
        removable: true, // Notificacion se borra a los X segundos, si quieres mantener la notificación value false
        srcImage: "http://api.ning.com/files/Dqlf20RAm4vk*NYNkBsByZjS7xZp4x2ZwDwqH2N9NMx161P-qV*2nJxYE2RbF7HJK5BUtGOxGL2zEhtyKLO2N7Yd2wV2uum7/13z4l881.gif", // url de la imagen a mostrar en caso de que el valor de image sea true
        time: 3000, // valor del tiempo para borrar la notificación en caso de que removable tenga el valor de true
        canUrl: false, // true si quieres agregar un enlace a la notificación
        url: "http://www.google.com" // en caso de que canUrl tenga el valor true a que URL quieres que enlace
}
