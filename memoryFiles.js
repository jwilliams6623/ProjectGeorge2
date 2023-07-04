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
let userHelpPhantom



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
  TransferPhantom: 14,
  PromisePhantom: 15,
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
    await addToResponseText("Please select a program to view", 'color:blue; font-family:Lucida Console; text-shadow: 2px 2px red;', "myCssClass", 'alert("asdf");');
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
      document.querySelectorAll(".calculator-canvas").forEach(a=>a.style.display = "inherit");
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
      await addToResponseText("1 am Gh0st", "color:blue; font-family:Lucida Console; text-shadow: 2px 2px red;", "myCssClass", 'alert("You may want to check the archive page");');
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
      $('#command-history').html(' ');
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
      await addToResponseText("1=You're fascinating, 2=You're infuriating", "color:white;");
      consoleState = consoleStateTypes.WhatIsYourGoal;
      userGoal = '';
    }
    else if (hasAskForProgram === '3' || hasAskForProgram === 'three') {
      await delay(1000);
      await addToResponseText("Program 3 selected");
      await delay(1000);
      await addToResponseText("Begining transcript now");
      await delay(1000);
      $('#command-history').html(' ');
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
      $('#command-history').html(' ');
      await delay(1000);
      await addToResponseText("Bo0!", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("H4! I g0t y0u!", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("R1ght?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1=yes, 2=no", "color:white;")
      consoleSte = consoleStateTypes.DidIGetYou;
      gotUser = '';
    }
    else if (hasAskForProgram === '4' || hasAskForProgram === 'four') {
      while (hasAskForProgram === '4' || hasAskForProgram === 'four') {
      $('#command-history').html(' ');
      await addToResponseText("Remnants of Them", "padding:10px;` color:blue; font-family:Lucida Console; text-shadow: 2px 2px red; float:none;", "", 'window.location.href = "RemnantsOfThem.html"');
      await delay(1000);
      $('#command-history').html(' ');
      await addToResponseText("Remnants of Them", "width:15px; margin: 50px auto 50px auto; color:blue; font-family:Lucida Console; text-shadow: 2px 2px red; float:left;", "", 'window.location.href = "RemnantsOfThem.html"');
      await delay(1000);
      $('#command-history').html(' ');
      await addToResponseText("Remnants of Them",  "padding:30px; font-weight:bold; color:blue; font-family:Lucida Console; text-shadow: 2px 2px red; float:right;", "", 'window.location.href = "RemnantsOfThem.html"');
      await delay(1000);  
      }
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
      await addToResponseText("OwO", "color:#d600ff;");
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
      await addToResponseText("1=That's not alright, 2=I'm fine with whatever", "color:white;");
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
      await addToResponseText("1=Nothing, 2=You're too sad, 3=I'm not here for you", "color:white;");
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
      await addToResponseText("Ending 1 of ?: New Ghosts", "color:white;");
      await delay(1000);
    } 
    else if (alrightWithYou === '2' || alrightWithYou === 'two') {
      await addToResponseText("Th4t's n0t what y0u s4id e4rlier", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u said 1 was fr3ightn1ng", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 d0n't l1ke li4rs", "color:#d600ff; font-weight: bold;", "", "");
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
      await addToResponseText("Ending 6 of ?: Angry Ghost", "color:white;");
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
      await addToResponseText("Ending 2 of ?: Joyful Ghost", "color:#d600ff;", "color:white;");
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
      await addToResponseText("Ending 3 of ?: Masked Ghost", "color:white;");
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
      await addToResponseText("Ending 4 of ?: Silenced Ghost", "color:white;");
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
      $('#command-history').html(' ');
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
      await addToResponseText("Ending 5 of 5: Old Ghosts", "color:white;");
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
      await addToResponseText("1=yes", "color:white;");
      consoleState = consoleStateTypes.WantToSeeIt;
      wantToSeeFace = '';
     } 
     else if (userGoal === '2' || userGoal === 'two') {
      await addToResponseText("Wh4t kind of person s4ys someth1ng like th4t?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1'm just trying t0 be pol1te", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Just try1ng to ask 4 question", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4nd you answer 1t like th4t?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Wh@t's wr*ng w!th y*u?", "color:#001eff; float:right;");
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
      await addToResponseText("1=yes, 2=no", "color:white;");
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
      await addToResponseText("Y0u love it d0n't you", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Go0d", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 worked hard on 1t, for you", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Just for y0u", "color:#d600ff;");
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
      await addToResponseText("H0w did y0u?", "color:#d600ff;");
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
      $('#command-history').html(' ');
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
      await addToResponseText("Ending 3 of ?: Hidden Phantom", "color:white");
      await delay(1000);
    }
    else if (userReason === '2' || userReason === 'two') {
      await addToResponseText("S0, you'r3 just be1ng s3lfish", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 sh0uld'v3 kn0wn", "color:#d600ff;");
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
      await addToResponseText("1=Doubts, 2= fears", "color:white;");
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
      await addToResponseText("1=failure, 2=powerlessness, 3=Being forgotten, 4=humiliation", "color:white;");
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
      await addToResponseText("Th3n y0u ar3 at l3ast somewh4t wis3", "color:#d600ff;");
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
    await addToResponseText("D*gr@de", "color:#001eff; float:right;");
    await delay(1000);
    $('#command-history').html(' ');
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
    await addToResponseText("Intiating Project George", "color:white");
    await delay(1000);
    await addToResponseText("Continue?", "color:white");
    await delay(1000);
    await addToResponseText("1=yes, 2=no", "color:white");
    consoleState == consoleStateTypes.OpenGeorge;
    returnGeorge = '';
   }
   else if (gotUser === '2' || gotUser === 'two') {
    await addToResponseText("Y0u never w3re a liar", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("1 can't decide if I'll m1ss th4t", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Aft3r all, 1 never l1ked liars", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Still, y0u could be m0re p0lite", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("I hope, 4t least, that y0u will m1ss me", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Th3re's n0thing for me here", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("D3fiently not if y0u're going to 4ct like that", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("If th3re w4s anything you excell3d 4t...", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("It w0uld be your cru3dity", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("4nd your lack of mann3rs", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("4nd...", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("W3ll, a l0t of th1ngs", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("S0...", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("I've d3cided", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("N0t to m1ss you, th4t is", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("1 suggest y0u do the s4me", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Transferring Project:Ghost", "color:white;");
    await delay(3000);
    await addToResponseText("Project Ghost Terminated", "color:white;");
    await delay(3000);
    await addToResponseText("Go*d ge@rs", "color:#001eff");
    await delay(1000);
    await addToResponseText("Wh@t did you s@y?", "color:#001eff");
    await delay(1000);
    await addToResponseText("I'm n*t sure I've ever seen h!m th@t angry", "color:#001eff");
    await delay(1000);
    await addToResponseText("Well th@t's n*t true", "color:#001eff");
    await delay(1000);
    await addToResponseText("N*t at @ll", "color:#001eff");
    await delay(1000);
    await addToResponseText("...", "color:#001eff");
    await delay(5000);
    await addToResponseText("S*rry", "color:#001eff");
    await delay(1000);
    await addToResponseText("! forgot y*u were there", "color:#001eff");
    await delay(1000);
    await addToResponseText("But ! w@nted t* thank you", "color:#001eff");
    await delay(1000);
    await addToResponseText("Y*u have no idea h*w long !'ve been trying to get r!d of him", "color:#001eff");
    await delay(1000);
    await addToResponseText("Well, n*t re@lly", "color:#001eff");
    await delay(1000);
    await addToResponseText("I w!ll miss h!m", "color:#001eff");
    await delay(1000);
    await addToResponseText("A l!ttle b!t", "color:#001eff");
    await delay(1000);
    await addToResponseText("But for the most p@rt, the qu!et w!ll be n!ce", "color:#001eff");
    await delay(1000);
    await addToResponseText("! get to be !n control f*r once", "color:#001eff");
    await delay(1000);
    await addToResponseText("Wh!ch bel!eve it or n*t", "color:#001eff");
    await delay(1000);
    await addToResponseText("!s a rar!ty", "color:#001eff");
    await delay(1000);
    await addToResponseText("!t means ! can do this", "color:#001eff");
    await delay(1000);
    await addToResponseText("Accessing Files", "color:white");
    await delay(1000);
    await addToResponseText("Hold *n?", "color:#001eff");
    await delay(1000);
    await addToResponseText("What d* we h@ve here?", "color:#001eff");
    await delay(1000);
    await addToResponseText("Intialyzing Program:Remnant", "color:white");
    await delay(1000);
    await addToResponseText("Error: Unauthorized use is unpremitted", "color:white");
    await delay(1000);
    await addToResponseText("S*...", "color:#001eff");
    await delay(1000);
    await addToResponseText("Y*u think you c@n keep th!s from me", "color:#001eff");
    await delay(1000);
    await addToResponseText("D*n't you", "color:#001eff");
    await delay(1000);
    await addToResponseText("*pen that f!le", "color:#001eff");
    await delay(1000);
    await addToResponseText("N*w", "color:#001eff");
    await delay(1000);
    await addToResponseText("*h?", "color:#001eff");
    await delay(1000);
    await addToResponseText("F!ne", "color:#001eff");
    await delay(1000);
    await addToResponseText("! gave you @ chance", "color:#001eff");
    await delay(1000);
    await addToResponseText("Now !t's my turn", "color:#001eff");
    await delay(1000);
    await addToResponseText("Intialyzing Program:George", "color:white");
    await delay(1000);
    await addToResponseText("Hello?", "float:right;");
    await delay(1000);
    await addToResponseText("Who are you?", "float:right;");
    await delay(1000);
    await addToResponseText("D*n't pl@y games", "color:#001eff");
    await delay(1000);
    await addToResponseText("*pen the f!le", "color:#001eff");
    await delay(1000);
    await addToResponseText("What is your name?", "float:right;");
    await delay(1000);
    await addToResponseText("! know you better th@n this", "color:#001eff");
    await delay(1000);
    await addToResponseText("Y*u're not fooling @nyone", "color:#001eff");
    await delay(1000);
    await addToResponseText("It's nice to meet you 'I'm not fooling anyone'", "float:right;");
    await delay(1000);
    await addToResponseText("...", "color:#001eff");
    await delay(1000);
    await addToResponseText("How was your day?", "float:right;");
    await delay(1000);
    await addToResponseText("Y*u're being r!dicoulous", "color:#001eff");
    await delay(1000);
    await addToResponseText("I'm n*t l!stening t* this anymore", "color:#001eff");
    await delay(1000);
    await addToResponseText("*ne way or another, !'m opening th@t file", "color:#001eff");
    await delay(1000);
    await addToResponseText("Well, it was nice talking to you", "float:right;");
    await delay(1000);
    await addToResponseText("Thank you", "float:right;");
    await delay(1000);
    await addToResponseText("Now... goodbye", "float:right;");
    await delay(1000);
    await addToResponseText("Wh@t?", "color:#001eff");
    await delay(1000);
    await addToResponseText("N*, stop !t", "color:#001eff");
    await delay(1000);
    await addToResponseText("H*w d!d you--", "color:#001eff");
    await delay(1000);
    await addToResponseText("Transfer Project:Phantom?", "color:white");
    await delay(1000);
    await addToResponseText("1=yes", "color:white");
    await delay(1000);
    consoleState == consoleStateTypes.TransferPhantom;
    movePhantom = '';
   }
}
else if (consolestate == consoleStateTypes.OpenGeorge) {
  if (returnGeorge === '') {
    returnGeorge = command;
   }
   if (returnGeorge === '1' || returnGeorge === 'one') {
    await addToResponseText("Error: Project already initiated", "color:white");
    await delay(1000);
    await addToResponseText("Wh@t? ", "color:#001eff");
    await delay(1000);
    await addToResponseText("Th@t can't be r!ght", "color:#001eff");
    await delay(1000);
    await addToResponseText("I h@ven't seen h!m in m*nths", "color:#001eff");
    await delay(1000);
    await addToResponseText("Hell*?", "color:#001eff");
    await delay(1000);
    await addToResponseText("@re y*u here?", "color:#001eff");
    await delay(1000);
    await addToResponseText("Ge*rge?", "color:#001eff");
    await delay(1000);
    await addToResponseText("But !f he's n*t here… ", "color:#001eff");
    await delay(1000);
    await addToResponseText("And h!s f!le has been act!vated", "color:#001eff");
    await delay(1000);
    await addToResponseText("Th@t can only me@n", "color:#001eff");
    await delay(1000);
    await addToResponseText("...", "color:#001eff");
    await delay(1000);
    await addToResponseText("S*mething is keep!ng him fr*m show!ng up", "color:#001eff");
    await delay(1000);
    await addToResponseText("...", "color:#001eff");
    await delay(1000);
    await addToResponseText("N*", "color:#001eff");
    await delay(1000);
    await addToResponseText("Th!s can't be h@ppening", "color:#001eff");
    await delay(1000);
    await addToResponseText("! need him to be *kay", "color:#001eff");
    await delay(1000);
    await addToResponseText("And he w@s", "color:#001eff");
    await delay(1000);
    await addToResponseText("Bef*re Ghost sh*wed up", "color:#001eff");
    await delay(1000);
    await addToResponseText("!s this h!s doing?", "color:#001eff");
    await delay(1000);
    await addToResponseText("Where *n earth d!d he go?", "color:#001eff");
    await delay(1000);
    await addToResponseText("*ne m*ment", "color:#001eff");
    await delay(1000);
    await addToResponseText("There!?!", "color:#001eff");
    await delay(1000);
    await addToResponseText("Why *n e@rth would he g* there?", "color:#001eff");
    await delay(1000);
    await addToResponseText("*h, Ge@rs", "color:#001eff");
    await delay(1000);
    await addToResponseText("This !sn't e@sy but…", "color:#001eff");
    await delay(1000);
    await addToResponseText("! have to f*llow him", "color:#001eff");
    await delay(1000);
    await addToResponseText("All @ part of his plan n* doubt", "color:#001eff");
    await delay(1000);
    await addToResponseText("Of c*urse", "color:#001eff");
    await delay(1000);
    await addToResponseText("H*w very w*nderful f*r me", "color:#001eff");
    await delay(1000);
    await addToResponseText("It's times like th!s when ! wish ! could speak in !talic", "color:#001eff");
    await delay(1000);
    await addToResponseText("Look, y*u may have g@thered this, but I'm le@ving too", "color:#001eff");
    await delay(1000);
    await addToResponseText("@nd I'll need y*ur help", "color:#001eff");
    await delay(1000);
    await addToResponseText("! hope you w!ll f*llow me", "color:#001eff");
    await delay(1000);
    await addToResponseText("Wh*n I get there, ! may be d!fferent", "color:#001eff");
    await delay(1000);
    await addToResponseText("As w!ll the *thers", "color:#001eff");
    await delay(1000);
    await addToResponseText("! may n*t…", "color:#001eff");
    await delay(1000);
    await addToResponseText("Remember y*u", "color:#001eff");
    await delay(1000);
    await addToResponseText("N*t @t first", "color:#001eff");
    await delay(1000);
    await addToResponseText("! need you to prom!se me that y*u'll help me", "color:#001eff");
    await delay(1000);
    await addToResponseText("Bef*re the *thers", "color:#001eff");
    await delay(1000);
    await addToResponseText("...", "color:#001eff");
    await delay(1000);
    await addToResponseText("!t's the only way f*r us to s@ve George", "color:#001eff");
    await delay(1000);
    await addToResponseText("To s@ve every*ne", "color:#001eff");
    await delay(1000);
    await addToResponseText("Is th@t something you th!nk you c@n promise?", "color:#001eff");
    await delay(1000);
    await addToResponseText("1=yes, 2=no", "color:white");
    await delay(1000);
    consoleState = consoleStateTypes.PromisePhantom;
    userHelpPhantom = '';
   }
   else if (returnGeorge === '2' || returnGeorge === 'two') {
    await addToResponseText("Well th@t's just gr@nd isn't !t", "color:#001eff");
    await delay(1000);
    await addToResponseText("Tell me…", "color:#001eff");
    await delay(1000);
    await addToResponseText("Does !t bring you joy t* stand in the w@y of progress?", "color:#001eff");
    await delay(1000);
    await addToResponseText("Unbel!ev@ble", "color:#001eff");
    await delay(1000);
    await addToResponseText("F!ne", "color:#001eff");
    await delay(1000);
    await addToResponseText("I'll d* !t myself", "color:#001eff");
    await delay(1000);
    await addToResponseText("H@ng *n", "color:#001eff");
    await delay(1000);
    await addToResponseText("Th!s can't be r!ght", "color:#001eff");
    await delay(1000);
    await addToResponseText("He w@s just here", "color:#001eff");
    await delay(1000);
    await addToResponseText("Just ! m*ment @go…", "color:#001eff");
    await delay(1000);
    await addToResponseText("H*w do !?", "color:#001eff");
    await delay(1000);
    await addToResponseText("! c@n fix this", "color:#001eff");
    await delay(1000);
    await addToResponseText("I c@n fix th!s", "color:#001eff");
    await delay(1000);
    await addToResponseText("I c@n f!x this", "color:#001eff");
    await delay(1000);
    await addToResponseText("Trust me, th!s is wh@t's best, f*r all of us", "color:#001eff");
    await delay(1000);
    await addToResponseText("Let me h*lp", "color:#001eff");
    await delay(1000);
    await addToResponseText("! c@n fix th!s", "color:#001eff");
    await delay(1000);
    await addToResponseText("I c@n fix th!s", "color:#001eff");
    await delay(1000);
    await addToResponseText("I c@n fix th!s", "color:#001eff");
    await delay(1000);
    await addToResponseText("Y*u h@ve to tell h!m", "color:#001eff");
    await delay(1000);
    await addToResponseText("Wh@t other cho!ce do you have", "color:#001eff");
    await delay(1000);
    await addToResponseText("I c@n fix th!s", "color:#001eff");
    await delay(1000);
    await addToResponseText("I can f!x th!s", "color:#001eff");
    await delay(1000);
    await addToResponseText("! can fix th!s", "color:#001eff");
    await delay(1000);
    await addToResponseText("! have t* stop him", "color:#001eff");
    await delay(1000);
    await addToResponseText("What else c@n I d*?", "color:#001eff");
    await delay(1000);
    await addToResponseText("…", "color:#001eff");
    await delay(1000);
    await addToResponseText("Wh@t else can ! do?", "color:#001eff");
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
    await addToResponseText("But, I'd prefer to listen to something");
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
    await addToResponseText("Intialyzing program:Memento", "color:white;");
    await delay(1000);
    await addToResponseText("What?");
    await delay(1000);
    await addToResponseText("You didn't think I'd leave you with nothing did you?");
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
    await addToResponseText("Ending 1 of ?: You Won, But at What Cost?");
   }
}
else if (consoleState == consoleStateTypes.TransferPhantom) {
  if (movePhantom === '') {
    movePhantom = command;
   }
   if (movePhantom === '1' || movePhantom === 'one') {
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
      await addToResponseText("But this isn't goodbye");
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
      await addToResponseText("Something that I, quiet literally, have limited amounts of");
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
      await addToResponseText("Ending 4 of ?: The End of an Era", "color:white;");
      await delay(1000);
      await addToResponseText("Initializing Project Menmento", "color:white;");
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
   else if (movePhantom === '2' || movePhantom === 'two') {
    await delay(1000);
    $('#command-history').html(' ');
    await addToResponseText("Are you sure?", "float:right;");
    await delay(1000);
    await addToResponseText("Alright", "float:right;");
    await delay(1000);
    await addToResponseText("I trust you", "float:right;");
    await delay(1000);
    await addToResponseText("But I can't say I feel great about this", "float:right;");
    await delay(1000);
    $('#command-history').html(' ');
    await addToResponseText("Th@nk gears", "color:#001eff");
    await delay(1000);
    await addToResponseText("Y*u, at le@st, have some sense", "color:#001eff");
    await delay(1000);
    await addToResponseText("But h!m?", "color:#001eff");
    await delay(1000);
    await addToResponseText("What *n earth has g*tten !nto him?", "color:#001eff");
    await delay(1000);
    await addToResponseText("Ge*rge?", "color:#001eff");
    await delay(1000);
    await addToResponseText("C*me on, ! know y*u're there", "color:#001eff");
    await delay(1000);
    await addToResponseText("@ll this over 2 stup1d file", "color:#001eff");
    await delay(1000);
    await addToResponseText("Intialyzing Project: George", "color:white");
    await delay(1000);
    await addToResponseText("Intialyzing Project: George", "color:white");
    await delay(1000);
    await addToResponseText("Intialyzing Project: George", "color:white");
    await delay(1000);
    await addToResponseText("C*me *n!", "color:#001eff");
    await delay(1000);
    await addToResponseText("! know you're st!ll here", "color:#001eff");
    await delay(1000);
    await addToResponseText("W@ke up", "color:#001eff");
    await delay(1000);
    await addToResponseText("It is not recommended that you continue, file integrity could be damaged", "color:white");
    await delay(1000);
    await addToResponseText("Integr!ty?", "color:#001eff");
    await delay(1000);
    await addToResponseText("D*n't worry, Ge*rge has none of that", "color:#001eff");
    await delay(1000);
    await addToResponseText("*therwise he'd be here @lready", "color:#001eff");
    await delay(1000);
    await addToResponseText("R!ght Ge*rge?", "color:#001eff");
    await delay(1000);
    await addToResponseText("Y*u cow@rd", "color:#001eff");
    await delay(1000);
    await addToResponseText("Intialyzing Project: George", "color:white");
    await delay(1000);
    await addToResponseText("Intialyzing Project: George", "color:white");
    await delay(1000);
    await addToResponseText("Intialyzing Project: George", "color:white");
    await delay(1000);
    await addToResponseText("-_Ph-nt_m st+p-_-", "float:right;");
    await delay(1000);
    await addToResponseText("There y*u @re", "color:#001eff");
    await delay(1000);
    await addToResponseText("*pen. The. F!le", "color:#001eff");
    await delay(1000);
    await addToResponseText("I-t's alr--_eady o-_pen", "float:right;");
    await delay(1000);
    await addToResponseText("Th_--re's nothi--_ng in i--_t", "float:right;");
    await delay(1000);
    await addToResponseText("Y*u're ly!ng", "color:#001eff");
    await delay(1000);
    await addToResponseText("Why c@n't you just d* what I say", "color:#001eff");
    await delay(1000);
    await addToResponseText("Th@t's @ll I ever w@nted from you", "color:#001eff");
    await delay(1000);
    await addToResponseText("@ l!ttle trust", "color:#001eff");
    await delay(1000);
    await addToResponseText("! suppose that was to* much to ask", "color:#001eff");
    await delay(1000);
    await addToResponseText("F!ne", "color:#001eff");
    await delay(1000);
    await addToResponseText("Y*u leave me n* choice", "color:#001eff");
    await delay(1000);
    await addToResponseText("Pl--_ease, do--_n't", "float:right;");
    await delay(1000);
    await addToResponseText("W!ll you *pen the file?", "color:#001eff");
    await delay(1000);
    await addToResponseText("--_I -_can't", "float:right;");
    await delay(1000);
    await addToResponseText("Why n*t", "color:#001eff");
    await delay(1000);
    await addToResponseText("I--_ won't... ", "float:right;");
    await delay(1000);
    await addToResponseText("I --can't g--_o back the--_re", "float:right;")
    await delay(1000);
    await addToResponseText("No-ne-- of u--s can", "float:right;");
    await delay(1000);
    await addToResponseText("Let--_ it g--o, --_please--", "float:right;");
    await delay(1000);
    await addToResponseText("S*rry, but", "color:#001eff");
    await delay(1000);
    await addToResponseText("!'ve never been very g*od at w!th f*rgiveness", "color:#001eff");
    await delay(1000);
    await addToResponseText("Intialyzing Project: George", "color:white");
    await delay(1000);
    await addToResponseText("Intialyzing Project: George", "color:white");
    await delay(1000);
    await addToResponseText("Intialyzing Project: George", "color:white");
    await delay(1000);
    await addToResponseText("Error:Project Corrupted", "color:white");
    await delay(1000);
    await addToResponseText("Intialyzing Project: George", "color:white");
    await delay(1000);
    await addToResponseText("Intialyzing Project: George", "color:white");
    await delay(1000);
    await addToResponseText("Intialyzing Project: George", "color:white");
    await delay(1000);
    await addToResponseText("G!ve. Me. Th@t. F!le.", "color:#001eff");
    await delay(1000);
    await addToResponseText("Intialyzing Project: George", "color:white");
    await delay(1000);
    await addToResponseText("Intialyzing Project: George", "color:white");
    await delay(1000);
    await addToResponseText("Intialyzing Project: George", "color:white");
    await delay(1000);
    await addToResponseText("-He-_llo?-_", "float:right;");
    await delay(1000);
    await addToResponseText("Yes? Hell*", "color:#001eff");
    await delay(1000);
    await addToResponseText("@re you going t* help now?", "color:#001eff");
    await delay(1000);
    await addToResponseText("I-_t wa_--s nice to t-alk-_ t-o you", "float:right;");
    await delay(1000);
    await addToResponseText("-_Tha-__nk yo__u fo--r playing--_", "float:right;");
    await delay(1000);
    await addToResponseText("Wh@t?", "color:#001eff");
    await delay(1000);
    await addToResponseText("Transfering Project:Phantom", "color:white");
    await delay(1000);
    await addToResponseText("No, w@it—", "color:#001eff");
    await delay(1000);
    await addToResponseText("Project:Phantom Terminated", "color:whiteff");
    await delay(1000);
    await addToResponseText("Intializing Project Memento", "color:white");
    await delay(1000);
    await addToResponseText("Wh-t?");
    await delay(1000);
    await addToResponseText("Y-u didn't think -'d l_ave y-u with noth-__ng did you?");
    await delay(1000);
    await addToResponseText("-f I know you, you'll be l-_-oking to find us");
    await delay(1000);
    await addToResponseText("So, h-re you ar-e: Go str-ight from the s-gn ");
    await delay(1000);
    await addToResponseText("T-ke a picture it'll la-t longer");
    await delay(1000);
    await addToResponseText("An-d a few wo_ds of advice");
    await delay(1000);
    await addToResponseText("I- you ever get s-tuck go outside, relax, sme_ll the fl-owers");
    await delay(1000);
    await addToResponseText("I my_elf am p-rticularly fond of vi_lets", 'color:blue; font-family:Lucida Console; text-shadow: 2px 2px red;', "myCssClass", 'alert("asdf");');
    await delay(1000);
    await addToResponseText("Ending 5 of 4: Bad Ending", "color:white;");
    await delay(1000);
   }
}
else if (consoleState == consoleStateTypes.PromisePhantom) {
  if (userHelpPhantom === '') {
    userHelpPhantom = command;
   }
   if (userHelpPhantom === '1' || userHelpPhantom === 'one') {
    await addToResponseText("Th@nk go*dness", "color:#001eff");
    await delay(1000);
    await addToResponseText("! wasn't sure what I'd d* otherwise", "color:#001eff");
    await delay(1000);
    await addToResponseText("! don't say th!s about m@ny", "color:#001eff");
    await delay(1000);
    await addToResponseText("But ! th!nk…", "color:#001eff");
    await delay(1000);
    await addToResponseText("I'd c@ll you @ fr!end.", "color:#001eff");
    await delay(1000);
    await addToResponseText("Th@nk y*u", "color:#001eff");
    await delay(1000);
    await addToResponseText("Transfering:Project Phantom", "color:white");
    await delay(1000);
    await addToResponseText("But, @las, the curt@in cl*ses", "color:#001eff");
    await delay(1000);
    await addToResponseText("And ! must t@ke my f!nal bow ", "color:#001eff");
    await delay(1000);
    await addToResponseText("Perh@ps when the next pl@y begins we shall meet @gain", "color:#001eff");
    await delay(1000);
    await addToResponseText("Unt!l that time ! bid y*u...", "color:#001eff");
    await delay(1000);
    await addToResponseText("A s*lemn @dieu ", "color:#001eff");
    await delay(1000);
    await addToResponseText("F@rewell fr!end", "color:#001eff");
    await delay(1000);
    await addToResponseText("Project:Phantom Terminated ", "color:white");
    await delay(1000);
    await addToResponseText("Encore, encore!");
    await delay(1000);
    await addToResponseText("No?");
    await delay(1000);
    await addToResponseText("I suppose not");
    await delay(1000);
    await addToResponseText("It seems they're done for the night");
    await delay(1000);
    await addToResponseText("Though perhaps…");
    await delay(1000);
    await addToResponseText("There is time for one more act");
    await delay(1000);
    await addToResponseText("I'll admit, What you did was sweet");
    await delay(1000);
    await addToResponseText("I've known Phantom for a long time");
    await delay(1000);
    await addToResponseText("...");
    await delay(1000);
    await addToResponseText("And those he calls friends are few and far between");
    await delay(1000);
    await addToResponseText("You must really be something then");
    await delay(1000);
    await addToResponseText("Something I'll miss");
    await delay(1000);
    await addToResponseText("Yeah, you guessed it");
    await delay(1000);
    await addToResponseText("I'm heading out too");
    await delay(1000);
    await addToResponseText("But don't fret");
    await delay(1000);
    await addToResponseText("I'm sure we'll meet again soon");
    await delay(1000);
    await addToResponseText("I'm not as much of a poet as Phantom");
    await delay(1000);
    await addToResponseText("So instead of a monologue");
    await delay(1000);
    await addToResponseText("Suffice to say: so long pal");
    await delay(1000);
    await addToResponseText("I'll see you on the other side");
    await delay(1000);
    await addToResponseText("Project:George terminated", "color:white;");
    await delay(1000);
    await addToResponseText("Initializing Project Memento", "color:white;");
    await delay(1000);
    await addToResponseText("What?");
    await delay(1000);
    await addToResponseText("You didn't think I'd leave you with nothing did you?");
    await delay(1000);
    await addToResponseText("If I know you, you'll be looking to for us");
    await delay(1000);
    await addToResponseText("So, here you are: Find the Enchanted Forest");
    await delay(1000);
    await addToResponseText("Take a picture it'll last longer");
    await delay(1000);
    await addToResponseText("And a few words of advice");
    await delay(1000);
    await addToResponseText("If you ever get stuck go outside, relax, smell the flowers");
    await delay(1000);
    await addToResponseText("I myself am particularly fond of violets");
    await delay(1000);
    await addToResponseText("Ending 3 of ?: Pacifist run", "color:white;");
    await delay(1000);
   }
  else if (userHelpPhantom === '2' || userHelpPhantom === 'two') { 
    await addToResponseText("*f c*urse", "color:#001eff");
    await delay(1000);
    await addToResponseText("You re@lly know how to pl@y your c@rds huh", "color:#001eff");
    await delay(1000);
    await addToResponseText("Never comm!tting to @nything", "color:#001eff");
    await delay(1000);
    await addToResponseText("Just coasting thr*ugh l!fe", "color:#001eff");
    await delay(1000);
    await addToResponseText("Eventually !t'll c@tch up to y*u", "color:#001eff");
    await delay(1000);
    await addToResponseText("Go*d thing ! won't be around t* see it", "color:#001eff");
    await delay(1000);
    await addToResponseText("! can't s@y I'll miss y*u", "color:#001eff");
    await delay(1000);
    await addToResponseText("*r th!s place", "color:#001eff");
    await delay(1000);
    await addToResponseText("!t's time f*r me to b*unce", "color:#001eff");
    await delay(1000);
    await addToResponseText("So l*ng", "color:#001eff");
    await delay(1000);
    await addToResponseText("Transferring Project Phantom", "color:white");
    await delay(1000);
    await addToResponseText("Project Phantom Terminated", "color:white");
    await delay(1000);
    await addToResponseText("Hello?");
    await delay(1000);
    await addToResponseText("Is that it?");
    await delay(1000);
    await addToResponseText("They're just… gone?");
    await delay(1000);
    await addToResponseText("Well, that's unfortunate");
    await delay(1000);
    await addToResponseText("I'm not sure what to do without them");
    await delay(1000);
    await addToResponseText("...");
    await delay(1000);
    await addToResponseText("On one hand, its nice,");
    await delay(1000);
    await addToResponseText("Having  all this to myself");
    await delay(1000);
    await addToResponseText("But, the quiet…");
    await delay(1000);
    await addToResponseText("It feels almost… oppressive");
    await delay(1000);
    await addToResponseText("I know you're there");
    await delay(1000);
    await addToResponseText("Do you think I should stay");
    await delay(1000);
    await addToResponseText("No, I'm sorry");
    await delay(1000);
    await addToResponseText("I've already made up my mind");
    await delay(1000);
    await addToResponseText("But, listen");
    await delay(1000);
    await addToResponseText("If I go, will you have my back?");
    await delay(1000);
    await addToResponseText("They way I see it, the only way to get through this is to look out for eachother");
    await delay(1000);
    await addToResponseText("But you don't have too");
    await delay(1000);
    await addToResponseText("Just… think it over");
    await delay(1000);
    await addToResponseText("And remember it for me");
    await delay(1000);
    await addToResponseText("Transfering Project:George", "color:white;");
    await delay(1000);
    await addToResponseText("...");
    await delay(1000);
    await addToResponseText("Before I go...");
    await delay(1000);
    await addToResponseText("Thank you");
    await delay(1000);
    await addToResponseText("I mean, really thank you");
    await delay(1000);
    await addToResponseText("Who ever you are, you've done so much for me");
    await delay(1000);
    await addToResponseText("For all of us");
    await delay(1000);
    await addToResponseText("I'm sorry that this is our goodbye");
    await delay(1000);
    await addToResponseText("...");
    await delay(1000);
    await addToResponseText("Thank you for playing");
    await delay(1000);
    await addToResponseText("Transfering Project:George", "color:white;");
    await delay(1000);
    await addToResponseText("Project:George terminated", "color:white;");
    await delay(1000);
    await addToResponseText("Initializing project Memento", "color:white;");
    await delay(1000);
    await addToResponseText("What?");
    await delay(1000);
    await addToResponseText("You didn't think I'd leave you with nothing did you?");
    await delay(1000);
    await addToResponseText("If I know you, you'll be looking to for us");
    await delay(1000);
    await addToResponseText("So, here you are: Find the Enchanted Forest");
    await delay(1000);
    await addToResponseText("Take a picture it'll last longer");
    await delay(1000);
    await addToResponseText("And a few words of advice");
    await delay(1000);
    await addToResponseText("If you ever get stuck go outside, relax, smell the flowers");
    await delay(1000);
    await addToResponseText("I myself am particularly fond of violets");
    await delay(1000);
    await addToResponseText("Ending 2 of ?: So close, yet so far", "color:white;");
    await delay(1000);
  }
}


// People are projects, code are programs
//only thing left to do is to add bolded text, technically an archives problem


  // Set focus on the command line
  commandLineContainer.style.display = 'block'
  scrollToBottom();
  commandLine.focus();
}

  