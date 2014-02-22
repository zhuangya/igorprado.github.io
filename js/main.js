jQuery(document).ready(function($){

  /* Function to menage the hover contacts */
  var contactList = $('#contact a');
  var target = $('#contact-msg');
  var defaultMsg = target.text();
  var time = 100;
  var el;

  contactList.hover(function(){
    var el = $(this);
    $.data(this, 'title', el.attr('title'));
    var title = el.attr("title");
    el.removeAttr('title');
    target.text(title).addClass('ativo');
  },
  function(){
    $(this).attr("title", $.data(this, 'title'));
    target.removeClass('ativo').text(defaultMsg);
  });

  // Função para tratar links externos
  $('a[rel="external"]').click(function(e){
    var url = $(this).attr('href');
    e.preventDefault();
    window.open(url, '_blank');
  });
});