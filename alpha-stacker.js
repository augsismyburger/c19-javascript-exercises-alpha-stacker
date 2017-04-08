
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function stackLetters(array) {
    var print = "";
    for (var i = 0; i < array.length; i++) {
        print = print + array[i];
        console.log(print);
    }
}
stackLetters(alphabet);
