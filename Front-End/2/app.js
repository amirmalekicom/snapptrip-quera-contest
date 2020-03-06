var arr = [
  "Alborz",
  "Ardabil",
  "Bushehr",
  "Chaharmahal and Bakhtiari",
  "East Azerbaijan",
  "Isfahan",
  "Fars",
  "Gilan",
  "Golestan",
  "Hamadan",
  "Hormozgan",
  "Ilam",
  "Kerman",
  "Kermanshah",
  "Khuzestan",
  "Kohgiluyeh and Boyer-Ahmad",
  "Kurdistan",
  "Lorestan",
  "Markazi",
  "Mazandaran",
  "North Khorasan",
  "Qazvin",
  "Qom",
  "Razavi Khorasan",
  "Semnan",
  "Sistan and Baluchestan",
  "South Khorasan",
  "Tehran",
  "West Azerbaijan",
  "Yazd",
  "Zanjan"
];

var txtbox = document.getElementById('myInput');

// input changes
txtbox.oninput = textChanged;

function textChanged() {
    // remove previous matches
    document.getElementsByClassName('autocomplete')[0].innerHTML = '';
    
    // read the input
    var txt = txtbox.value;
    if (txt !== '') {
        // prepare a new array of matches
        var notFound = true;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].toLowerCase().startsWith(txt.toLowerCase())) {
                notFound = false;
                if (txt !== arr[i] || true) {  // not complete match
                    // add new matches
                    var element = document.createElement('div');
                    element.className = 'item';
                    element.appendChild(document.createTextNode(arr[i]));
                    document.getElementsByClassName('autocomplete')[0].appendChild(element); 
                }
            }
        }
        
        if (notFound) {  // not found
            var element = document.createElement('div');
            element.className = 'not-found';
            element.appendChild(document.createTextNode('Not Found!'));
            document.getElementsByClassName('autocomplete')[0].appendChild(element);
        }
    }
};

document.addEventListener('click', function(e) {
    // click on suggestion
    cName = e.target.className;
    tag = e.target.tagName.toLowerCase();
    if (cName === 'item') {
        txtbox.value = e.target.innerHTML;
        textChanged();
    } else if (tag === 'body') {
        document.getElementsByClassName('autocomplete')[0].innerHTML = '';
    }
});