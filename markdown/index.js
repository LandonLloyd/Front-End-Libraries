//load things when page loads
window.onload = (event) => {
  $('#editor').val('# Markdown Previewer: \n ## Made by Landon Lloyd');

  $('#preview').html($('#editor').val());
};


//import marked
marked.setOptions({
  breaks: true,
  gfm: true,
});



//Make text update every keystroke
$('#editor').keyup(function changeVal(){
  $('#preview').html(marked($('#editor').val()));
});

