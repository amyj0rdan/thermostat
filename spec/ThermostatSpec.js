describe('Thermostat', function() {

  var thermostat = new Thermostat;

  it('temperature starts at 20 degrees', function()
  {
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase the temperature with up function', function()
  {
    thermostat.up()
    expect(thermostat.temperature).toEqual(21);

  });

})
