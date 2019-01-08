$(function(){
      // NOTE: one
      // $('.imgOne').hover(function(){
      //     $('.hoverTextBox1').show('slow');
      // },function(){
      //     //  $('.hoverTextBox').hide('');
      // });
      $('.OP1').hover(function(){
        $('.hoverTextBox1').show('slow');
      },function(){
         $('.hoverTextBox1').hide('slow');
      });

      console.log("Print this");
      // NOTE: two
      // $('.imgTwo').hover(function(){
      //     $('.hoverTextBox2').show('slow');
      // },function(){
      //     //  $('.hoverTextBox').hide('');
      // });
      $('.OP2').hover(function(){
         $('.hoverTextBox2').show('slow');
      },function(){
         $('.hoverTextBox2').hide('slow');
      });

      // NOTE: Three
      // $('.imgThree').hover(function(){
      //     $('.hoverTextBox3').show('slow');
      // },function(){
      //     //  $('.hoverTextBox').hide('');
      // });
      $('.OP3').hover(function(){
         $('.hoverTextBox3').show('slow');
      },function(){
         $('.hoverTextBox3').hide('slow');
      });

      // NOTE: Find wrape of div

      $('.wrapperDivofTour').hover(function(){

          var dataCount = $(this).attr('data-count');

            if(dataCount==1){
             $('.TOne').show();
              //console.log("fdfsd");

            }
            if(dataCount==2){
             $('.TTwo').show();
              //console.log("fdfsd");

            }

            if(dataCount==3){
             $('.TThree').show();
              //console.log("fdfsd");
            }
            if(dataCount==4){
             $('.TFour').show();
              //console.log("fdfsd");
            }
            if(dataCount==5){
             $('.TFive').show();
            //  console.log("fdfsd");
            }
            if(dataCount==6){
             $('.TSix').show();

            //  console.log("fdfsd");
            }

      },function(){

         $('.TourIneerbox').hide();
          console.log("fdfsd");
            //$('.tourWarp p').css("color","#e78f40");

      });


      // NOTE: Counter

      var i = 0;


   $('.tours').one("mouseover",function(){


            var tour = 0;
            var travelers = 0;
            var parkVisit =0;
            var days = 0;


            setInterval(function(){

                if(tour>350){
                  $('.350').html(tour);

                }
                if(tour<=350){
                    $('.350').html(tour);
                    tour++;
                }

                  // NOTE: Travelers
                  if(travelers>700){
                    $('.8500').html(travelers);

                  }
                  if(travelers<=700){
                      $('.8500').html(travelers);
                      travelers++;
                }

                // NOTE: national park
                if(parkVisit>250){
                  $('.250').html(parkVisit);

                }
                if(parkVisit<=250){
                    $('.250').html(parkVisit);
                    parkVisit++;
              }

              // NOTE: days
              if(days>800){
                $('.800').html(days);

              }
              if(days<=800){
                  $('.800').html(days);
                  days++;
            }




            },10);

          console.log("0125");


    });

    // NOTE: Team hover

    $('.innerTeam').hover(function(){

        var te = $(this).attr("data-count");

        if(te==1){
          $(".T1").show();
          //$('.T1Bar').css("width","100%");
        }
        if(te==2){
          $(".T2").show();
          //$('.T2Bar').css("width","100%");
        }

        if(te==3){
          $(".T3").show();
          //$('.T3Bar').css("width","100%");
        }

    },function(){

          $('.innerTeamHover').hide();
          //$('.NameBarGuide').css("width","80%");
    });


    // NOTE: Find scroll


      $(document).ready(function() {
      // Check if element is scrolled into view
      function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
      }
      // If element is scrolled into view, fade it in
      $(window).scroll(function() {
        $('.counter').each(function() {
          if (isScrolledIntoView(this) === true) {
            // NOTE: Only check
            $('.counter').addClass('fadeIn');
          }
        });
      });
      });

    // NOTE: End scroll


});
