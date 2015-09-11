describe('findReplace', function() {
    it("inputs three strings and outputs a string", function() {
        expect(findReplace('hello world', 'hello', 'goodbye')).to.be.a('string');
    });

    it("intputs a phrase, and two words and replace the first with the second word", function() {
        expect(findReplace('hello world', 'hello', 'goodbye')).to.equal('goodbye world');
    });

    it("handles common punctution correctly", function() {
        expect(findReplace('Hello, world!', 'Hello', 'Goodbye')).to.equal('Goodbye, world!');
    });

    it("handles multiple words to replace correctly ", function() {
        expect(findReplace('Hello Hello Hello, world!', 'Hello', 'Goodbye')).to.equal('Goodbye Goodbye Goodbye, world!');
    });

});
