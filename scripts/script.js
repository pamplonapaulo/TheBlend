$(document).ready(function(){
    $('a[id^="#"]').on('click',function (e) {
      e.preventDefault();
        var numero = $(this).attr("name");
        $("#overlay").fadeTo(500, .7);
        $('#galleryItemContent' + numero).delay(600).fadeIn(100);
    }); // close for data-modal-id button
    $(".close, #overlay").click(function(event){
       event.preventDefault();
        $("#overlay, #galleryItemContent1, #galleryItemContent2, #galleryItemContent3, #galleryItemContent4").hide();
    });
}); // close Doc Ready
        
        
        
    
//$(document).ready(function(){
//    var plumageDialog = function (numero) {
//        $('.clickDialog' + numero).click(function(){
//            $('#boxDialog' + numero).dialog({
//            draggable:false,
//            resizable:false,
//            modal:true,
//            show: 500,
//            hide: {
//            effect: 'fade', duration:500,
//                },
//            }); // dialog
//        }); // end click
//    };  // end function declaration 'numero'
//    plumageDialog(1);
//    plumageDialog(2);
//    plumageDialog(3);
//    plumageDialog(4);
//    plumageDialog(5);
//    plumageDialog(6);
//    plumageDialog(7);
//    plumageDialog(8);
//    plumageDialog(9);
//}); // end doc ready
//    $('a[id^="#"]').on('click',function (e) {
//      e.preventDefault();
//        var target = this.hash;
//        var $target = $(target);
//        var galleryContent = 
//            
//        $("#overlay").fadeTo(500, .7);
//        $("#BowlPopUp1").delay(600).fadeIn(100);
//        
//    }); // close for data-modal-id button
//               
//       $('html, body').animate({
//           'scrollTop': $target.offset().top
//       }, 1000, 'swing', function () {
//           window.location.hash = target;
//       });
//   });




    
//    $("a#BowlPopUp1Trig").click(function(event){
//        event.preventDefault();
//        $("#overlay").fadeTo(500, .7);
//        $("#BowlPopUp1").delay(600).fadeIn(100);
//    }); // close for data-modal-id button
//    $(".close, #overlay").click(function(event){
//       event.preventDefault();
//        $("#overlay, #BowlPopUp1, #BowlPopUp2, #BowlPopUp3, #BowlPopUp4, #BowlPopUp5, #BowlPopUp6, #BowlPopUp7, #BowlPopUp8").hide();
//    });
//
//    $("a#BowlPopUp2Trig").click(function(event){
//        event.preventDefault();
//        $("#overlay").fadeTo(500, .7);
//        $("#BowlPopUp2").delay(600).fadeIn(100);
//    }); // close for data-modal-id button
//    $(".close, #overlay").click(function(event){
//       event.preventDefault();
//        $("#overlay, #BowlPopUp1, #BowlPopUp2, #BowlPopUp3, #BowlPopUp4, #BowlPopUp5, #BowlPopUp6, #BowlPopUp7, #BowlPopUp8").hide();
//    });
//    
//    $("a#BowlPopUp3Trig").click(function(event){
//        event.preventDefault();
//        $("#overlay").fadeTo(500, .7);
//        $("#BowlPopUp3").delay(600).fadeIn(100);
//    }); // close for data-modal-id button
//    $(".close, #overlay").click(function(event){
//       event.preventDefault();
//        $("#overlay, #BowlPopUp1, #BowlPopUp2, #BowlPopUp3, #BowlPopUp4, #BowlPopUp5, #BowlPopUp6, #BowlPopUp7, #BowlPopUp8").hide();
//    });
//    
//    $("a#BowlPopUp4Trig").click(function(event){
//        event.preventDefault();
//        $("#overlay").fadeTo(500, .7);
//        $("#BowlPopUp4").delay(600).fadeIn(100);
//    }); // close for data-modal-id button
//    $(".close, #overlay").click(function(event){
//       event.preventDefault();
//        $("#overlay, #BowlPopUp1, #BowlPopUp2, #BowlPopUp3, #BowlPopUp4, #BowlPopUp5, #BowlPopUp6, #BowlPopUp7, #BowlPopUp8").hide();
//    });
//    
//    $("a#BowlPopUp5Trig").click(function(event){
//        event.preventDefault();
//        $("#overlay").fadeTo(500, .7);
//        $("#BowlPopUp5").delay(600).fadeIn(100);
//    }); // close for data-modal-id button
//    $(".close, #overlay").click(function(event){
//       event.preventDefault();
//        $("#overlay, #BowlPopUp1, #BowlPopUp2, #BowlPopUp3, #BowlPopUp4, #BowlPopUp5, #BowlPopUp6, #BowlPopUp7, #BowlPopUp8").hide();
//    });
//
//    $("a#BowlPopUp6Trig").click(function(event){
//        event.preventDefault();
//        $("#overlay").fadeTo(500, .7);
//        $("#BowlPopUp6").delay(600).fadeIn(100);
//    }); // close for data-modal-id button
//    $(".close, #overlay").click(function(event){
//       event.preventDefault();
//        $("#overlay, #BowlPopUp1, #BowlPopUp2, #BowlPopUp3, #BowlPopUp4, #BowlPopUp5, #BowlPopUp6, #BowlPopUp7, #BowlPopUp8").hide();
//    });
//    
//    $("a#BowlPopUp7Trig").click(function(event){
//        event.preventDefault();
//        $("#overlay").fadeTo(500, .7);
//        $("#BowlPopUp7").delay(600).fadeIn(100);
//    }); // close for data-modal-id button
//    $(".close, #overlay").click(function(event){
//       event.preventDefault();
//        $("#overlay, #BowlPopUp1, #BowlPopUp2, #BowlPopUp3, #BowlPopUp4, #BowlPopUp5, #BowlPopUp6, #BowlPopUp7, #BowlPopUp8").hide();
//    });
//    
//    $("a#BowlPopUp8Trig").click(function(event){
//        event.preventDefault();
//        $("#overlay").fadeTo(500, .7);
//        $("#BowlPopUp8").delay(600).fadeIn(100);
//    }); // close for data-modal-id button
//    $(".close, #overlay").click(function(event){
//       event.preventDefault();
//        $("#overlay, #BowlPopUp1, #BowlPopUp2, #BowlPopUp3, #BowlPopUp4, #BowlPopUp5, #BowlPopUp6, #BowlPopUp7, #BowlPopUp8").hide();
//    });
//    
//    $("a#smoothiePopUp1Trig").click(function(event){
//        event.preventDefault();
//        $("#overlay").fadeTo(500, .7);
//        $("#smoothiePopUp1").delay(600).fadeIn(100);
//    }); // close for data-modal-id button
//    $(".close, #overlay").click(function(event){
//       event.preventDefault();
//        $("#overlay, #smoothiePopUp1, #smoothiePopUp2, #smoothiePopUp3, #smoothiePopUp4, #smoothiePopUp5, #smoothiePopUp6, #smoothiePopUp7, #smoothiePopUp8, #smoothiePopUp9, #smoothiePopUp10").hide();
//    });
//    
//    $("a#smoothiePopUp2Trig").click(function(event){
//        event.preventDefault();
//        $("#overlay").fadeTo(500, .7);
//        $("#smoothiePopUp2").delay(600).fadeIn(100);
//    }); // close for data-modal-id button
//    $(".close, #overlay").click(function(event){
//       event.preventDefault();
//        $("#overlay, #smoothiePopUp1, #smoothiePopUp2, #smoothiePopUp3, #smoothiePopUp4, #smoothiePopUp5, #smoothiePopUp6, #smoothiePopUp7, #smoothiePopUp8, #smoothiePopUp9, #smoothiePopUp10").hide();
//    });
//    
//    $("a#smoothiePopUp3Trig").click(function(event){
//        event.preventDefault();
//        $("#overlay").fadeTo(500, .7);
//        $("#smoothiePopUp3").delay(600).fadeIn(100);
//    }); // close for data-modal-id button
//    $(".close, #overlay").click(function(event){
//       event.preventDefault();
//        $("#overlay, #smoothiePopUp1, #smoothiePopUp2, #smoothiePopUp3, #smoothiePopUp4, #smoothiePopUp5, #smoothiePopUp6, #smoothiePopUp7, #smoothiePopUp8, #smoothiePopUp9, #smoothiePopUp10").hide();
//    });
//    
//    $("a#smoothiePopUp4Trig").click(function(event){
//        event.preventDefault();
//        $("#overlay").fadeTo(500, .7);
//        $("#smoothiePopUp4").delay(600).fadeIn(100);
//    }); // close for data-modal-id button
//    $(".close, #overlay").click(function(event){
//       event.preventDefault();
//        $("#overlay, #smoothiePopUp1, #smoothiePopUp2, #smoothiePopUp3, #smoothiePopUp4, #smoothiePopUp5, #smoothiePopUp6, #smoothiePopUp7, #smoothiePopUp8, #smoothiePopUp9, #smoothiePopUp10").hide();
//    });
//    
//    $("a#smoothiePopUp5Trig").click(function(event){
//        event.preventDefault();
//        $("#overlay").fadeTo(500, .7);
//        $("#smoothiePopUp5").delay(600).fadeIn(100);
//    }); // close for data-modal-id button
//    $(".close, #overlay").click(function(event){
//       event.preventDefault();
//        $("#overlay, #smoothiePopUp1, #smoothiePopUp2, #smoothiePopUp3, #smoothiePopUp4, #smoothiePopUp5, #smoothiePopUp6, #smoothiePopUp7, #smoothiePopUp8, #smoothiePopUp9, #smoothiePopUp10").hide();
//    });
//    
//    $("a#smoothiePopUp6Trig").click(function(event){
//        event.preventDefault();
//        $("#overlay").fadeTo(500, .7);
//        $("#smoothiePopUp6").delay(600).fadeIn(100);
//    }); // close for data-modal-id button
//    $(".close, #overlay").click(function(event){
//       event.preventDefault();
//        $("#overlay, #smoothiePopUp1, #smoothiePopUp2, #smoothiePopUp3, #smoothiePopUp4, #smoothiePopUp5, #smoothiePopUp6, #smoothiePopUp7, #smoothiePopUp8, #smoothiePopUp9, #smoothiePopUp10").hide();
//    });
//    
//    $("a#smoothiePopUp7Trig").click(function(event){
//        event.preventDefault();
//        $("#overlay").fadeTo(500, .7);
//        $("#smoothiePopUp7").delay(600).fadeIn(100);
//    }); // close for data-modal-id button
//    $(".close, #overlay").click(function(event){
//       event.preventDefault();
//        $("#overlay, #smoothiePopUp1, #smoothiePopUp2, #smoothiePopUp3, #smoothiePopUp4, #smoothiePopUp5, #smoothiePopUp6, #smoothiePopUp7, #smoothiePopUp8, #smoothiePopUp9, #smoothiePopUp10").hide();
//    });
//    
//    $("a#smoothiePopUp8Trig").click(function(event){
//        event.preventDefault();
//        $("#overlay").fadeTo(500, .7);
//        $("#smoothiePopUp8").delay(600).fadeIn(100);
//    }); // close for data-modal-id button
//    $(".close, #overlay").click(function(event){
//       event.preventDefault();
//        $("#overlay, #smoothiePopUp1, #smoothiePopUp2, #smoothiePopUp3, #smoothiePopUp4, #smoothiePopUp5, #smoothiePopUp6, #smoothiePopUp7, #smoothiePopUp8, #smoothiePopUp9, #smoothiePopUp10").hide();
//    });
//    
//    $("a#smoothiePopUp9Trig").click(function(event){
//        event.preventDefault();
//        $("#overlay").fadeTo(500, .7);
//        $("#smoothiePopUp9").delay(600).fadeIn(100);
//    }); // close for data-modal-id button
//    $(".close, #overlay").click(function(event){
//       event.preventDefault();
//        $("#overlay, #smoothiePopUp1, #smoothiePopUp2, #smoothiePopUp3, #smoothiePopUp4, #smoothiePopUp5, #smoothiePopUp6, #smoothiePopUp7, #smoothiePopUp8, #smoothiePopUp9, #smoothiePopUp10").hide();
//    });
//    
//    $("a#smoothiePopUp10Trig").click(function(event){
//        event.preventDefault();
//        $("#overlay").fadeTo(500, .7);
//        $("#smoothiePopUp10").delay(600).fadeIn(100);
//    }); // close for data-modal-id button
//    $(".close, #overlay").click(function(event){
//       event.preventDefault();
//        $("#overlay, #smoothiePopUp1, #smoothiePopUp2, #smoothiePopUp3, #smoothiePopUp4, #smoothiePopUp5, #smoothiePopUp6, #smoothiePopUp7, #smoothiePopUp8, #smoothiePopUp9, #smoothiePopUp10").hide();
//    });
//    
    // end the 'close' button script
//}); // close Doc Ready