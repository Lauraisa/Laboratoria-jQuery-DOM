/*function begin() {
  jQuery('#p-test').click(function() {
    jQuery(this).hide();
  })

  jQuery('#boton-1').on('click', function() {
    jQuery('#p-test').show();
  })

  $('#boton-2').click(function() {
    $('#p-test').hide('fast');
  })

  $('#boton-3').click(function() {
    $('#p-test').show('slow');
  })

  $('#boton-4').click(function() {
    $('#p-test').toggle();
  })

  $('#boton-5').click(function() {
    $('#p-test').toggle('swing');
  })

  // $('#p-test').css('background-color', 'yellow');
  /* $('#p-test').css({
    backgroundColor: 'yellow',
    border: '1px solid black'
  }); */
//}


jQuery(document).ready();


$('p').on('click', function() {
  $('p').hide();
})
/*dando funcionalidad aal boton-1*/

$('input:eq(0)').on('click', function() {
  $('p').show();
})

/* u otra bforma seria */
$('#boton-1)').on('click', function() {
  $('p').show();
})