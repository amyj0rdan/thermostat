function Thermostat() {

  this.temperature = 20;
  this.minTemperature = 10;
  this.powerSavingMode = true;
  this.maxTemperature = 25;
};

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature === this.minTemperature) {
    throw new Error('Already at minimum temperature!');
  }
  this.temperature -= 1;
};

Thermostat.prototype.switchOffPowerSavingMode = function() {
  this.powerSavingMode = false;
  this.maxTemperature = 32;
}

Thermostat.prototype.switchOnPowerSavingMode = function() {
  this.powerSavingMode = true;
  this.maxTemperature = 25;
}
