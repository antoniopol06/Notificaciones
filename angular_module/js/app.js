var app = angular.module("app", ["ngNotifications"]);

app.controller("IndexController", function($scope, $notification){
  $notification.set({image: true, removable: false});
  $notification.create("hola", "Esto es una prueba");
});