//import marked
marked.setOptions({
  breaks: true,
  gfm: true,
});



//Make text update every keystroke
$('#editor').keyup(function changeVal(){
  $('#preview').html($('#editor').val());
});

