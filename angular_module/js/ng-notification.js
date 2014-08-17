angular.module('ngNotifications', [])
  .factory('$notification', function() {
    var settings = {
        position: "top-right",
        backgroundColor : "#333",
        color: "#fff",
        animation: "slide-in-right",
        image: false,
        removable: true,
        srcImage: "http://api.ning.com/files/Dqlf20RAm4vk*NYNkBsByZjS7xZp4x2ZwDwqH2N9NMx161P-qV*2nJxYE2RbF7HJK5BUtGOxGL2zEhtyKLO2N7Yd2wV2uum7/13z4l881.gif",
        time: 3000,
        canUrl: false,
        url: "http://www.google.com",
      },
      notification,
      area = document.getElementById("notifications");
    var set = function(newSettings){
      for (var property in newSettings){
        settings[property] = newSettings[property];
      }
    };

    var create = function (author, msg) {
      var frag = document.createDocumentFragment(),
          div = document.createElement('a'),
          divBox = document.createElement('div'),
          authorBox = document.createElement('div'),
          authorText = document.createTextNode(author),
          msgBox = document.createElement('div'),
          msgText = document.createTextNode(msg),
          close = document.createElement('aside'),
          textClose = document.createTextNode('X');
      close.className = "close-notification";
      close.style.color = settings.color; 
      close.appendChild(textClose);
      area.className = settings.position;
      div.className = "notification " + " " + settings.animation;
      if(settings.image){
        var img = document.createElement('img');
        img.src = settings.srcImage;
        img.className = "img-notification";
        divBox.className ="inline-block";
        div.appendChild(img);
      }
      authorBox.appendChild(authorText);
      authorBox.className = "title-notification";
      msgBox.appendChild(msgText);
      divBox.appendChild(authorBox);
      divBox.appendChild(msgBox);
      div.appendChild(divBox);
      div.appendChild(close);
      frag.appendChild(div);
      area.appendChild(frag);
      div.style.backgroundColor = settings.backgroundColor;
      div.style.color = settings.color;
      close.addEventListener("click", function(){
        this.parentNode.parentNode.removeChild(this.parentNode);
      });
      if(settings.removable){
        removeNotification(div);
      }
      if(settings.canUrl){
        div.href = settings.url;
      }
    };

    var removeNotification = function (div) {
      setTimeout(function(){
           area.removeChild(div);
      }, settings.time);
    };

    return{
      create: create,
      set: set
    }
  });
