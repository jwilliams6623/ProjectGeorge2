let commandLine;
let commandHistory;

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
  addToResponseText("command: " + new Date().toLocaleTimeString());
}
