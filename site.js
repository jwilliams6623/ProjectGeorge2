let tally = 0;
let commandLine;
let commandHistory;
let isInTheKitchen;


function scrollToBottom() {
  var objDiv = document.getElementById("console-canvas");
  objDiv.scrollTop = objDiv.scrollHeight;
}

function calcHeight(textString) {
  var numberOfCharacters = textString.length();
  var numberOfLines = 500;
}

function handleCommand(command) {
  commandLine.value = "";
  runCommand(command);

  commandLine.value = "";
  commandLine.rows = 2;
}

window.onload = function () {
  commandLine = document.querySelector("#command-line");
  commandHistory = document.querySelector("#command-history");

  commandLine.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        handleCommand(commandLine.value);
    }
  });

  commandLine.addEventListener("keyup", (e) => {
    let commandLength = commandLine.value.length;
    let height = Math.ceil(commandLength / 65);
    commandLine.rows = height + 1;
  });
};

function addToResponseText(command) {
  commandHistory.innerHTML = commandHistory.innerHTML + "<br>" + command;
}

function runCommand(command) {
  ddToResponseText("command: " + new Date().toLocaleTimeString());
  document.write("Hello?")
}

// let tally = 0;

// function chapter1() {
//     doument.write("Hello?");
// }