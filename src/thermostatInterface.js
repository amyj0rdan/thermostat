let thermostat = new Thermostat();

$(document).ready(function(){

  function updateTemperature () {
    $('#temperature-value').text(thermostat.getCurrentTemperature());
  }

  $('#temperature-up').click(function(){
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function(){
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function(){
    thermostat.reset();
    updateTemperature();
  });

  $('#psm-on').click(function(){
    thermostat.switchOnPowerSavingMode();
    updateTemperature();
  })

  $('#psm-off').click(function(){
    thermostat.switchOffPowerSavingMode();
    updateTemperature();
  })

});
