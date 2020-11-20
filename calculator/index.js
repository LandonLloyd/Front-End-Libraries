let check = true;

$('#clear').click(function clear(){
  $('#display').html('0');
  check = true;
});

function addDisplay(num){
  
  if(num === '0' && $('#display').html().startsWith('0')){
    $('#display').html('0');
    return;
    
  }
  
  if(check === true){
    $('#display').html('');
  }
  
  $('#display').append(num);
  check = false;
  
}

function answer(){
 
  let value = eval($('#display').html());
  $('#display').html(value);
  check = true;
}
