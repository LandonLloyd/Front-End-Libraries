function playSound(key) {
  $(`#${key}`).get(0).play();
  if(key === 'Q'){
    $('#display').html('Heater-1');
  }
  if(key === 'W'){
    $('#display').html('Heater-2');
  }
  if(key === 'E'){
    $('#display').html('Heater-3');
  }
  if(key === 'A'){
    $('#display').html('Heater-4');
  }
  if(key === 'S'){
    $('#display').html('Heater-6');
  }
  if(key === 'D'){
    $('#display').html('Clap');
  }
  if(key === 'Z'){
    $('#display').html('Kick \'n hat');
  }
  if(key === 'X'){
    $('#display').html('Thud');
  }
  if(key === 'C'){
    $('#display').html('Tap');
  }
}

document.addEventListener('keydown', function keySound(event){
  if(event.key.toUpperCase() === 'Q' || event.key.toUpperCase() === 'W' || event.key.toUpperCase() === 'E' || event.key.toUpperCase() === 'A' || event.key.toUpperCase() === 'S' || event.key.toUpperCase() === 'D' || event.key.toUpperCase() === 'Z' || event.key.toUpperCase() === 'X' || event.key.toUpperCase() === 'C'){
    $(`#${event.key.toUpperCase()}`).get(0).play();
  }
  
  if(event.key.toUpperCase() === 'Q'){
    $('#display').html('Heater-1');
  }
  if(event.key.toUpperCase() === 'W'){
    $('#display').html('Heater-2');
  }
  if(event.key.toUpperCase() === 'E'){
    $('#display').html('Heater-3');
  }
  if(event.key.toUpperCase() === 'A'){
    $('#display').html('Heater-4');
  }
  if(event.key.toUpperCase() === 'S'){
    $('#display').html('Heater-6');
  }
  if(event.key.toUpperCase() === 'D'){
    $('#display').html('Clap');
  }
  if(event.key.toUpperCase() === 'Z'){
    $('#display').html('Kick \'n hat');
  }
  if(event.key.toUpperCase() === 'X'){
    $('#display').html('Thud');
  }
  if(event.key.toUpperCase() === 'C'){
    $('#display').html('Tap');
  }
  
});


