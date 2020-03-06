var firstLine = readline().split(' ');
var bottleCount = parseInt(firstLine[0]);
var totalFluid = parseInt(firstLine[1]);
var totalCapacity = 0;

for (var i = 0; i < bottleCount; i++) {
    totalCapacity += parseInt(readline());
}

if (totalCapacity < totalFluid)
    print("NO");
else
    print("YES");