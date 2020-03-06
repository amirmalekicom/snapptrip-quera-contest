readline = prompt;
print = console.log;
log = console.log;
//function log(x) {};

var input;

do {
    input = readline();
} while (input !== 'start');

// starting of the game
log('started');

// variables
var playing = true;
var regex = [/add [a-z]+ \d+ \d+/,
            /[a-z]+ cheats/,
            /[a-z]+ competes everybody/,
            /[a-z]+ competes between \d+ \d+/,
            /[a-z]+ competes (?!everybody|between)[a-z]+/,
            /print scoreboard/];
var players = new Array();
var allQueue = new Array();  // index, score, janbe, time
var rangeQueue = new Array();  // index, score, janbe, time, low, hi
var specificQueue = new Array();  // index, score, janbe, time, index2

// classes
var Player = function (name, strength, tolerance) {
    this.name = name;
    this.strength = parseInt(strength);
    this.tolerance = parseInt(tolerance);
    this.score = 0;
    this.ignored = false;
}

// functions

// reading lines
var time = 0;
while (playing) {
    time++;
    input = readline();
    var words = input.split(' ');
    
    switch (true) {
        case regex[0].test(input):
            players.push(new Player(words[1], words[2], words[3]));
            log(players);
            break;
            
        case regex[1].test(input):
            var index = players.findIndex(p => p.name === words[0]);
            players[index].ignored = true;   
            //TODO
            break;
            
        case regex[2].test(input):
            var index = players.findIndex(p => p.name === words[0]);
            if (!players[index].ignored)
            all(index);
            break;
            
        case regex[3].test(input):
            var index = players.findIndex(p => p.name === words[0]);
            var low = parseInt(words[3]);
            var hi = parseInt(words[4]);
            if (players[index].score >= 5 && !players[index].ignored)
                range(index, low, hi);
            break;
            
        case regex[4].test(input):
            var index0 = players.findIndex(p => p.name === words[0]);
            var index1 = players.findIndex(p => p.name === words[2]);
            if (players[index].score >= 10 && !players[index].ignored)
                specific(index0, index1);
            break;
            
        case regex[5].test(input):
            sortPlayers();
            break;
            
        case input === 'end':
            playing = false;
            break;
        default:
            print('Error: ' + input);
    }
}

log('finished');

function all(index) {
    var temp = new Array();
    // vs. allQ
    for (var i = 0; i < allQueue.length; i++) {
        temp.push(index, allQueue[i][0], allQueue[i][1], allQueue[i][2], allQueue[i][3]);
    }
    // vs. rangeQ
    for (var i = 0; i < allQueue.length; i++) {
        temp.push(index, allQueue[i][0], allQueue[i][1], allQueue[i][2], allQueue[i][3]);
    }
    // vs. specificQ
    for (var i = 0; i < allQueue.length; i++) {
        temp.push(index, allQueue[i][0], allQueue[i][1], allQueue[i][2], allQueue[i][3]);
    }
    if  (temp.length === 0) {
        allQueue.push(index, players[index].score, players[index].tolerance, time);
    }
}

function range(index, low, hi) {
    var temp = new Array();
    // vs. allQ
    for (var i = 0; i < allQueue.length; i++) {
        temp.push(index, allQueue[i][0], allQueue[i][1], allQueue[i][2], allQueue[i][3]);
    }
    // vs. rangeQ
    for (var i = 0; i < allQueue.length; i++) {
        temp.push(index, allQueue[i][0], allQueue[i][1], allQueue[i][2], allQueue[i][3]);
    }
    // vs. specificQ
    for (var i = 0; i < allQueue.length; i++) {
        temp.push(index, allQueue[i][0], allQueue[i][1], allQueue[i][2], allQueue[i][3]);
    }
    if  (temp.length === 0) {
        rangeQueue.push(index, players[index].score, players[index].tolerance, time, low, hi);
    }
}

function specific(index0, index1) {
    var temp = new Array();
    // vs. allQ
    for (var i = 0; i < allQueue.length; i++) {
        temp.push(index, allQueue[i][0], allQueue[i][1], allQueue[i][2], allQueue[i][3]);
    }
    // vs. rangeQ
    for (var i = 0; i < allQueue.length; i++) {
        temp.push(index, allQueue[i][0], allQueue[i][1], allQueue[i][2], allQueue[i][3]);
    }
    // vs. specificQ
    for (var i = 0; i < allQueue.length; i++) {
        temp.push(index, allQueue[i][0], allQueue[i][1], allQueue[i][2], allQueue[i][3]);
    }
    if  (temp.length === 0) {
        specificQueue.push(index0, players[index0].score, players[index0].tolerance, time, index1);
    }
}

function sortPlayers() {
    
}