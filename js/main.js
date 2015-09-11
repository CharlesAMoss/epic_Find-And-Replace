var findReplace = function (phrase, find, replace) {

    var splitString = phrase.split(' ');
    var output = "";
    var punctuation = [",", ".", "!", "?", ";", ":", "'", '"'];
    for (var string of splitString) {
        if (punctuation.indexOf(string) > -1) {
            output = output.slice(0, -1) + string + " ";
        } else {
            if (find.indexOf(string) > -1) {
                output = output + replace + " ";
            } else {
                output = output + string + " ";
            }
        }
    }
    var result = output.slice(0, -1);

    return result;
};

// $(document).ready(function() {
//
//     $("form#     ").submit(function(event) {
//
//         var sadness = $("input#sadness").val();
//
//         var result = magic(num);
//
//         $("#result p").text(result);
//
//         $("#result").show();
//         event.preventDefault();
//     });
//
// });
