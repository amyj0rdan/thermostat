describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('temperature starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase the temperature', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);

  });

  it('can decrease the temperature', function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('raises an error when below minimum temp', function(){
    thermostat.temperature = 10
    expect( function() { thermostat.down(); }).toThrow(new Error('Already at minimum temperature!'));

  });

  it('is in power saving mode', function() {
    expect(thermostat.powerSavingMode).toEqual(true);
  });

})
