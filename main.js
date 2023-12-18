function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    let lstr = joinArray.slice(-2);
    if (lstr == "gn") {
        joinArray = joinArray.slice(0, (joinArray.length - 2)) + "ng";
    }
    return joinArray;
}

const area = document.getElementsByClassName('textarea')[0]; 
const result = document.getElementById('preview');
area.addEventListener('input', function() {
    let vals = this.value;    
    let arr = vals.split(' ');
    const hsl = [];
    for (var i=0; i<arr.length; i++) {
        hsl.push(reverseString(arr[i]));
    }
    var rstl = hsl.join(" ");
    result.innerHTML = rstl;
});