$(document).ready(function(){



// Sticky Menu Bar 

$(window).scroll(function(){

  var scrolling = $(window).scrollTop();
  var sticky = $('.sticky-top');

  if(scrolling >=100){
    sticky.addClass('menu-sticky');
  }else{
    sticky.removeClass('menu-sticky');
  }
})


  //Banner Part slick slider
      
$('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots:true,
  autoplaySpeed: 1000,
  infinite: true,
  speed: 1000,
  fade: false,
  cssEase: 'linear'
});

  //Team Part slick slider
      
  $('.team-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots:true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 1000,
    fade: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
     
    ]
  });

// Video Part veno box

$('.venobox').venobox({
    framewidth : '700px',                            // default: ''
    frameheight: '500px',                            // default: ''
    border     : '5px',                             // default: '0'
    bgcolor    : '#5dff5e',                          // default: '#fff'
    titleattr  : 'data-title',                       // default: 'title'
    numeratio  : true,                               // default: false
    infinigall : true,                               // default: false
    share      : ['facebook', 'twitter', 'download'] // default: []
}); 

// project image veno box 

$('.project-img-venobox').venobox({
  framewidth : '700px',                            // default: ''
  frameheight: '500px',                            // default: ''
  border     : '5px',                             // default: '0'
  bgcolor    : '#5dff5e',                          // default: '#fff'
  titleattr  : 'data-title',                       // default: 'title'
  numeratio  : true,                               // default: false
  infinigall : true,                               // default: false
  share      : ['facebook', 'twitter', 'download'], // default: []
  titleattr: 'title',
  spinner    : 'wandering-cubes'
}); 

// Team 2 Slider

$('.slider-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-img'
});
$('.slider-img').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-text',
  dots: false,
  centerPadding:'0px',
  prevArrow:'.left-arrow',
  nextArrow:'.right-arrow',
  centerMode: true,
  focusOnSelect: true,

});


// Scroll top code 

var scrolltotop={setting:{startline:100,scrollto:0,scrollduration:2000,fadeduration:[500,100]},
controlHTML:'<img src="img/about.png" width="32" height="32"/>',controlattrs:{offsetx:5,offsety:5},anchorkeyword:"#top",state:{isvisible:!1,shouldvisible:!1},scrollup:function(){this.cssfixedsupport||this.$control.css({opacity:0});var t=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);t="string"==typeof t&&1==jQuery("#"+t).length?jQuery("#"+t).offset().top:0,this.$body.animate({scrollTop:t},this.setting.scrollduration)},keepfixed:function(){var t=jQuery(window),o=t.scrollLeft()+t.width()-this.$control.width()-this.controlattrs.offsetx,s=t.scrollTop()+t.height()-this.$control.height()-this.controlattrs.offsety;this.$control.css({left:o+"px",top:s+"px"})},togglecontrol:function(){var t=jQuery(window).scrollTop();this.cssfixedsupport||this.keepfixed(),this.state.shouldvisible=t>=this.setting.startline?!0:!1,this.state.shouldvisible&&!this.state.isvisible?(this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]),this.state.isvisible=!0):0==this.state.shouldvisible&&this.state.isvisible&&(this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]),this.state.isvisible=!1)},init:function(){jQuery(document).ready(function(t){var o=scrolltotop,s=document.all;o.cssfixedsupport=!s||s&&"CSS1Compat"==document.compatMode&&window.XMLHttpRequest,o.$body=t(window.opera?"CSS1Compat"==document.compatMode?"html":"body":"html,body"),o.$control=t('<div id="topcontrol">'+o.controlHTML+"</div>").css({position:o.cssfixedsupport?"fixed":"absolute",bottom:o.controlattrs.offsety,right:o.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"Scroll to Top"}).click(function(){return o.scrollup(),!1}).appendTo("body"),document.all&&!window.XMLHttpRequest&&""!=o.$control.text()&&o.$control.css({width:o.$control.width()}),o.togglecontrol(),t('a[href="'+o.anchorkeyword+'"]').click(function(){return o.scrollup(),!1}),t(window).bind("scroll resize",function(t){o.togglecontrol()})})}};scrolltotop.init();


// Type JS

// typed js
$(".typed").typed({
  strings: ["Web Designer.", "Web Developer.", "Full stack web Developer.", 'Graphics Designer'],
  // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
  stringsElement: null,
  // typing speed
  typeSpeed: 50,
  // time before typing starts
  startDelay: 500,
  // backspacing speed
  backSpeed: 50,
  // time before backspacing
  backDelay: 500,
  // loop
  loop: true,
  // false = infinite
  loopCount: 100,
  // show cursor
  showCursor: false,
  // character for cursor
  cursorChar: "|",
  // attribute to type (null == text)
  attr: null,
  // either html or text
  contentType: 'html',
  // call when done callback function
  callback: function() {},
  // starting callback function before each string
  preStringTyped: function() {},
  //callback for every typed string
  onStringTyped: function() {},
  // callback for reset
  resetCallback: function() {}
});

// typed js service
$(".service").typed({
  strings: ["Sk Shad", "Janatul Ferdous Sohana", "Asha Moni", 'Sk Asad' , 'HASINA PARVEEN' , 'SK SADEE' , 'SK SAFEE'],
  // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
  stringsElement: null,
  // typing speed
  typeSpeed: 50,
  // time before typing starts
  startDelay: 500,
  // backspacing speed
  backSpeed: 50,
  // time before backspacing
  backDelay: 500,
  // loop
  loop: true,
  // false = infinite
  loopCount: 100,
  // show cursor
  showCursor: false,
  // character for cursor
  cursorChar: "|",
  // attribute to type (null == text)
  attr: null,
  // either html or text
  contentType: 'html',
  // call when done callback function
  callback: function() {},
  // starting callback function before each string
  preStringTyped: function() {},
  //callback for every typed string
  onStringTyped: function() {},
  // callback for reset
  resetCallback: function() {}
});


// Smooths scrolling
$('body').scrollspy({target: ".navbar", offset: 50});
//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 50
            }, 1500);
            return false;
        }
    }
});




});