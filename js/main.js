var findReplace = function(phrase, find, replace) {

    var splitString = phrase.split(/\s*\b\s*/);        // separates 'phrase' into an array of words and punctuation
    var punctuation = [",", ".", "!", "?", ";", ":"];  // crates an array used match punctuation
    var output = "";                                   // declares the empty string 'output'
    for (var string of splitString) {                  // loops through the indexes of 'splitString' as 'string'
        if (punctuation.indexOf(string) === -1) {      // looks for matches in the 'punctuation'
            if (find.indexOf(string) !== -1) {         // looks for matches of 'find'
                output = output + replace + " ";       // adds 'replace' to 'output' and appends a space
            } else {                                   // if 'find' is not matched
                output = output + string + " ";        // adds 'string'(word) to 'output' and appends a space
            } // end of if
        } else {                                       // if 'punctuation' is matched
            output = output.slice(0, -1) + string + " ";  // removes a preceding space then adds 'string'(punctuation) and appends a space
        } // end of if
    } // end of for
    var result = output.slice(0, -1);                  // removes the last space from 'output'

    return result;                                     
};


$(document).ready(function() {

    $("form#findReplace").submit(function(event) {

        var phrase = $("input#phrase").val();
        var find = $("input#find").val();
        var replace = $("input#replace").val();

        var result = findReplace(phrase, find, replace);

        $("#result p").text(result);

        $("#result").show();
        event.preventDefault();
    });

});
