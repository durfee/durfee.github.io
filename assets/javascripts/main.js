//= require turbolinks

jQuery(document).ready(function($) {
  $('.nav-icon').click(function() {
    $(this).toggleClass('open');
    $('#menu__container').toggleClass('open');
  });
});