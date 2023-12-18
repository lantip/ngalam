var irregular = {
    "orang": "genaro",
    "polisi": "silup",
    "sepeda": "adapes",
    "mertua": "aramaut",
    "kerja": "idrek",
    "sempak": "kampes",
};

function reverseString(str) {
    if (irregular.hasOwnProperty(str)) {
        return irregular[str];
    }

    var irregularIndex = Object.values(irregular).indexOf(str);
    if (irregularIndex >= 0) {
        return Object.keys(irregular)[irregularIndex];
    }

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
