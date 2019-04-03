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

  $('#psm-toggle').click(function(){
    if (thermostat.isPowerSavingModeOn()) {
      thermostat.switchOffPowerSavingMode();
      $('#psm-toggle').text('On');
      $('#psm-indicator').removeClass('btn-success').addClass('btn-danger');
      $('#psm-indicator').text('Power saving is off');
    } else {
      thermostat.switchOnPowerSavingMode();
      $('#psm-toggle').text('Off');
      $('#psm-indicator').removeClass('btn-danger').addClass('btn-success');
      $('#psm-indicator').text('Power saving is on');
    }

    refreshValues();
  });

});
