var app = angular.module("app", ["angularNotifications"]);

app.controller("IndexController", function($scope, $notification){
  var settings = {
    position: "top-right",
    backgroundColor : "bg-black",
    color: "white",
    animation: "slide-in-right",
    image: true,
    removable: true,
    srcImage: "http://api.ning.com/files/Dqlf20RAm4vk*NYNkBsByZjS7xZp4x2ZwDwqH2N9NMx161P-qV*2nJxYE2RbF7HJK5BUtGOxGL2zEhtyKLO2N7Yd2wV2uum7/13z4l881.gif",
    time: 3000,
    canUrl: true,
    url: "https://github.com/antoniopol06/angular-notifications",
  };
  $notification.set(settings);
  $notification.create("hola", "Esto es una prueba");
});