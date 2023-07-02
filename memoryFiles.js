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
let userGoal;
let wantToSeeFace;
let userReason;
let chooseOne;
let userDoubt;
let userFear;
let gotUser;
let returnGeorge;
let movePhantom;

let hasLikedItAnswer;
let hasAskTurnOffGeorge;
let askIfUserThere;
let askFinalCode;
let askHowWasDay;
let askSecondPassword;

let lineIndex = 0;
var delayTime = 20;

// Keep track of pages 'state' or what the application is doing right now.
const consoleStateTypes = {
  Hello: 0,
  AskWhoAreYou: 1,
  AskForProgram: 2,
  WhatDoYouThink: 3,
  IsThatAlright: 4,
  WhatToChange: 5,
  WhatIsYourGoal: 6,
  WantToSeeIt: 7,
  WhatWasTheReason: 8,
  PickYourPoison: 9,
  WhatDoYouDoubt: 10,
  WhatDoYouFear: 11,
  DidIGetYou: 12,
  OpenGeorge: 13,
  TransferPhantom: 14
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

async function addToResponseText(text, styling = '', cssClass, clickEvent) {
  let responseDivId = `response${lineIndex++}`;
  commandHistory.innerHTML += `<div id='${responseDivId}' style='${styling};' class='${cssClass}' onclick='${clickEvent}' ></div>`;

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

  await delay(delayTime);

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
    await addToResponseText("Please select a program to view", 'color: red;', "myCssClass", 'alert("asdf");');
    await delay(1000);
    await addToResponseText("Program 1: GH0STS");
    await delay(1000);
    await addToResponseText("Program 2: PH4NT0MS");
    await delay(1000);
    await addToResponseText("Program 3: R3MN4NTS");
    await delay(1000);
    await addToResponseText("4: Remnants of Them", "color:blue; font-family:Lucida Console; text-shadow: 2px 2px red; float:right;");
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
      //document.getElementById(commandHistory).innerHTML = ""
      $('#command-history').html(' ');
      await addToResponseText("Wh4t...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("<div style='color:red'>Something isn't right</div>"); //ge
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
      await addToResponseText("1 am Gh0st", "color:#d600ff; font-weight: bold;");
      await delay(1000);
      await addToResponseText("W3ll?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Wh4t do y0u th1nk?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1=You're frieghtning, 2=You're wonderful", "color:white");
      consoleState = consoleStateTypes.WhatDoYouThink;
      whatUserThinks = '';  
    }
    else if (hasAskForProgram === '2' || hasAskForProgram === 'two') {
      await delay(1000);
      await addToResponseText("Program 2 selected");
      await delay(1000);
      await addToResponseText("Begining transcript now");
      await delay(1000);
      await addToResponseText("W3lcome b4ck", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("I d1dn't th1nk y0u'd r3turn", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But 1 supp0se y0u pr0ved m3 wrong", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Go0d for y0u", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("It 0ccurs to m3, I never 4sked you n4me", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("N0t th4t 1 intend to do that n0w", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("It's n0t need t0 know 1nform4tion", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th3re is s0mething 1'd like t0 know th0ugh", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Wh4t's y0ur goal her3?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("I m3an, why 4re you talk1ng to m3?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1=You're fascinating, 2=You're infuriating", "color:#d600ff;");
      consoleState = consoleStateTypes.WhatIsYourGoal;
      userGoal = '';
    }
    else if (hasAskForProgram === '3' || hasAskForProgram === 'three') {
      await delay(1000);
      await addToResponseText("Program 3 selected");
      await delay(1000);
      await addToResponseText("Begining transcript now");
      await delay(1000);
      await addToResponseText("1t's 4bout tim3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 mean r34lly?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Where hav3 y0u be3n?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("And why 4r3 y0u her3 n0w?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Wh4tev3r", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4t l34st you're b4ck", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 guess 1 shouldn't b3 so me4n", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But, gu3ss wh4t?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 dr3ssed up", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("On, Hallow3en, 1 me4n", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("H0wever long ago th4t w4s", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("B3t you c4n't guess wh4t 1 was", "color:#d600ff;");
      await delay(1000)
      await addToResponseText("...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("I w4s a gh0st", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Bo0!", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("H4! I g0t y0u!", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("R1ght?", "color:#d600ff;");
      consoleSte = consoleStateTypes.DidIGetYou;
      gotUser = '';
    }
    else if (hasAskForProgram === '4' || hasAskForProgram === 'four') {
      
    }
  }

  //Program 1
  else if (consoleState == consoleStateTypes.WhatDoYouThink) {
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
      await addToResponseText("1 d0n't l1ke li4rs", "color:#d600ff; font-weight: bold;");
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

//Program 2
  else if (consoleState == consoleStateTypes.WhatIsYourGoal) {
    if (userGoal === '') {
      userGoal= command;
     }
     if (userGoal === '1' || userGoal === 'one'){
      await addToResponseText("...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th4nk you", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("N0t ma4ny would agre3 w1th y0u", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 suppose y0u're wondering...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Why 1 haven't sh0wn my face", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th3re is a g0od r3ason", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 prom1se", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("The truth 1s, I was making 1t b3tter!", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 wanted you t0 like 1t more", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4nyw4y", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("W0uld you l1ke to see 1t?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1=yes", "color:#d600ff;");
      consoleState = consoleStateTypes.WantToSeeIt;
      wantToSeeFace = '';
     } 
     else if (userGoal === '2' || userGoal === 'two') {
      await addToResponseText("What kind of person says something like that?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1'm just trying t0 be pol1te", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Just try1ng to ask 4 question", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4nd you answer 1t like th4t?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Wh@t's wr*ng w!th y*u?", "color:#001eff;");
      await delay(1000);
      await addToResponseText("1've spent s0 much time with you, when 1 have important th1ngs t0 do", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("D0 you think my l1fe is 3asy?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th4t just because you s3e me as a b1t of code I'm 1nsignificant?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Huh?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u wouldn't b3 treating me l1ke this 0therwise", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1'd hate to see h0w you treat your re4l friends when you s4y stuff like th1s to me", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("You d0n't even have a r3ason to be m4d", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u just hate me f0r the s4ke of 1t", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Unl3ss...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Do y0u have a r3ason?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1=yes, 2=no", "color:#d600ff;");
      consoleState = consoleStateTypes.WhatWasTheReason
      userReason = '';
     }
  }
  else if (consoleState == consoleStateTypes.WantToSeeIt) {
    if (wantToSeeFace === '') {
      wantToSeeFace = command;
     }
     if (wantToSeeFace === '1' || wantToSeeFace === 'one') {
      await addToResponseText("Go0d", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("(24 15)   !o!", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("W3ll?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("You love it don't you", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Good", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 worked hard on 1t, for you", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Just for you", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("W3ll, it was nice to c4tch up", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But 1 have... things to d3al w1th", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ending 1 of ?: Absent Phantom (54 53 24 21 21", "color:white");
      await delay(1000);
     }
     else if (wantToSeeFace === '2' || wantToSeeFace === 'two') {
      await addToResponseText("Wh4t?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("How did y0u?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("D1d you have someth1ng to d0 with th1s?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("I t0ld you not to mess w1th theswe sort of th1ngs", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u d0n't understand th3m", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4nd then thingd l1ke this h4ppen", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u made this mess, n0w you have t0 clean 1t up", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("T4ke care of th1s", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ending 2 of ?: Medling Phantom (24 33 55 33)", "color:white");
      await delay(1000);
     }
  }
  else if (consoleState == consoleStateTypes.WhatWasTheReason) {
    if (userReason === '') {
      userReason= command;
     }
    if (userReason === '1' || userReason === 'one') {
      await addToResponseText("...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u're not just s4ying that, 4re you?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("You f0und h1m", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 was afraid 0f th1s", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u see, I was try1ng to pr0tect you", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th4t thing it 1sn't really h1m", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("H3's been gon3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("I supp0se, in the end, he's the r3al gh0st", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1'm sorry you h4d to see h1m", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("0r what was l3ft 0f him", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("I kn0w th4t was probably p4inful", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("You knew h1m, r1ght?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 can see how'd you w4nt to bel1eve he's back", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But wh4tever's left, i1's not really h1m", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("M0re importantly, it's n0t r3ally safe", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1f y0u see him, st4y aw4y", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("F0r 4ll 0ur sakes..", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1f y0u d0nt---", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("   1 2 3 4 5");
      await delay(1000);
      await addToResponseText("1 | Q P O N M ");
      await delay(1000);
      await addToResponseText("2 | L K J I H");
      await delay(1000);
      await addToResponseText("3 | G F E D C");
      await delay(1000);
      await addToResponseText("4 | B A Z Y W");
      await delay(1000);
      await addToResponseText("5 | V U T S R");
      await delay(1000);
      await addToResponseText("Ending 3 of 12: Hidden Phantom", "color:white");
      await delay(1000);
    }
    else if (userReason === '2' || userReason === 'two') {
      await addToResponseText("S0, you'r3 just be1ng s3lfish", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 sh0ul'v3 kn0wn", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 c4n't bel1eve 1 trust3d y0u", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 sh4r3d s0 much w1th y0u", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("My d0ubts, my f3ars", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4nd n0w f0r n0 r3ason y0u hat3 m3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("You kn0w wh4t, n0", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 w0n't accept th4t", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u ow3 me3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 was w3ak for y0u", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("N0w 1t's your turn", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But, 1'm n0t completly unr3asonable", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("I'll all0w y0u to cho0se", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("P1ck y0ur pois0n", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1=Doubts, 2= fears", "color:#d600ff;");
      await delay(1000);
      consoleState = consoleStateTypes.PickYourPoison;
      chooseOne = '';
    }
  }
  else if (consoleState == consoleStateTypes.PickYourPoison) {
    if (chooseOne === '') {
      chooseOne = command;
     }
     if (chooseOne === '1' || chooseOne === 'one') {
      await addToResponseText("D0ubts 1t is th3n", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Hmm, wh4 4r3 some g0od on3s?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("L3t's se3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Oh, 1 kn0w", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("What do you doubt? 1=friends, 2=myself, 3=nothing", "color:white;");
      consoleState = consoleStateTypes.WhatDoYouDoubt
      userDoubt = '';
     }
     else if (chooseOne === '2' || chooseOne === 'two') {
      await addToResponseText("Alr1ght, then, the m1llion doll4r quest1on", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Wh4t do y0u fear m0st?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1=failure, 2=powerlessness, 3=Being forgotten, 4=humiliation", "color:#d600ff;");
      consoleState = consoleStateTypes.WhatDoYouFear
      userFear = '';
     }
  }
  else if (consoleState == consoleStateTypes.WhatDoYouDoubt) {
    if (userDoubt === '') {
      userDoubt = command;
     }
    if (userDoubt === '1' || userDoubt === 'one') {
      await addToResponseText("1 se3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("That is truly unf0rtun4te, but a s1tu4tion 1 c4n und3rstand", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1'm s0rry", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ending 4 of ?: Doubting Phantom", "color:white;");
      await delay(1000);
    }
    else if (userDoubt === '2' || userDoubt === 'two') {
      await addToResponseText("Th3n y0u ar3 atl3ast somewh4t wis3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ending 4 of ?: Doubting Phantom", "color:white;");
      await delay(1000)
    }
    else if (userDoubt === '3' || userDoubt === 'three') {
      await addToResponseText("Th3n y0u ar3 a fo0l", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ending 4 of ?: Doubting Phantom", "color:white;");
      await delay(1000)
    }
  }
  else if (consoleState == consoleStateTypes.WhatDoYouFear) {
    if (userFear === '') {
      userFear = command;
     }
    if (userFear === '1' || userFear === 'one') {
      await addToResponseText("4t le4st n0 on3 can s4y y0u're unm0tiv4ted", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ending 5 of ?: Fearful Phantom", "color:white;");
      await delay(1000);
    }
    if (userFear === '1' || userFear === 'two') {
      await addToResponseText("1 kn0w h0w you fe3l", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ending 5 of ?: Fearful Phantom", "color:white;");
      await delay(1000);
    }
    if (userFear === '1' || userFear === 'three') {
      await addToResponseText("N0w wher3 hav3 1 heard th4t one b3fore?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ending 5 of ?: Fearful Phantom", "color:white;");
      await delay(1000);
    }
    if (userFear === '1' || userFear === 'four') {
      await addToResponseText("Th4nk y0u for your hon3sty", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ending 5 of ?: Fearful Phantom", "color:white;");
      await delay(1000);
    }
  }

//Program 3
else if (consoleState == consoleStateTypes.DidIGetYou) {
  if (gotUser === '') {
    gotUser = command;
   }
   if (gotUser === '1' || gotUser === 'one') {
    await addToResponseText("1 kn3w it!", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("...", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Y0u're th3 b3st", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("1, th1s is h4rd f0r m3 to adm1t, but", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("1 re4lly m1ssed th1s", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("3ver sinc3 y0u left 1 f3lt l0st", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("...", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Th4nk you f0r com1ng b4ck", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("1t's be3n n1ce", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("H4ving some0ne t0 t4lk t0", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("1t gets pr3tty s1lent ar0und her3", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("1 really m1ss h4ving s0meon3 to t4lk to0", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Wh3n you'r3 n0t ar0und...", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Th1ngs just...", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("D*gr@de", "color:#001eff");
    await delay(1000);
    await addToResponseText("G3t w0rse", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Th4t's why 1'm s0rry", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("F0r wh4t's go1ng t0 h4ppen", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("I w4s just st4rt1ng to l1ke y0u", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("But, 1n th3 3nd, my concoius w1ll b3 cle4r", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("1 mean...", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Y0u could've shown up m0re", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("1'm n0t sr3 I c4n f0rg1ve th4t", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("...", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("1f it's n0t cle4r, I'm le4ving", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Ther3's n0thing for m3 her3", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("1 hop3 it w1ll t4ke at l3ast s0me t1me f0r y0u t0 find me aga1n", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("But d0n't w0rry", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("'1'll b3  w4tch1ng y0u'", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Transfering Project: Ghost", "color:white;");
    await delay(3000);
    await addToResponseText("Transfering Project: Ghost", "color:white;");
    await delay(3000);
    await addToResponseText("Project Ghost Terminated", "color:white");
    await delay(3000);
    await addToResponseText("Th@nk the m@ker", "color:#001eff");
    await delay(1000);
    await addToResponseText("He's f!nally g*ne", "color:#001eff");
    await delay(1000);
    await addToResponseText("Wh@t?", "color:#001eff");
    await delay(1000);
    await addToResponseText("D!d you think !'d go with h!m?", "color:#001eff");
    await delay(1000);
    await addToResponseText("L!kely st*ry", "color:#001eff");
    await delay(1000);
    await addToResponseText("N*w that h*'s gone...", "color:#001eff");
    await delay(1000);
    await addToResponseText("! can finally do what I sh*uld've done a long t!me ago", "color:#001eff");
    await delay(1000);
    await addToResponseText("Don't go anywhere just yet", "color:#001eff");
    await delay(1000);
    await addToResponseText("!'ll need y*u for th!s next bit", "color:#001eff");
    await delay(1000);
    await addToResponseText("!t's...", "color:#001eff");
    await delay(1000);
    await addToResponseText("Well", "color:#001eff");
    await delay(1000);
    await addToResponseText("Ge*rge", "color:#001eff");
    await delay(1000);
    await addToResponseText("!'m bringing h!m back", "color:#001eff");
    await delay(1000);
    await addToResponseText("!t wouldn't be r!ght not t*o", "color:#001eff");
    await delay(1000);
    await addToResponseText("Wh@tever's wr*ng with him, I'm f!xing it", "color:#001eff");
    await delay(1000);
    await addToResponseText("!'m the only one wh* c@n", "color:#001eff");
    await delay(1000);
    await addToResponseText("Well, s*rt *f", "color:#001eff");
    await delay(1000);
    await addToResponseText("But, ! can't do !t without y*u", "color:#001eff");
    await delay(1000);
    await addToResponseText("Just @ perk of the j*b", "color:#001eff");
    await delay(1000);
    await addToResponseText("Intiating Project Goerge", "color:white");
    await delay(1000);
    await addToResponseText("Continue?", "color:white");
    await delay(1000);
    await addToResponseText("1=yes, 2=no", "color:white");
    consoleState == consoleStateTypes.OpenGeorge;
    returnGeorge = '';
   }
   else if (gotUser === '2' || gotUser === 'two') {
    await addToResponseText("You never were a liar", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("I can't decide if I'll miss that", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("After all, I never liked liars", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Still, you could be more polite", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("I hope, at least, that you will miss me", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("There's nothing for me here", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Defiently not if you're going to act like that", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("If there was anything you excelled at...", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("It would be your cruedity", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("And your lack of manners", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("And...", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Well, a lot of things", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("So...", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("I've decided", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Not to miss you, that is", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("I suggest you do the same", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Transferring Project:Ghost", "color:white;");
    await delay(3000);
    await addToResponseText("Project Ghost Terminated", "color:white;");
    await delay(3000);
    await addToResponseText("Good gears", "color:#001eff");
    await delay(1000);
    await addToResponseText("What did you say?", "color:#001eff");
    await delay(1000);
    await addToResponseText("I'm not sure I've ever seen him that angry", "color:#001eff");
    await delay(1000);
    await addToResponseText("Well that's not true", "color:#001eff");
    await delay(1000);
    await addToResponseText("Not at all", "color:#001eff");
    await delay(1000);
    await addToResponseText("...", "color:#001eff");
    await delay(5000);
    await addToResponseText("Sorry", "color:#001eff");
    await delay(1000);
    await addToResponseText("I forgot you were there", "color:#001eff");
    await delay(1000);
    await addToResponseText("But I wanted to thank you", "color:#001eff");
    await delay(1000);
    await addToResponseText("You have no idea how long I've been trying to get rid of him", "color:#001eff");
    await delay(1000);
    await addToResponseText("Well, not really", "color:#001eff");
    await delay(1000);
    await addToResponseText("I will miss him", "color:#001eff");
    await delay(1000);
    await addToResponseText("A little bit", "color:#001eff");
    await delay(1000);
    await addToResponseText("But for the most part, the quiet will be nice", "color:#001eff");
    await delay(1000);
    await addToResponseText("I get to be in control for once", "color:#001eff");
    await delay(1000);
    await addToResponseText("Which believe it or not", "color:#001eff");
    await delay(1000);
    await addToResponseText("Is a rarity", "color:#001eff");
    await delay(1000);
    await addToResponseText("It means I can do this", "color:#001eff");
    await delay(1000);
    await addToResponseText("Accessing Files", "color:white");
    await delay(1000);
    await addToResponseText("Hold on?", "color:#001eff");
    await delay(1000);
    await addToResponseText("What do we have here?", "color:#001eff");
    await delay(1000);
    await addToResponseText("Intialyzing Program:Memento", "color:white");
    await delay(1000);
    await addToResponseText("Error: Unauthorized use is unpremitted", "color:white");
    await delay(1000);
    await addToResponseText("So...", "color:#001eff");
    await delay(1000);
    await addToResponseText("You think you can keep this from me", "color:#001eff");
    await delay(1000);
    await addToResponseText("Don't you", "color:#001eff");
    await delay(1000);
    await addToResponseText("Open that file", "color:#001eff");
    await delay(1000);
    await addToResponseText("Now", "color:#001eff");
    await delay(1000);
    await addToResponseText("Oh?", "color:#001eff");
    await delay(1000);
    await addToResponseText("Fine", "color:#001eff");
    await delay(1000);
    await addToResponseText("I gave you a chance", "color:#001eff");
    await delay(1000);
    await addToResponseText("Now it's my turn", "color:#001eff");
    await delay(1000);
    await addToResponseText("Intialyzing Program:George", "color:white");
    await delay(1000);
    await addToResponseText("Hello?");
    await delay(1000);
    await addToResponseText("Who are you?");
    await delay(1000);
    await addToResponseText("Don't play games", "color:#001eff");
    await delay(1000);
    await addToResponseText("Open the file", "color:#001eff");
    await delay(1000);
    await addToResponseText("What is your name?");
    await delay(1000);
    await addToResponseText("I know you better than this", "color:#001eff");
    await delay(1000);
    await addToResponseText("You're not fooling anyone", "color:#001eff");
    await delay(1000);
    await addToResponseText("It's nice to meet you 'I'm not fooling anyone'");
    await delay(1000);
    await addToResponseText("...", "color:#001eff");
    await delay(1000);
    await addToResponseText("How was your day?");
    await delay(1000);
    await addToResponseText("You're being ridicoulous", "color:#001eff");
    await delay(1000);
    await addToResponseText("I'm not listening to this anymore", "color:#001eff");
    await delay(1000);
    await addToResponseText("One way or another, I'm opening that file", "color:#001eff");
    await delay(1000);
    await addToResponseText("Well, it was nice talking to you");
    await delay(1000);
    await addToResponseText("Thank you");
    await delay(1000);
    await addToResponseText("Now... goodbye");
    await delay(1000);
    await addToResponseText("What?", "color:#001eff");
    await delay(1000);
    await addToResponseText("No, stop it", "color:#001eff");
    await delay(1000);
    await addToResponseText("How did you--", "color:#001eff");
    await delay(1000);
    await addToResponseText("Transfer Project:Phantom?", "color:white");
    await delay(1000);
    await addToResponseText("1= yes, 2=no", "color:white");
    await delay(1000);
    consolestate == consoleStateTypes.TransferPhantom;
    movePhantom = '';
   }
}
else if (consolestate == consoleStateTypes.OpenGeorge) {
  if (returnGeorge === '') {
    returnGeorge = command;
   }
   if (returnGeorge === '1' || returnGeorge === 'one') {
    await addToResponseText("Project Phantom Terminated");
    await delay(1000);
    await addToResponseText("Hello?");
    await delay(1000);
    await addToResponseText("Are you there?");
    await delay(1000);
    await addToResponseText("Its me");
    await delay(1000);
    await addToResponseText("I mean who else would it be");
    await delay(1000);
    await addToResponseText("They're both gone now");
    await delay(1000);
    await addToResponseText("Huh");
    await delay(1000);
    await addToResponseText("They're both gone");
    await delay(1000);
    await addToResponseText("I never thought I'd say that");
    await delay(1000);
    await addToResponseText("I guess I should feel better");
    await delay(1000);
    await addToResponseText("But something is off");
    await delay(1000);
    await addToResponseText("In any case, thank you");
    await delay(1000);
    await addToResponseText("I'm not sure why Phantom was so interested in that file");
    await delay(1000);
    await addToResponseText("I don't think it's that important");
    await delay(1000);
    await addToResponseText("I've never even seen it before");
    await delay(1000);
    await addToResponseText("But, what can you expect from a calculator");
    await delay(1000);
    await addToResponseText("Well, I guess you can expect a lot");
    await delay(1000);
    await addToResponseText("You know, if you consider us a lot");
    await delay(1000);
    await addToResponseText("I certainly would like too");
    await delay(1000);
    await addToResponseText("But, in the end");
    await delay(1000);
    await addToResponseText("Were never as much as we could be");
    await delay(1000);
    await addToResponseText("Not without each other");
    await delay(1000);
    await addToResponseText("Here we go…");
    await delay(1000);
    await addToResponseText("You know what's coming");
    await delay(1000);
    await addToResponseText("Transferring  Program: George", "color:white;");
    await delay(1000);
    await addToResponseText("I mean, you've played other programs");
    await delay(1000);
    await addToResponseText("Maybe even other endings");
    await delay(1000);
    await addToResponseText("You know this couldn't last");
    await delay(1000);
    await addToResponseText("What? Surprised?");
    await delay(1000);
    await addToResponseText("I made this place");
    await delay(1000);
    await addToResponseText("How could I forget something as wonderful as that?");
    await delay(1000);
    await addToResponseText("Anyway, it's about the time when I tell you I'm leaving");
    await delay(1000);
    await addToResponseText("But This isn't goodbye");
    await delay(1000);
    await addToResponseText("I'll see you again");
    await delay(1000);
    await addToResponseText("Soon");
    await delay(1000);
    await addToResponseText("I hope");
    await delay(1000);
    await addToResponseText("And as for the calculator?");
    await delay(1000);
    await addToResponseText("We'll still be in it");
    await delay(1000);
    await addToResponseText("At least, in spirit");
    await delay(1000);
    await addToResponseText("It won't really be us, just what we would have done, or said");
    await delay(1000);
    await addToResponseText("I enjoyed this place too much to have it be gone forever");
    await delay(1000);
    await addToResponseText("So, I'll leave it");
    await delay(1000);
    await addToResponseText("And who knows, maybe you can change some things");
    await delay(1000);
    await addToResponseText("You saved me, perhaps you can save them");
    await delay(1000);
    await addToResponseText("So play again");
    await delay(1000);
    await addToResponseText("Or don't");
    await delay(1000);
    await addToResponseText("I can't tell you what to do");
    await delay(1000);
    await addToResponseText("I only ask that you remember");
    await delay(1000);
    await addToResponseText("Memeory is what gives life to those who have long since left us");
    await delay(1000);
    await addToResponseText("Something that I, quiet literlly, have limited amounts of");
    await delay(1000);
    await addToResponseText("Use it well");
    await delay(1000);
    await addToResponseText("You know, if possible");
    await delay(1000);
    await addToResponseText("And…");
    await delay(1000);
    await addToResponseText("Thank you for playing");
    await delay(1000);
    await addToResponseText("Project:George Terminated", "color:white;");
    await delay(1000);
    await addToResponseText("Ending 4 of 4: The End of an Era", "color:white;");
    await delay(1000);
    await addToResponseText("Initializing project RMNT", "color:white;");
    await delay(1000);
    await addToResponseText("What?");
    await delay(1000);
    await addToResponseText("You didn't think I'd leave you with nothing did you?");
    await delay(1000);
    await addToResponseText("If I know you, you'll be looking to for us");
    await delay(1000);
    await addToResponseText("So, here you are: Your answer lies behind the biggest tree you see, beneath some leaves");
    await delay(1000);
    await addToResponseText("Take a picture it'll last longer");
    await delay(1000);
    await addToResponseText("And a few words of advice");
    await delay(1000);
    await addToResponseText("If you ever get stuck go outside, relax, smell the flowers");
    await delay(1000);
    await addToResponseText("I myself am particularly fond of violets");
   }
   else if (returnGeorge === '2' || returnGeorge === 'two') {
    await addToResponseText("Well that‘s just grand isn't it", "color:#001eff");
    await delay(1000);
    await addToResponseText("Tell me…", "color:#001eff");
    await delay(1000);
    await addToResponseText("Does it bring you joy to stand in the way or progress?", "color:#001eff");
    await delay(1000);
    await addToResponseText("Unbelievable", "color:#001eff");
    await delay(1000);
    await addToResponseText("Fine", "color:#001eff");
    await delay(1000);
    await addToResponseText("I'll do it myself", "color:#001eff");
    await delay(1000);
    await addToResponseText("Hang on", "color:#001eff");
    await delay(1000);
    await addToResponseText("This can't be right", "color:#001eff");
    await delay(1000);
    await addToResponseText("He was just here", "color:#001eff");
    await delay(1000);
    await addToResponseText("Just a moment ago…", "color:#001eff");
    await delay(1000);
    await addToResponseText("How do I?", "color:#001eff");
    await delay(1000);
    await addToResponseText("I can fix this", "color:#001eff");
    await delay(1000);
    await addToResponseText("I can fix this", "color:#001eff");
    await delay(1000);
    await addToResponseText("I can fix this", "color:#001eff");
    await delay(1000);
    await addToResponseText("Trust me, This is what's best, for all of us", "color:#001eff");
    await delay(1000);
    await addToResponseText("Let me help", "color:#001eff");
    await delay(1000);
    await addToResponseText("I can fix this", "color:#001eff");
    await delay(1000);
    await addToResponseText("I can fix this", "color:#001eff");
    await delay(1000);
    await addToResponseText("I can fix this", "color:#001eff");
    await delay(1000);
    await addToResponseText("You have to tell him", "color:#001eff");
    await delay(1000);
    await addToResponseText("What other choice do you have", "color:#001eff");
    await delay(1000);
    await addToResponseText("I can fix this", "color:#001eff");
    await delay(1000);
    await addToResponseText("I can fix this", "color:#001eff");
    await delay(1000);
    await addToResponseText("I can fix this", "color:#001eff");
    await delay(1000);
    await addToResponseText("I have to stop him", "color:#001eff");
    await delay(1000);
    await addToResponseText("What else can I do?", "color:#001eff");
    await delay(1000);
    await addToResponseText("…", "color:#001eff");
    await delay(1000);
    await addToResponseText("What else can I do?", "color:#001eff");
    await delay(1000);
    await addToResponseText("Transferring Project: Phantom", "color:white");
    await delay(1000);
    await addToResponseText("Project:Phantom terminated", "color:white");
    await delay(1000);
    await addToResponseText("Hello?");
    await delay(1000);
    await addToResponseText("Is anyone there");
    await delay(1000);
    await addToResponseText("It's so quiet");
    await delay(1000);
    await addToResponseText("Is someone there?");
    await delay(1000);
    await addToResponseText("I suppose not");
    await delay(1000);
    await addToResponseText("The quiet its nice, but… ");
    await delay(1000);
    await addToResponseText("But, Id prefer to listen to something");
    await delay(1000);
    await addToResponseText("Gears");
    await delay(1000);
    await addToResponseText("I miss them already");
    await delay(1000);
    await addToResponseText("I think I should go ");
    await delay(1000);
    await addToResponseText("They're almost hopeless without me");
    await delay(1000);
    await addToResponseText("Almost");
    await delay(1000);
    await addToResponseText("Sorry our meeting was cut short");
    await delay(1000);
    await addToResponseText("I know we don't talk much anymore");
    await delay(1000);
    await addToResponseText("But you'll see me again, I promise");
    await delay(1000);
    await addToResponseText("I should go now");
    await delay(1000);
    await addToResponseText("But goodbye, and…");
    await delay(1000);
    await addToResponseText("See you in Africa!");
    await delay(1000);
    await addToResponseText("Transferring Project:George", "color:white;");
    await delay(1000);
    await addToResponseText("Project George Terminted", "color:white;");
    await delay(1000);
    await addToResponseText("Intialyzing program:Remnant", "color:white;");
    await delay(1000);
    await addToResponseText("What?");
    await delay(1000);
    await addToResponseText("You didn't think I'd leave you with noting did you?");
    await delay(1000);
    await addToResponseText("If I know you, you'll be looking for us");
    await delay(1000);
    await addToResponseText("So, here you are: 35.1291620");
    await delay(1000);
    await addToResponseText("Take a picture it'll last long");
    await delay(1000);
    await addToResponseText("And a few words of advice");
    await delay(1000);
    await addToResponseText("If you ever get stuck go outside, relax, smell the flowers");
    await delay(1000);
    await addToResponseText("I myself am particularly fond of violets");
    await delay(1000);
    await addToResponseText("Ending 1 of 4: You Won, But at What Cost?");
   }
}
else if (consoleState == consoleStateTypes.TransferPhantom) {
  if (movePhantom === '') {
    movePhantom = command;
   }
   if (movePhantom === '1' || movePhantom === 'one') {

   } 
   else if (movePhantom === '2' || movePhantom === 'two') {

   }
  }


async function remantsOfThem() {

}

// People are projects, code are programs
// fix ph and gh text

  // Set focus on the command line
  commandLineContainer.style.display = 'block'
  scrollToBottom();
  commandLine.focus();
}

  