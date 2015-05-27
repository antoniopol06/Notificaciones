var app = angular.module("app", ["ngNotifications"]);

app.controller("IndexController", function($scope, $notification){
  $notification.set({image: true, removable: true, animation: "scale"});
  $notification.create("hola", "Esto es una prueba");
});