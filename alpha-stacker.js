
var alphabet = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function stackLetters(array) {
    var print = "";
    for (var i = 1; i < array.length; i++) {
        print += array[i];
        if (i%3 === 0) {
            print += " ";
        }
        console.log(print);
    }
}
stackLetters(alphabet);
