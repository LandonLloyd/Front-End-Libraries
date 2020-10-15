let check = true;
let check0 = true;

$('#clear').click(function clear(){
  $('#display').html('0');
  check = true;
});

function addDisplay(num){
  
  if(num === 0 && check0 === true && $('#display').text().startsWith('0')){
    $('#display').text('0');
    check0 = false;
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


