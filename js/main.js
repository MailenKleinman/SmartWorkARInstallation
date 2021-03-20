
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

})(jQuery);

jQuery(document).ready(function ($) {

	$('#checkbox').change(function(){
	  setInterval(function () {
		  moveRight();
	  }, 3000);
	});
	
	  var slideCount = $('#slider ul li').length;
	  var slideWidth = $('#slider ul li').width();
	  var slideHeight = $('#slider ul li').height();
	  var sliderUlWidth = slideCount * slideWidth;
	  
	  $('#slider').css({ width: slideWidth, height: slideHeight });
	  
	  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	  
	  $('#slider ul li:last-child').prependTo('#slider ul');
  
	  function moveLeft() {
		  $('#slider ul').animate({
			  left: + slideWidth
		  }, 200, function () {
			  $('#slider ul li:last-child').prependTo('#slider ul');
			  $('#slider ul').css('left', '');
		  });
	  };
  
	  function moveRight() {
		  $('#slider ul').animate({
			  left: - slideWidth
		  }, 200, function () {
			  $('#slider ul li:first-child').appendTo('#slider ul');
			  $('#slider ul').css('left', '');
		  });
	  };
  
	  $('a.control_prev').click(function () {
		  moveLeft();
	  });
  
	  $('a.control_next').click(function () {
		  moveRight();
	  });
  
  });   

  $(function(){
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables
		var link = this.el.find('.link');
		// Eventos
		link.on('click', {el: this.el, multiple: this.multiple},this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		// Desencadena evento de apertura en los elementos siguientes a la clase link = ul.submenu
		$next.slideToggle();
		// Agregar clase open a elemento padre del elemento con clase link = li
		$this.parent().toggleClass('open');
		
		//Parametro inicial que permite ver 1 solo submenu abierto 
		if(!e.data.multiple){
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		}
    
	}
	// Elegir submenus multiples (true) submenus uno a la vez (false)
	var accordion = new Accordion($('#accordion'), false);
});

