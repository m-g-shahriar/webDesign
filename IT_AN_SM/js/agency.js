
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #ffffff}";
        document.body.appendChild(css);
    };



// NOTE: Jquery

$(function(){

  $('.navMain').mouseenter(function(){
      $('.navMain').addClass('colorMenu');
  });
// NOTE: On mouse leave
$('.enterTheMenu').mouseenter(function(){
    $('.navMain').removeClass('colorMenu');
});


$('.main_header').mouseleave(function(){
    $('.navMain').addClass('colorMenu');
});


  // NOTE: For menu
  $('.mButton').click(function(){

      //$('nav ul').show('fast');

      $('nav ul').toggleClass('show');



      // if ($('nav ul').is(":hidden")) {
      //     $('nav ul').show("fast");
      // }
      // else{
      //   $('nav ul').hide("fast");
      // }

  console.log("work");

});


// NOTE: second secton box boxHoverIconWidth

$('.boxDesign').hover(function(){


    var classNameGet = $(this).attr("class");
        //console.log(classNameGet);
    if(classNameGet=="boxDesign boxDesigni1"){
      $('.boxDesigni1 i').addClass('boxHoverIconRotate');
      console.log("rotate");
    }

    if(classNameGet=="boxDesign boxDesigni2"){
      $('.boxDesigni2 i').addClass('boxHoverIconWidth');
      console.log("rotate");
    }
    if(classNameGet=="boxDesign boxDesigni4"){
      $('.boxDesigni4 i').addClass('boxHoverIconWidth');
      console.log("rotate");
    }

    if(classNameGet=="boxDesign boxDesigni3"){
      $('.boxDesigni3 i').addClass('boxHoverIconRotate');
      console.log("rotate");
    }

},function(){
    $('.boxDesigni1 i').removeClass('boxHoverIconRotate');
      $('.boxDesigni3 i').removeClass('boxHoverIconRotate');
      $('.boxDesigni2 i').removeClass('boxHoverIconWidth');
        $('.boxDesigni4 i').removeClass('boxHoverIconWidth');
});



  // NOTE: End menu
  // NOTE: For Button on Faq proccedure and pricng


    $('.procedureButton').click(function(){

        $('.mainDivofProce').show("fast");
        $('.FaqSection').hide('fast');
        $('.pricing').hide('fast');


          console.log("Print worked");
    });

    $('.faqButton').click(function(){

        $('.mainDivofProce').hide("fast");
        $('.FaqSection').show('fast');
        $('.pricing').hide('fast');


          console.log("Print worked faq");
    });

    $('.pricingButton').click(function(){

        $('.mainDivofProce').hide("fast");
        $('.FaqSection').hide('fast');
        $('.pricing').show('fast');


          console.log("Print worked faq");
    });



    // NOTE: Counter

    var i = 0;


 $('.allWarp').one("mouseover",function(){


          var tour = 0;
          var travelers = 0;
          var parkVisit =0;
          var days = 0;


          setInterval(function(){

              if(tour>250){
                $('.350').html(tour);

              }
              if(tour<=250){
                  $('.350').html(tour);
                  tour++;
              }

                // NOTE: Travelers
                if(travelers>100){
                  $('.8500').html(travelers);

                }
                if(travelers<=100){
                    $('.8500').html(travelers);
                    travelers++;
              }

              // NOTE: national park
              if(parkVisit>100){
                $('.250').html(parkVisit);

              }
              if(parkVisit<=100){
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




        },50);

        console.log("0125");


  });

  // NOTE: End counyer

  $(".boxSectionOne").waypoint(function() {
      $('.boxDesigni1').addClass('fadeInLeft delay-.8s');
      $('.boxDesigni2').addClass('fadeInLeft delay-1s');
      $('.boxDesigni3').addClass('fadeInRight delay-.8s');
      $('.boxDesigni4').addClass('fadeInRight delay-1s');
}, { offset: '100%'});

  $(".deal").waypoint(function() {
      $('.dealImg').addClass('bounceIn delay-.9s');
      $('.mm').addClass('bounceInRight delay-1s');
}, { offset: '100%'});
        
              $(".doerImg").waypoint(function() {
              $('.doerImg').addClass('jello delay-1s');
}, { offset: '100%'});
});
