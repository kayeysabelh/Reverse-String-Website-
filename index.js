function reverseString() {
    var str = document.getElementById("userInput").value;
    var reversed = "";

    for (var i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }

    document.getElementById("result").innerHTML = "Reversed: " + reversed;
}
