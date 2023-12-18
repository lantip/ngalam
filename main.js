function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    joinArray = joinArray.replace("gn", "ng").replace("gn", "ng");
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