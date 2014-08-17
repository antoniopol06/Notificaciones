var app = angular.module("app", ["ngNotifications"]);

app.controller("IndexController", function($scope, $notification){
  $notification.set({image: true, removable: true, time: 1000});
  $notification.create("hola", "Esto es una prueba");
});