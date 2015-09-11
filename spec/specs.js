describe('findReplace', function() {
  it("inputs three strings and outputs a string", function() {
    expect(findReplace('hello', 'goodbye', 'hello world')).to.be.a('string');
  });

  // it("inputs 'sadness' and outputs 'happiness'", function() {
  //   expect(magic('sadness')).to.equal('happiness');
  // });
});
