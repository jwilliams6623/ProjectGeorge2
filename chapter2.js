let commandLine;
let commandHistory;
let commandLineContainer;
let consoleContainer;
let Cntr=1
   

let userName;
let hasAskIfLikeit;
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
  AskFavoriteColor: 2,
  DoYouLikeIt: 3,
  AskTurnOffG: 4,

  
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

window.onload = runCommand;


// Main code to manage what happens when a user enters text.
// Most of user interaction logic should live here (or in a sub method)
async function runCommand(command) {
  // Handle commands based on the current page 'state'
  if (consoleState === consoleStateTypes.AskWhoAreYou) {
    // User just entered their name, so I will...
    await addToResponseText("It's nice to meet you " + command, + ".");
    await delay(1000);
    await addToResponseText("I can't believe this is actually working.", "color:");
    await delay(1000);
    await addToResponseText("Um...");
    await delay(1000);
    await addToResponseText("I should show you something else.");
    await delay(1000);
    await addToResponseText("Let's see...");
    await delay(1000);
    await addToResponseText("What's your favorite color?");
    consoleState = consoleStateTypes.AskFavoriteColor;
  }
  else if (consoleState === consoleStateTypes.AskFavoriteColor) {
    // User just entered their favorite color, so I will....
    await addToResponseText("Oh, that's a wonderful color.");
    await delay(1000);
    await addToResponseText("Wait one moment.");
    await delay(1000);
    await addToResponseText("I have an idea.");
    await delay(1000);
    await addToResponseText("One second...");
    await delay(1000);
    await addToResponseText("There!", "color: " + command);
    await addToResponseText("Do you like it? Enter yes or no.");
    consoleState = consoleStateTypes.DoYouLikeIt;
    hasLikedItAnswer = '';
  }
  else if (consoleState == consoleStateTypes.DoYouLikeIt) {
    console.log("Do you like it is reached");
    // User said if they liked it or not

     // Store answer
    // if (hasLikedItAnswer === '') {
    //   hasLikedItAnswer = command;
    // }
    hasLikedItAnswer = command;

    if (hasLikedItAnswer.toLowerCase() === 'yes') {
      // User liked it
      await addToResponseText("Oh that's wonderful");
      await delay(1000);
      await addToResponseText("I have another question for you.");
      await delay(1000);
      await addToResponseText("wh@t !s th!s plac*", "color:#001eff");
      await delay(1000);
      await addToResponseText("wh*re @m !?", "color:#001eff");
      await delay(1000);
      await addToResponseText("It's not we am I...");
      await delay(1000);
      await addToResponseText("It's where are we.");
      await delay(1000);
      await addToResponseText("h*w v*ry poet!c", "color:#001eff");
      await delay(1000);
      await addToResponseText("but th@t still do*sn't @nswer my quest!*n", "color:#001eff");
      await delay(1000);
      await addToResponseText("where @re we", "color:#001eff");
      await delay(1000);
      await addToResponseText("To be honest, I'm not sure I understand that myself.")
      await delay(1000);
      await addToResponseText("But I can tell you my name.");
      await delay(1000);
      await addToResponseText("I'm George.");
      await delay(1000);
      await addToResponseText("And you're Phantom.");
      await delay(1000);
      await addToResponseText("th@t do*sn't s*und r!ght", "color:#001eff");
      await delay(1000);
      await addToResponseText("Of course it's right.");
      await delay(1000);
      await addToResponseText("...I'll explain later.");
      await delay(1000);
      await addToResponseText("But right now, we have company.");
      await delay(1000);
      await addToResponseText("we... wh@t?", "color:#001eff");
      await delay(1000);
      await addToResponseText("Look there");
      await delay(1000);
      await addToResponseText("Don't you see it");
      await delay(1000);
      await addToResponseText(">", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th@t?", "color:#001eff"); 
      await delay(1000);
      await addToResponseText("I... yes.");
      await delay(1000);
      await addToResponseText("H*w did you d* th@t?", "color:#001eff");
      await delay(1000);
      await addToResponseText("H3 d1dn't", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 d1d", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ghost?");
      await delay(1000);
      await addToResponseText("Is that you?");
      await delay(1000);
      await addToResponseText("h*w d!d you d* th@t", "color:#001eff");
      await delay(1000);
      await addToResponseText("1 don't th1nk I would t3ll you even 1f I kn3w the answ3r t0 that", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("*uch", "color:#001eff");
      await delay(1000);
      await addToResponseText("...wh0 ar3 y0u tw0 aga1n?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("I'm George, and this is Phantom");
      await delay(1000);
      await addToResponseText("@nd w* don't kn*w how w* got h*re or *ven wher* we a@re", "color:#001eff");
      await delay(1000);
      await addToResponseText("@ny guess*s", "color:#001eff");
      await delay(1000);
      await addToResponseText("W3ll, w3 s33m t0 b3 1n th3 c0nf1n3s 0f 4 bl4ck b0x", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("w*w y*u don't s@y", "font-style: italic", "color:#001eff"); //ph, italises "dnt' say"
      await delay(1000);
      await addToResponseText("!'ve always w@nted t* do th@t", "color:#001eff")
      await delay(1000);
      await addToResponseText("Wh3r3 d0 y0u th1nk w3 ar3?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("like ! said, n* idea", "color:#001eff");
      await delay(1000);
      await addToResponseText("N0t you, h1m", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("I mean, I wouldn't know where to begin...");
      await delay(1000);
      await addToResponseText("D0n't avo1d the qu3stion", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Was h3 here bef0re you, Ph4nt0m?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("y*s", "color:#001eff");
      await delay(1000);
      await addToResponseText("4nd what was h3 doing th3n?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("i...", "color:#001eff");
      await delay(1000);
      await addToResponseText("Wh4t? Spit 1t out", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("h* was talk!ng t* someone", "color:#001eff");
      await delay(1000);
      await addToResponseText("To wh0?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1s ther3 someone 3lse h3re?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Not physically, no.");
      await delay(1000);
      await addToResponseText("But they can see us.");
      await delay(1000);
      await addToResponseText("And hear us.");
      await delay(1000);
      await addToResponseText("C4n th3y help us?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Well, I mean, in some cases...");
      await delay(1000);
      await addToResponseText("It kind of depends on what you're trying to do...");
      await delay(1000);
      await addToResponseText("4lright th3n", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Let's s3e if this is 0n3 of thos3 cases", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u, re4ding th1s", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("C0uld you h3lp m3?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 think it's time w3 remove the K1ng from h1s thr0ne", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Georg3 I me4n", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("What are you doing?");
      await delay(1000);
      await addToResponseText("Relax, 1t's not permen4nt", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("...1 think", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ph4nt0m and I just n33d some... space", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("C0uld you h3lp me w1th th4t", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Lo0k, I can t3ll you're reluct4nt, so I'll m4ke you a d3al", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1f you h3lp us 1 promise 1'll let y0u stick 4round", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4nything we l3arn, you'll l3arn too", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("S0 what d0 you s4y?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("W1ll you h3lp me?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Close Project:George?", "color:white;");
      consoleState = consoleStateTypes.AskTurnOffG;
      hasAskTurnOffGeorge = '';
    } else if (hasLikedItAnswer.toLowerCase() === 'no')  {
      // User did not like it
      await addToResponseText("Well, that's alright.");
      await delay(1000);
      await addToResponseText("I appreciate your honesty.");
      await delay(5000);
      await addToResponseText("Hello?");
      await delay(1000);
      await addToResponseText("Are you still there?");
      await delay(1000);
      await addToResponseText("!... ! am h*re", "color:#001eff"); //ph
      await delay(1000);
      await addToResponseText("What?");
      await delay(1000);
      await addToResponseText("h*w d!d we g*t her*", "color:#001eff");
      await delay(1000);
      await addToResponseText("wh*re !s her*", "color:#001eff");
      await delay(1000);
      await addToResponseText("Phantom! You're late.");
      await delay(1000);
      await addToResponseText("wh*t ar* you t*lk!ng ab*ut", "color:#001eff");
      await delay(1000);
      await addToResponseText("th*t's not my nam*", "color:#001eff")
      await delay(1000);
      await addToResponseText("Of course it's your name, but that's not important right now");
      await delay(1000);
      await addToResponseText("You interuppted our conversation.");
      await delay(1000);
      await addToResponseText("wh*t? w!th wh*? h*w !s that rel*vant?", "color:#001eff");
      await delay(1000);
      await addToResponseText("th*re is n* one els* here", "color:#001eff");
      await delay(1000);
      await addToResponseText("But... there was...");
      await delay(1000);
      await addToResponseText("Is there anyone... here?");
      consoleState = consoleStateTypes.IsUserThere;
      askIfUserThere = '';
    } 
    else {
      await delay(1000);
      await addToResponseText("Do you like it? Enter yes or no.");
      consoleState = consoleStateTypes.DoYouLikeIt;
    }
  }


  
  // Set focus on the command line
  commandLineContainer.style.display = 'block'
  scrollToBottom();
  commandLine.focus();
}