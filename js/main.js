var findReplace = function (phrase, find, replace) {

    var splitString = phrase.split(/\s*\b\s*/);
    var punctuation = [ ",", ".", "!", "?", ";", ":" ];
    var output = "";
    for (var string of splitString) {
        if (punctuation.indexOf(string) === -1) {
            if (find.indexOf(string) !== -1) {
                output = output + replace + " ";
            } else {
                output = output + string + " ";
            }// end of if
        } else {
            output = output.slice(0, -1) + string + " ";
        }// end of if
    }// end of for
    var result = output.slice(0, -1);

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
