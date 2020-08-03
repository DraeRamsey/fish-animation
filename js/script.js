'use strict';
var backFin =    $('#back-fin');
var fishBox =    $('#fish-box');


$(document).ready(function(){
  function fishFloat()
  {
    fishBox.animate({top:'+=40'}, 1000);
    fishBox.animate({top:'-=40'}, 1000,'linear',fishFloat);
  }

  fishFloat();

   function fishBob()
    {
      backFin.css({height:200});
      backFin.animate ({height: 175},1500, 'linear',fishBob);
    }

  fishBob();

  });
