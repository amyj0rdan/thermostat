function Thermostat() {

  this.temperature = 20;
  this.min_temperature = 10;

};

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature === this.min_temperature) {
    throw new Error('Already at minimum temperature!');
  }
  this.temperature -= 1;
};
