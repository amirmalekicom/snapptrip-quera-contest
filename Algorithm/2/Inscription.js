//readline = prompt;
//print = console.log;

var firstLine = readline().split(' ');
var rows = parseInt(firstLine[0]);
var cols = parseInt(firstLine[1]);
var matrix = new Array(rows);

// storing
for (var i = 0; i < rows; i++) {
    var line = readline().split('');
    matrix[i] = new Array(cols);
    for (var j = 0; j < cols; j++) {
        matrix[i][j] = (line[j]==='*') ? true : false;
    }
}

// searching
var total = 0;
for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
        if (matrix[i][j]) {
            right = 1;
            while ((j+right < cols) && (matrix[i][j+right])) {  // there exists a right *
                var complete = true;
                for (k = 1; k <= 2*right + 1; k++) {  // checking for needed number of *
                    if ((i-k < 0) || (!matrix [i-k][j])) {  // doesn't exist an up *
                        complete = false;
                    }
                }
                if (complete) {  // means there is a complete L
                    total++;
                }
                right++;  // checking for a bigger L pattern
            }
        }
    }
}

print(total);
