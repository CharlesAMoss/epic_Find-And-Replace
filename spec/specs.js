describe('magic', function() {
  it("inputs 'sadness' and outputs a string", function() {
    expect(magic('sadness')).to.be.a('string');
  });

  it("inputs 'sadness' and outputs 'happiness'", function() {
    expect(magic('sadness')).to.equal('happiness');
  });
});
