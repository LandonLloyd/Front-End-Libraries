let check = true;

$('#clear').click(function clear(){
  $('#display').text('0');
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
  
  //NEW CODE
  
  let decimalCheck = true;
  
  if(num === "." && decimalCheck === true){
    console.log(num && decimalCheck);
    $("#display").append(num);
    decimalCheck = false;
  }else if(decimalCheck === false){
    return;
  }
  if(num === "+" || num === "-" || num === "/" || num === "*" && decimalCheck === false){
    console.log(num && decimalCheck);
    $("#display").append(num);
    decimalCheck = true;
  }
  if(num !== "." || num !== "+" || num !== "-" || num !== "/" || num!== "*"){
    $("#display").append(num);
    check = false;
  }
  
}

function answer(){
 
  let value = eval($('#display').html());
  $('#display').html(value);
  check = true;
}
