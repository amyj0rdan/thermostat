let thermostat = new Thermostat();

$(document).ready(function(){

  function refreshValues () {
    $('#temperature-value').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
  }

  $('#temperature-up').click(function(){
    thermostat.up();
    refreshValues();
  });

  $('#temperature-down').click(function(){
    thermostat.down();
    refreshValues();
  });

  $('#temperature-reset').click(function(){
    thermostat.reset();
    refreshValues();
  });

  $('#psm-on').click(function(){
    thermostat.switchOnPowerSavingMode();
    refreshValues();
  });

  $('#psm-off').click(function(){
    thermostat.switchOffPowerSavingMode();
    refreshValues();
  });

});
