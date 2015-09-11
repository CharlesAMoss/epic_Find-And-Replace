describe('findReplace', function() {
  it("inputs three strings and outputs a string", function() {
    expect(findReplace('hello world', 'hello', 'goodbye')).to.be.a('string');
  });

  it("intputs a phrase, and two words and replace the first with the second word", function() {
    expect(findReplace('hello world', 'hello', 'goodbye')).to.equal('goodbye world');
  });
});
