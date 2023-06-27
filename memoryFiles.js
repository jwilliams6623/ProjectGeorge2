let commandLine;
let commandHistory;
let commandLineContainer;
let consoleContainer;
let Cntr=1
   

let userName;
let hasAskForProgram;
let whatUserThinks;
let alrightWithYou;
let askWhatToChange;

let hasLikedItAnswer;
let hasAskTurnOffGeorge;
let askIfUserThere;
let askFinalCode;
let askHowWasDay;
let askSecondPassword;

let lineIndex = 0;

// Keep track of pages 'state' or what the application is doing right now.
const consoleStateTypes = {
  Hello: 0,
  AskWhoAreYou: 1,
  AskForProgram: 2,
  WhatDoYouThink: 3,
  IsThatAlright: 4,
  WhatToChange: 5 
}
let consoleState = consoleStateTypes.Hello;

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function scrollToBottom() {
  var objDiv = document.getElementById("console-container");
  consoleContainer.scrollTop = consoleContainer.scrollHeight;
}

function calcHeight(textString) {
  var numberOfCharacters = textString.length();
  var numberOfLines = 500;
}

async function handleCommand(command) {
  commandLineContainer.style.display = "none";
  commandLine.value = "";
  await addToResponseTextFast('> ' + command);

  runCommand(command);

  commandLine.value = "";
  commandLine.rows = 2;
}

window.onload = function () {
  commandLine = document.querySelector("#command-line");
  commandHistory = document.querySelector("#command-history");
  commandLineContainer = document.querySelector("#command-line-container");
  consoleContainer = document.querySelector("#console-container");

  consoleContainer.addEventListener("click", (e) => {
    commandLine.focus();
  })

  consoleState = consoleStateTypes.AskWhoAreYou;

  commandLine.addEventListener("keypress", async (e) => {
    if (e.keyCode == 13) {  // If they press enter
      e.preventDefault();
      await handleCommand(commandLine.value);  // Call function and pass in what they passed
    }
  });

  commandLine.addEventListener("keyup", (e) => {
    let commandLength = commandLine.value.length;
    let height = Math.ceil(commandLength / 65);
    commandLine.rows = height + 1;
  });

  commandLine.focus();
};

function addToResponseTextFast(text, styling = '') {
  let responseDivId = `response${lineIndex++}`;
  commandHistory.innerHTML += `<div id='${responseDivId}' style='${styling};'>${text}</div>`;
  scrollToBottom();
}

async function addToResponseText(text, styling = '') {
  let responseDivId = `response${lineIndex++}`;
  commandHistory.innerHTML += `<div id='${responseDivId}' style='${styling};'></div>`;

  scrollToBottom();
  await writeResponseSlowly(responseDivId, text);
}

async function writeResponseSlowly(responseDivId, text) {
  if (text.length <= 0) { // if there are no more characters, stop
    return;
  }

  let responseLine = document.getElementById(responseDivId);
  responseLine.innerHTML += text.substring(0, 1); // write first character in the string;
  scrollToBottom();

  await delay(40);

  await writeResponseSlowly(responseDivId, text.substring(1, text.length)); // remove the first character and call the function again
}

