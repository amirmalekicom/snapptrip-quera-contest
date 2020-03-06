//readline = prompt;
//print = console.log;

var n = parseInt(readline());

var daughter = new Array(n);

for (var i = 0; i < n; i++)
    daughter[i] = false;

var readyToMarry = 0;

for (var i = 0; i < n; i++) {  // every day!
    var ai = parseInt(readline()) - 1;  // converting to zero-based...
    daughter[ai] = true;
    
    while (daughter[readyToMarry]) {
        readyToMarry++;  // moving to next one;
        print(i + 1);  // converting day to one-based;
    }
}