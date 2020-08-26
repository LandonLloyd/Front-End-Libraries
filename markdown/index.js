//load things when page loads
window.onload = (event) => {
  $('#editor').val(`# Markdown Previewer:
  ## Made by [Landon Lloyd](https://landonlloyd.github.io/)
  This is inline code \`<div></div>\` And this is multi-line code:
\`\`\`

// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\``);

  $('#preview').html(marked($('#editor').val()));
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