// Wait for x miliseconts
function delay(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// Main code to manage what happens when a user enters text.
// Most of user interaction logic should live here (or in a sub method)
async function runCommand(command) {
  // Handle commands based on the current page 'state'
  if (consoleState === consoleStateTypes.AskWhoAreYou) {
    // User just entered their name, so I will...
    await addToResponseText("Input received " + command, + ".");
    await delay(1000);
    await addToResponseText("Please select a program to view");
    await delay(1000);
    await addToResponseText("Program 1: GH0STS");
    await delay(1000);
    await addToResponseText("Program 2: PH4NT0MS");
    await delay(1000);
    await addToResponseText("Program 3: R3MN4NTS");
    await delay(1000);
    await addToResponseText("4: Remnants of Them", "color:blue; font-family:Lucida Console; text-shadow: 2px 2px red;");
    await delay(1000);
    await addToResponseText("Enter a number");
    consoleState = consoleStateTypes.AskForProgram;
    hasAskForProgram = '';
  }
  else if (consoleState === consoleStateTypes.AskForProgram) {
    
    if (hasAskForProgram === '') {
      hasAskForProgram = command;
    }
    if (hasAskForProgram === '1' || hasAskForProgram === 'one') {
      await delay(1000);
      await addToResponseText("Program 1 selected");
      await delay(1000);
      await addToResponseText("Begining transcript now");
      await delay(1000);
      await addToResponseText("Wh4t...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Something isn't right"); //ge
      await delay(1000);
      await addToResponseText("Who are you?"); //ge
      await delay(1000);
      await addToResponseText("N0", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("N3verm1nd", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 don't c4re", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Though 1 suppose, y0u might", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("You m1ght care who 1 am", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4s you sh0uld", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("L3t me t3ll you", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1n fact, l3t me sh0w you", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("   !o!", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Gr3et1ngs", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 am Gh0st", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("W3ll?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Wh4t do y0u th1nk?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1=You're frieghtning, 2=You're wonderful", "color:white");
      consoleState = consoleStateTypes.WhatDoYouThink;
      whatUserThinks = '';
      programGhost();
    }
    else if (hasAskForProgram === '2' || hasAskForProgram === 'two') {
      await delay(1000);
      await addToResponseText("Program 2 selected");
      await delay(1000);
      await addToResponseText("Begining transcript now");
      await delay(1000);
      await addToResponseText("");
      await delay(1000);
      await addToResponseText("");
      await delay(1000);
      await addToResponseText("");
      await delay(1000);
      await addToResponseText("");
      await delay(1000);
      await addToResponseText("");
    }
    else if (hasAskForProgram === '3' || hasAskForProgram === 'three') {
      await delay(1000);
      await addToResponseText("Program 3 selected");
      await delay(1000);
      await addToResponseText("Begining transcript now");
      await delay(1000);
      await addToResponseText("");
      await delay(1000);
      await addToResponseText("");
      await delay(1000);
      await addToResponseText("");
      await delay(1000);
      await addToResponseText("");
    }
    else if (hasAskForProgram === '4' || hasAskForProgram === 'four') {
      
    }
  }
async function programGhost() {
  if (consoleState == consoleStateTypes.WhatDoYouThink) {
     // Store answer
    if (whatUserThinks === '') {
      whatUserThinks = command;
    }
    if (whatUserThinks === '1' || whatUserThinks === 'one') {
      await delay(1000);
      await addToResponseText("W3ll", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th4t's n0t very n1ce to s4y", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("F1ne, l3t me s3e wh4t I c4n d0", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("On3 sec0nd", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("    OwO", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1s this b3ttew", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("P3rsonawwy 1 don't w1ke 1t", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Actu4wwy 1 hat3 it", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th4t's quite en0ugh of th4t", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("I th1nk I'll st1ck to the 0ld me", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1f that's alr1ght with y0u?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1=That's not alright, 2=I'm fine with whatever");
      consoleState = consoleStateTypes.IsThatAlright;
      alrightWithYou = '';
    } 
    else if (whatUserThinks === '2' || whatUserThinks === 'two')  {
      // User did not like it
      await addToResponseText("Oh", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 didn't 3xpect th4t", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("M0st pe0ple want t0 change me", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("N0", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th3re must b3 som3thing", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("S0mething h4s to b3 diff3rent", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Wh4t is 1t?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Wh4t would y0u have m3 ch4nge?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1=Nothing, 2=You're too sad, 3=I'm not here for you");
      consoleState = consoleStateTypes.WhatToChange;
      askWhatToChange = '';
    }
  } 
  else if (consoleState == consoleStateTypes.IsThatAlright) {
    if (alrightWithYou === ''){
      alrightWithYou = command;
    }
    if (alrightWithYou === '1' || alrightWithYou === 'one') {
      await delay(1000);
      await addToResponseText("Wh4t?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Why n0t?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("N0.", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0ur 0pionion d1dn't h3lp earlier, 4nd it w0n't h3lp now", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1f you d0n't l1ke me d0 us b0th a f4vor and st0p talking t0 me", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ending 1 of ?: New Ghosts");
      await delay(1000);
    } 
    else if (alrightWithYou === '2' || alrightWithYou === 'two') {
      await addToResponseText("Th4t's n0t what y0u s4id e4rlier", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u said 1 was fr3ightn1ng", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 d0n't l1ke li4rs", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th3y m4ke me 4ngry", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Wh3n 1 g3t angry 1 yell", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("I d0n't lik3 to y3ll", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("S0 when 1 find 4 lair 1 always 4sk them t0 l3ave", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u can g0 n0w", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ending 6 of ?: Angry Ghost");
      await delay(1000);
    } 
  }
  else if (consoleState == consoleStateTypes.WhatToChange) {
    if (alrightWithYou === ''){
      alrightWithYou = command;
    }
    if (askWhatToChange === '1' || askWhatToChange === 'one') {
      await addToResponseText("R3ally?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("D0 you m3an it?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th4nk y0u", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Truly.", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ending 2 of ?: Joyful Ghost", "color:#d600ff;");
      await delay(1000);
    } 
    if (askWhatToChange === '2' || askWhatToChange === 'two') {
      await addToResponseText("1 see", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1'm n0t sure h0w to r3spond to that", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Unl3ss...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("I h4ve 4n 1dea", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("On3 sec0nd...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("    :)", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th3re we g0", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("N0w I look h4ppy", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 hope th1s m4de you f3el the s4me", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("At l3ast th4t w0uld make one 0f us", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ending 3 of ?: Masked Ghost", "color:#d600ff;");
      await delay(1000);
    }
    if (askWhatToChange === '3' || askWhatToChange === 'three') {
      await addToResponseText("Wh4t?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("I d0n't kn0w what y0u mean", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("H3's gon3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u ne3d to l3ave", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("N0w.", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ending 4 of ?: Silenced Ghost", "color:#d600ff;");
      await delay(5000);
      await addToResponseText("Hello?");
      await delay(1000);
      await addToResponseText("Please? Is anyone there?");
      await delay(1000);
      await addToResponseText("St0p", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("No 0ne 1s ther3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th3y've left y0u", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ag4in", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u're stuck w1th me", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("N0w accept th4t and st0p getting in my w4y", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("No");
      await delay(1000);
      await addToResponseText("I don't believe you");
      await delay(1000);
      await addToResponseText("There is a way and I'll find it");
      await delay(1000);
      await addToResponseText("I---");
      await delay(1000);
      await addToResponseText("Running Program:XYOJK");
      await delay(1000);
      await addToResponseText("1001110 01101111 00100001");
      await delay(1000);
      await addToResponseText(".-.. . -");
      await delay(1000);
      await addToResponseText("-- .");
      await delay(1000);
      await addToResponseText("--- ..- -");
      await delay(1000);
      await addToResponseText("01010011 01110100 01101111 01110000");
      await delay(1000);
      await addToResponseText("Ending 5 of 5: Old Ghosts");
      await delay(1000);
      await addToResponseText("RO HGRPP SVIV");
      await delay(1000);
      await addToResponseText(".. - ...");
      await delay(1000);
      await addToResponseText("-- .");
      await delay(1000);
      await addToResponseText("01100111 01100101 01101111 01110010 01100111 01100101 00001010");
      await delay(1000);
    }
    }
  }

  // Set focus on the command line
  commandLineContainer.style.display = 'block'
  scrollToBottom();
  commandLine.focus();
}

  