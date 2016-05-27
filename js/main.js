    //JQuery
    $ = require('jquery');
    var jQuery = $;

    //Init localStorage
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./storage');

    //filestream
    var fs = require('fs');

    $("document").ready(function(){
      //Check if user is signed in
      if(localStorage.getItem('email') != null){
          // signed in
      }else{
          // NOT signed in
          $(".content").load('pages/login.html', function(){
              //Login page is loaded
          });
      }

      $(".content").load('map/map.html');
    });
