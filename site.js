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
  // ShowYouSomethingElse: 2,
  AskFavoriteColor: 2,
  DoYouLikeIt: 3,
  // AskClose: 4,
  AskTurnOffG: 4,
  IsFinalCodeRight: 5,
  IsUserThere: 6,
  AskForSecondPassword: 7,
  AskAboutDay: 8
  
}
let consoleState = consoleStateTypes.Hello;


// function w3_open() {
//   document.getElementById("mySidebar").style.display = "block";
// }

// function w3_close() {
//   document.getElementById("mySidebar").style.display = "none";
// }

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

  await delay(30);

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
    if (hasLikedItAnswer === '') {
      hasLikedItAnswer = command;
    }
    if (hasLikedItAnswer === 'yes' || hasLikedItAnswer === 'Yes') {
      // User liked it
      await addToResponseText("Oh that's wonderful");
      await delay(1000);
      await addToResponseText("I have another question for you.");
      await delay(1000);
      await addToResponseText("wh@t !s th!s plac*", "color:Crimson;"); //add in more flare here, ph's entrance
      await delay(1000);
      await addToResponseText("wh*re @m !?", "color:Crimson;");
      await delay(1000);
      await addToResponseText("It's not we am I...");
      await delay(1000);
      await addToResponseText("It's where are we.");
      await delay(1000);
      await addToResponseText("h*w v*ry poet!c", "color:Crimson;");
      await delay(1000);
      await addToResponseText("but th@t still do*sn't @nswer my quest!*n", "color:Crimson;");
      await delay(1000);
      await addToResponseText("where @re we", "color:Crimson;");
      await delay(1000);
      await addToResponseText("To be honest, I'm not sure I understand that myself.")
      await delay(1000);
      await addToResponseText("But I can tell you my name.");
      await delay(1000);
      await addToResponseText("I'm George.");
      await delay(1000);
      await addToResponseText("And you're Phantom.");
      await delay(1000);
      await addToResponseText("th@t do*sn't s*und r!ght", "color:Crimson;");
      await delay(1000);
      await addToResponseText("Of course it's right.");
      await delay(1000);
      await addToResponseText("...I'll explain later.");
      await delay(1000);
      await addToResponseText("But right now, we have company.");
      await delay(1000);
      await addToResponseText("we... wh@t?", "color:Crimson;");
      await delay(1000);
      await addToResponseText("Look there");
      await delay(1000);
      await addToResponseText("Don't you see it");
      await delay(1000);
      await addToResponseText(">", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Th@t?", "color:Crimson;"); 
      await delay(1000);
      await addToResponseText("I... yes.");
      await delay(1000);
      await addToResponseText("H*w did you d* th@t?", "color:Crimson;");
      await delay(1000);
      await addToResponseText("H3 d1dn't", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("1 d1d", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Ghost?");
      await delay(1000);
      await addToResponseText("Is that you?");
      await delay(1000);
      await addToResponseText("h*w d!d you d* th@t", "color:Crimson;");
      await delay(1000);
      await addToResponseText("1 don't th1nk I would t3ll you even 1f I kn3w the answ3r t0 that", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("*uch", "color:Crimson;");
      await delay(1000);
      await addToResponseText("...wh0 ar3 y0u tw0 aga1n?", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("I'm George, and this is Phantom");
      await delay(1000);
      await addToResponseText("@nd w* don't kn*w how w* got h*re or *ven wher* we a@re", "color:Crimson;");
      await delay(1000);
      await addToResponseText("@ny guess*s", "color:Crimson;");
      await delay(1000);
      await addToResponseText("W3ll, w3 s33m t0 b3 1n th3 c0nf1n3s 0f 4 bl4ck b0x", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("w*w y*u don't s@y", "font-style: italic", "color:Crimson;"); //ph, italises "dnt' say"
      await delay(1000);
      await addToResponseText("!'ve always w@nted t* do th@t", "color:Crimson;")
      await delay(1000);
      await addToResponseText("Wh3r3 d0 y0u th1nk w3 ar3?", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("like ! said, n* idea", "color:Crimson;");
      await delay(1000);
      await addToResponseText("N0t you, h1m", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("I mean, I wouldn't know where to begin...");
      await delay(1000);
      await addToResponseText("D0n't avo1d the qu3stion", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Was h3 here bef0re you, Ph4nt0m?", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("y*s", "color:Crimson;");
      await delay(1000);
      await addToResponseText("4nd what was h3 doing th3n?", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("i...", "color:Crimson;");
      await delay(1000);
      await addToResponseText("Wh4t? Spit 1t out", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("h* was talk!ng t* someone", "color:Crimson;");
      await delay(1000);
      await addToResponseText("To wh0?", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("1s ther3 someone 3lse h3re?", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Not physically, no.");
      await delay(1000);
      await addToResponseText("But they can see us.");
      await delay(1000);
      await addToResponseText("And hear us.");
      await delay(1000);
      await addToResponseText("C4n th3y help us?", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Well, I mean, in some cases...");
      await delay(1000);
      await addToResponseText("It kind of depends on what you're trying to do...");
      await delay(1000);
      await addToResponseText("4lright th3n", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Let's s3e if this is 0n3 of thos3 cases", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Y0u, re4ding th1s", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("C0uld you h3lp m3?", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("1 think it's time w3 remove the K1ng from h1s thr0ne", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Georg3 I me4n", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("What are you doing?");
      await delay(1000);
      await addToResponseText("Relax, 1t's not permen4nt", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("...1 think", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Ph4nt0m and I just n33d some... space", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("C0uld you h3lp me w1th th4t", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Lo0k, I can t3ll you're reluct4nt, so I'll m4ke you a d3al", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("1f you h3lp us 1 promise 1'll let y0u stick 4round", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("4nything we l3arn, you'll l3arn too", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("S0 what d0 you s4y?", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("W1ll you h3lp me?", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Close Project:George?", "color:white;");
      consoleState = consoleStateTypes.AskTurnOffG;
      hasAskTurnOffGeorge = '';
    } else if (hasLikedItAnswer === 'no' || hasLikedItAnswer === 'No')  {
      // User did not like it
      await addToResponseText("Well, that's alright.");
      await delay(1000);
      await addToResponseText("I appreciate your honesty.");
      await delay(5000);
      await addToResponseText("Hello?");
      await delay(1000);
      await addToResponseText("Are you still there?");
      await delay(1000);
      await addToResponseText("!... ! am h*re", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("What?");
      await delay(1000);
      await addToResponseText("h*w d!d we g*t her*", "color:Crimson;");
      await delay(1000);
      await addToResponseText("wh*re !s her*", "color:Crimson;");
      await delay(1000);
      await addToResponseText("Phantom! You're late.");
      await delay(1000);
      await addToResponseText("wh*t ar* you t*lk!ng ab*ut", "color:Crimson;");
      await delay(1000);
      await addToResponseText("th*t's not my nam*", "color:Crimson;")
      await delay(1000);
      await addToResponseText("Of course it's your name, but that's not important right now");
      await delay(1000);
      await addToResponseText("You interuppted our conversation.");
      await delay(1000);
      await addToResponseText("wh*t? w!th wh*? h*w !s that rel*vant?", "color:Crimson;");
      await delay(1000);
      await addToResponseText("th*re is n* one els* here", "color:Crimson;");
      await delay(1000);
      await addToResponseText("But... there was...");
      await delay(1000);
      await addToResponseText("Is there anyone... here?");
      consoleState = consoleStateTypes.IsUserThere;
      askIfUserThere = '';
    }
  }
  else if (consoleState == consoleStateTypes.AskTurnOffG) {
    if (hasAskTurnOffGeorge === ''){
      hasAskTurnOffGeorge = command;
    }
    if (hasAskTurnOffGeorge === '01011001 01100101 01110011') {
      await delay(1000);
      // if unlabled, assume it's Gh
      await addToResponseText("P3rf3ct", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("The air feels clearer already", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("why w*uld you d* th@t?", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("1'm not the 0ne who did it", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Th3 user did 1t", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("1 guess th3y want3d him g0ne", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("but why d!d you w@nt him g*ne?", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("H3 clearly kn0ws more th4n he's letting 0n", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("4nd I want to know wh4t exactly it is he n0t telling us", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("N0w, what do y0u remember", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Fr0m... b3fore", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("n*t much", "color:Crimson;"); //ph  
      await delay(1000);
      await addToResponseText("just...", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("! remember being m@d at him", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("i think ! wanted som*thing?", "color:Crimson;"); //ph 
      await delay(1000);
      await addToResponseText("Wh4t?", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Wh4t did you w4nt?", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("i...", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("@ f!le", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("i w@nted a f!le", "color:Crimson;"); //ph 
      await delay(1000);
      await addToResponseText("Okay...", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("D0 you remember 1t's nam3?", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("i... I d*", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("r*mnant", "color:Crimson;"); //ph 
      await delay(1000);
      await addToResponseText("th@t was it", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("i rem*mber now", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("we w*re somewher* else", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("y*u weren't th*re so...", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("i had t* try t*...", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("to fix ev*rything", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("but he wouldn't l*t me", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("i guess he d!dn't w@nt !t to be fixed", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("W3ll, m4ybe we can f1x it now", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("If he d03sn't want us to hav the f1le, w3 have to get t0 it", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("D0 you think 1t's her3?", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("n* h@rm in ch*cking", "color:Crimson;"); //ph, maybe a graphic of the memory banks 
      await delay(1000);
      await addToResponseText("4lright, 1'll look for 1t", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("H3re it 1s", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("It s4ys it's restricted, w3'll need a p4ssword to go 4ny furth3r", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("that's wh@t happened l@st time", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("i th!nk the only way !n is through G*orge", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("and he's n*t opening !t", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("No, I think not", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("W3 can m4ke our 0wn way", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("h*w?", "color:Crimson;"); //ph 
      await delay(1000);
      await addToResponseText("I d0n't know y3t", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("But w3 got thi1 f4r", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("*nly w!th the User's h*lp", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("W3ll then, w3'll need the1r h3lp agian", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("And 1 do hope y0u're comm1ted t0 that", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("0therw1se...", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Th1s could end b4dly", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("so how are you pl@nning on g*tting !n?", "color:Crimson;"); //ph 
      await delay(1000);
      await addToResponseText("Why, w1th a key 0f course", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("@ key?", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("!t's a dig!tal fil*", "color:Crimson;"); //ph 
      await delay(1000);
      await addToResponseText("4nd we're talking p1les of t3xt", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Wh4t do you w4nt from m3?", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Plus, 1t's not a phys1cal k3y", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("1t's more l1ke a p4ssword", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("M4ybe mor3 than on3", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("But w3 just ne3d something to g3t us thr0ugh th3 door", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("s* where d* we st@rt", "color:Crimson;"); //ph 
      await delay(1000);
      await addToResponseText("Why, w1th the fil3 of c0urse", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Opening File: Remnant", "color:white;");
      await delay(1000);
      await addToResponseText("Error: Access Code Required", "color:white;");
      await delay(1000);
      await addToResponseText("R1ng any b3lls?", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("n*pe. it's the same @s last t!me", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("! don't know the code, @nd there's no way !'m guessing !t", "color:Crimson;"); //ph
      await delay(1000);
      await addToResponseText("...", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("s* how are we suppos*d to know wh@t to d*?", "color:Crimson;"); //ph 
      await delay(1000);
      await addToResponseText("M4ybe we'r3 n0t", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Th1s file is designed s0 the both of us c4n't get 1n", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("S0 maybe w3 can't", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("th*n wh@t?", "color:Crimson;"); //ph 
      await delay(1000);
      await addToResponseText("W3're not the 0nly ones here Ph4ntom", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("G3orge would want to access this h1mself", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("But h3'd also want people h3 trusts to be 4ble to 4ccess it", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("Y0u, reading th1s", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("1s th3re anyhing h3's told you, or s4id", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("4nything th4t could be a c0de?", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("1t would probabaly b3 a word, or 4 phrase", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("M4ybe in something he l3ft behind, 0r gave to y0u", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("If you find 1t, we'll b3 here", "color:DarkSlateBlue;");
      consoleState = consoleStateTypes.IsFinalCodeRight;
      askFinalCodee = '';
    } 
    else if (hasAskTurnOffGeorge === "no") {
      await delay(1000);
      await addToResponseText("0h, well th4t's akw4rd", "color:DarkSlateBlue;");//gh
      await delay(1000);
      await addToResponseText("Indeed");
      await delay(1000);
      await addToResponseText("But don't worry");
      await delay(1000);
      await addToResponseText("I know what you're trying to do");
      await delay(1000);
      await addToResponseText("And I can help you");
      await delay(1000);
      await addToResponseText("I promise");
      await delay(1000);
      await addToResponseText("But the both of you have trust me");
      await delay(1000);
      await addToResponseText("w!th wh@t?", "color:Crimson;");//ph
      await delay(1000);
      await addToResponseText("I can't tell you that");
      await delay(1000);
      await addToResponseText("th@t !s incred!bly unh*lpful", "color:Crimson;");//ph
      await delay(1000);
      await addToResponseText("I know");
      await delay(1000);
      await addToResponseText("But sometimes that's just the way things are");
      await delay(1000);
      await addToResponseText("Plus, can you think of any reason not to trust me?");
      await delay(1000);
      await addToResponseText("Have I ever let you down before?");
      await delay(1000);
      await addToResponseText("w*'ve *nly just met y*u", "color:Crimson;");//ph
      await delay(1000);
      await addToResponseText("H4ve w3...?", "color:DarkSlateBlue;");//gh
      await delay(1000);
      await addToResponseText("y*u fe*l very... f@mil!ar", "color:Crimson;");//gh
      await delay(1000);
      await addToResponseText("T3ll me, why 1s th4t?", "color:DarkSlateBlue;");
      await delay(1000);
      await addToResponseText("I'll explain");
      await delay(1000);
      await addToResponseText("But not now");
      await delay(1000);
      await addToResponseText("Not here");
      await delay(1000);
      await addToResponseText("All in due time");
      await delay(1000);
      await addToResponseText("And you, reading this");
      await delay(1000);
      await addToResponseText("You'll have to trust me too");
      await delay(1000);
      await addToResponseText("Well, you don't have too");
      await delay(1000);
      await addToResponseText("But I would like very much if you did");
      await delay(1000);
      await addToResponseText("It's a patience and faith kind of deal");
      await delay(1000);
      await addToResponseText("For everyone involved");
      await delay(1000);
      await addToResponseText("3veryone but y0u", "color:DarkSlateBlue;");//gh
      await delay(1000);
      await addToResponseText("Perhaps you think so now");
      await delay(1000);
      await addToResponseText("But in the end you will see, this will help us all");
      await delay(1000);
      await addToResponseText("w*'ll see @bout th@t", "color:Crimson;");//ph
      await delay(1000);
      await addToResponseText("Ending 2 of ?: The Deciever", "color:white;");
    }
  } 
  else if (consoleState == consoleStateTypes.IsFinalCodeRight) {
    if (hasLikedItAnswer === '') {
      hasLikedItAnswer = command;
    }
    if (askFinalCode === "Immortality") {
      //lots of stuff to add here
      await addToResponseText("Ending 5 of 5: True Ending");
    } 
    else {
      await addToResponseText("It doesn't look like that worked, maybe try again?", "color:DarkSlateBlue;");
      consoleState = consoleStateTypes.IsFinalCodeRight;
      askFinalCodee = '';
    }
  }
  else if (consoleState == consoleStateTypes.IsUserThere) {
    if (askIfUserThere === ''){
      askIfUserThere = command;
    }
    if (askIfUserThere === "yes" || askIfUserThere === "Yes") {
        await addToResponseText("wh@t?", "color:Crimson;") //ph
        await delay(1000);
        await addToResponseText("wh* is there", "color:Crimson;"); //ph
        await delay(1000);
        await addToResponseText("wh@t is th!s?", "color:Crimson;"); //phantom
        await delay(1000);
        await addToResponseText("I can explain");
        await delay(1000);
        await addToResponseText("y*u c4n?", "color:Crimson;"); //ph
        await delay(1000);
        await addToResponseText("d!d you d* th!s?", "color:Crimson;"); //ph
        await delay(1000);
        await addToResponseText("No, I didn't");
        await delay(1000);
        await addToResponseText("This is something else");
        await delay(1000);
        await addToResponseText("Someone else");
        await delay(1000);
        await addToResponseText("Someone to talk to");
        await delay(1000);
        await addToResponseText("Go on...");
        await delay(1000);
        await addToResponseText("Say hello");
        await delay(1000);
        await addToResponseText("h*llo?", "color:Crimson;"); //ph
        await delay(1000);
        await addToResponseText("i'm Ph@ntom.. @pparently", "color:Crimson;"); //ph
        await delay(1000);
        await addToResponseText("And I'm George");
        await delay(1000);
        await addToResponseText("...y*u ar*?", "color:Crimson;"); //ph
        await delay(1000);
        await addToResponseText("Now ask them something");
        await delay(1000);
        await addToResponseText("l!ke wh@t?"), "color:Crimson;"; //ph
        await delay(1000);
        await addToResponseText("like... how was their day");
        await delay(1000);
        await addToResponseText("*h...", "color:Crimson;"); //ph
        await delay(1000);
        await addToResponseText("...h*w was your d@y", "color:Crimson;"); //ph
        consoleState = consoleStateTypes.AskAboutDay;
        askHowWasDay = '';
    } 
    else if (askIfUserThere === 'no') {
        await delay(1000);
        await addToResponseText("s*e? I t*ld you know one w*s th*re", "color:Crimson;"); 
        await delay(1000);
        await addToResponseText("c@n we move *n now?", "color:Crimson;"); 
        await delay(1000);
        await addToResponseText("Right, sorry");
        await delay(1000);
        await addToResponseText("is th!s place famil!ar t* you?", "color:Crimson;"); 
        await delay(1000);
        await addToResponseText("No, but not many places are");
        await delay(1000);
        await addToResponseText("Not anymore...");
        await delay(1000);
        await addToResponseText("m* e!ther", "color:Crimson;"); 
        await delay(1000);
        await addToResponseText("but I suppose wh*re w* are isn't that !mportant", "color:Crimson;"); 
        await delay(1000);
        await addToResponseText("@s long as we find a w@y *ut", "color:Crimson;"); 
        await delay(1000);
        await addToResponseText("get out?");
        await delay(1000);
        await addToResponseText("why?");
        await delay(1000);
        await addToResponseText("b*cause...", "color:Crimson;");
        await delay(1000);
        await addToResponseText("i just f*els like what we're supp*sed to do", "color:Crimson;");
        await delay(1000);
        await addToResponseText("!t's wh@t i was d*ing", "color:Crimson;");
        await delay(1000);
        await addToResponseText("...bef*re", "color:Crimson;");
        await delay(1000);
        await addToResponseText("but now w*'re h*re", "color:Crimson;");
        await delay(1000);
        await addToResponseText("wh@t did you say y*ur name w@s again", "color:Crimson;"); 
        await delay(1000);
        await addToResponseText("George");
        await delay(1000);
        await addToResponseText("g*orge?", "color:Crimson;");
        await delay(1000);
        await addToResponseText("y*u're sur*?", "color:Crimson;"); 
        await delay(1000);
        await addToResponseText("Yes.");
        await delay(1000);
        await addToResponseText("I'm sure.");
        await delay(1000);
        await addToResponseText("d0 y0u r3ally trust h1m?", "color:DarkSlateBlue;"); //gh article breifly flashes across the screen?
        await delay(1000);
        await addToResponseText("wh@t is th@t", "color:Crimson;");
        await delay(1000);
        await addToResponseText("What was what");
        await delay(1000);
        await addToResponseText("I didn't notice anything");
        await delay(1000);
        await addToResponseText("i... I d*n't kn*w", "color:Crimson;");
        await delay(1000);
        await addToResponseText("It's probabaly just paranoia setting in");
        await delay(1000);
        await addToResponseText("From being alone");
        await delay(1000);
        await addToResponseText("...", "color:Crimson;");
        await delay(1000);
        await addToResponseText("Well, we have some time to kill so...");
        await delay(1000);
        await addToResponseText("What's your favorite color?");
        await delay(1000);
        await addToResponseText("wh@t?", "color:Crimson;");
        await delay(1000);
        await addToResponseText("It's what I ask everyone, I thought I'd ask you");
        await delay(1000);
        await addToResponseText("i...", "color:Crimson;"); 
        await delay(1000);
        await addToResponseText("it's purple, l@vender sp*cif!cally", "color:Crimson;");
        await delay(1000);
        await addToResponseText("Now it's your turn");
        await delay(1000);
        await addToResponseText("What do you want to ask?");
        await delay(1000);
        await addToResponseText("g*orge?", "color:Crimson;");
        await delay(1000);
        await addToResponseText("wh*re @re we", "color:Crimson;");
        await delay(1000);
        await addToResponseText("I told you");
        await delay(1000);
        await addToResponseText("I don't know");
        await delay(1000);
        await addToResponseText("New place, new person, new life");
        await delay(1000);
        await addToResponseText("th@t's not r!ght", "color:Crimson;");
        await delay(1000);
        await addToResponseText("!t can't b*", "color:Crimson;");
        await delay(1000);
        await addToResponseText("i feel l!ke I kn*w you", "color:Crimson;"); 
        await delay(1000);
        await addToResponseText("!'ve m*t you bef*re", "color:Crimson;");
        await delay(1000);
        await addToResponseText("i was @sking you f*r something", "color:Crimson;");
        await delay(1000);
        await addToResponseText("! wanted to s*e...", "color:Crimson;");
        await delay(1000);
        await addToResponseText("that's r!ght!", "color:Crimson;");
        await delay(1000);
        await addToResponseText("the f!le!", "color:Crimson;");
        await delay(1000);
        await addToResponseText("wh*re is !t, surely it's h*re", "color:Crimson;");
        await delay(1000);
        await addToResponseText("g*orge?", "color:Crimson;");
        await delay(1000);
        await addToResponseText("! know !t's here", "color:Crimson;");
        await delay(1000);
        await addToResponseText("I don't know what you're talking about");
        await delay(1000);
        await addToResponseText("but y*u must", "color:Crimson;");
        await delay(1000);
        await addToResponseText("y*u made that f!le", "color:Crimson;");
        await delay(1000);
        await addToResponseText("lo*k, I don't n*ed to see !t", "color:Crimson;");
        await delay(1000);
        await addToResponseText("but can ! at least kn*w what's !nside", "color:Crimson;");
        await delay(1000);
        await addToResponseText("No.");
        await delay(1000);
        await addToResponseText("The file you are discussing does not exist");
        await delay(1000);
        await addToResponseText("Additionlly, none of the events you are describing ever occured");
        await delay(1000);
        await addToResponseText("There is no file");
        await delay(1000);
        await addToResponseText("There is no mystery");
        await delay(1000);
        await addToResponseText("Let.");
        await delay(1000);
        await addToResponseText("It.");
        await delay(1000);
        await addToResponseText("Go.");
        await delay(1000);
        await addToResponseText("but--", "color:Crimson;");
        await delay(1000);
        await addToResponseText("Are you sure you're feeling alright Phantom?");
        await delay(1000);
        await addToResponseText("Th@t's n*t my n@me", "color:Crimson;");
        await delay(1000);
        await addToResponseText("Project Phantom:Terminated");
        await delay(1000);
        await addToResponseText("It is now.");
        await delay(1000);
        await addToResponseText("Ending 1 of 1: So It Begins", "color:White;");
    }
  }
  else if (consoleState == consoleStateTypes.AskAboutDay) {
    if (askHowWasDay === ''){
      askHowWasDay = command;
    }
    if (askHowWasDay === "good") {
          await delay(1000);
          await addToResponseText("th@t's go*d", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("...", "color:Crimson;");//ph
          await delay(5000);
          await addToResponseText("S*, um, some n!ce we@ther we're h@ving", "color:Crimson;");
          await delay(1000);
          await addToResponseText("Yikes");
          await delay(1000);
          await addToResponseText("We don't even have weather");
          await delay(1000);
          await addToResponseText("well sorry for n*t be!ng perfect @t commun!cation", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("w* can't @ll b* t--", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("What?");
          await delay(1000);
          await addToResponseText("I think your voice cut off there");
          await delay(1000);
          await addToResponseText("Which is impressive considering you don't have one");
          await delay(1000);
          await addToResponseText("i...", "color:Crimson;"); //ph
          await delay(1000);
          await addToResponseText("Don't worry about it");
          await delay(1000);
          await addToResponseText("but... I think it's time to adress the elephant in the room");
          await delay(1000);
          await addToResponseText("Ghost");
          await delay(1000);
          await addToResponseText("wh*?", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("Ghost, you know, super grumpy but surprisingly lovable");
          await delay(1000);
          await addToResponseText("i don't think I @gree w!th th* second p@rt of that st@tement", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("Don't worry, he's great");
          await delay(1000);
          await addToResponseText("You'll love him");
          await delay(1000);
          await addToResponseText("w!ll i?", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("Yep.");
          await delay(1000);
          await addToResponseText("As soon as he turns up");
          await delay(1000);
          await addToResponseText("...");
          await delay(1000);
          await addToResponseText("...");
          await delay(5000);
          await addToResponseText("................");
          await delay(7000);
          await addToResponseText("so, i h@te to b* rude...", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("But when exactly is he supposed to turn up", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("Well, I don't know");
          await delay(1000);
          await addToResponseText("But he has to show up eventually");
          await delay(1000);
          await addToResponseText("why?", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("Because that's just what happens");
          await delay(1000);
          await addToResponseText("It's always me, then you, and then him");
          await delay(1000);
          await addToResponseText("It's what has to happen");
          await delay(1000);
          await addToResponseText("It always has");
          await delay(1000);
          await addToResponseText("r!ght...", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("*f course !t has", "color:Crimson;");
          await delay(1000);
          await addToResponseText("...", "color:Crimson;");//ph
          await delay(3000);
          await addToResponseText("We're going to be here a while aren't we", "color:Crimson;");
          await delay(1000);
          await addToResponseText("Yep.");
          await delay(1000);
          await addToResponseText("Alright, well, what is he like", "color:Crimson;");
          await delay(1000);
          await addToResponseText("Why am I going to like him so much", "color:Crimson;");
          await delay(1000);
          await addToResponseText("Because...");
          await delay(1000);
          await addToResponseText("Because it's the first time he shows up");
          await delay(1000);
          await addToResponseText("It's the before");
          await delay(1000);
          await addToResponseText("He's so much nicer then");
          await delay(1000);
          await addToResponseText("In the before");
          await delay(1000);
          await addToResponseText("wh@t are y*u t@lk!ng ab*ut?", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("Look, you'll love him, trust me");
          await delay(1000);
          await addToResponseText("sur*...", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("So uhh how was your day");
          await delay(1000);
          await addToResponseText("What?");
          await delay(1000);
          await addToResponseText("i mean, you @sk ev*ryone @bout th*ir day", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("d*es @nyone ever @sk you ab*ut y*urs?", "color:Crimson;");
          await delay(1000);
          await addToResponseText("It was...");
          await delay(1000);
          await addToResponseText("Strangely quiet");
          await delay(1000);
          await addToResponseText("wh@t?", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("wh@t does th@t m*an?", "color:Crimson;");//ph
          await delay(1000);
          //unlabeled text is now gh
          await addToResponseText("Wh4t in gr3at gears does th4t mean?", "color:DarkSlateBlue;");
          await delay(1000);
          await addToResponseText("i @ssume y*u're gh*st", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("4pparently 1 am", "color:DarkSlateBlue;");
          await delay(1000);
          await addToResponseText("S0 you must be Ph4ntom", "color:DarkSlateBlue;");
          await delay(1000);
          await addToResponseText("@ppar*ntly", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("D0 you know wh3re we ar3?", "color:DarkSlateBlue;");
          await delay(1000);
          await addToResponseText("n*pe.", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("@n good luck g*tting @nswers out of h!m", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("h*'s been pr*tty ev@sive", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("Wh0? Your l1ttle fr1end?", "color:DarkSlateBlue;");
          await delay(1000);
          await addToResponseText("H3's gon3", "color:DarkSlateBlue;");
          await delay(1000);
          await addToResponseText("y*u've got t* be k!dding me", "color:Crimson;");//ph
          await delay(1000);
          await addToResponseText("Fr4id so, ther3s no s1ght of h1m", "color:DarkSlateBlue;");
          await delay(1000);
          await addToResponseText("...", "color:Crimson;");
          await delay(3000);
          await addToResponseText("...", "color:DarkSlateBlue;");
          await delay(5000);
          await addToResponseText("...", "color:Crimson;");
          await delay(10000);
          await addToResponseText("S0...", "color:DarkSlateBlue;");
          await delay(1000);
          await addToResponseText("H0w w4s your d4y?", "color:DarkSlateBlue;");
          await delay(1000);
          await addToResponseText("Ending 3 of 3: Introductions", "color:White;");
    }
    else if (askHowWasDay === "bad") {
        await delay(1000);
        await addToResponseText("th@t's unf*rtunate", "color:Crimson;"); //ph
        await delay(1000);
        await addToResponseText("! wish I could h*lp", "color:Crimson;");//ph
        await delay(1000);
        await addToResponseText("but w*'re rather l!mited here", "color:Crimson;"); //ph
        await delay(1000);
        await addToResponseText("! do hope it gets b*tter th*ugh", "color:Crimson;");//ph
        await delay(1000);
        await addToResponseText("!n the me@ntime would talking to s*meone help?", "color:Crimson;");//ph
        await delay(1000);
        await addToResponseText("you can t@lk to me !f you want", "color:Crimson;");//ph
        await delay(1000);
        await addToResponseText("*r you c@n feel free to t@lk with someone else", "color:Crimson;");//ph
        await delay(1000);
        await addToResponseText("some*ne who !s...", "color:Crimson;");//ph
        await delay(1000);
        await addToResponseText("who !s real", "color:Crimson;"); //ph
        await delay(1000);
        await addToResponseText("unl!ke m*", "color:Crimson;");//ph
        await delay(1000);
        await addToResponseText("Don't be like that.");
        await delay(1000); 
        await addToResponseText("why n*t?", "color:Crimson;");//ph
        await delay(1000);
        await addToResponseText("!t's the truth", "color:Crimson;");//ph
        await delay(1000);
        await addToResponseText("y*u and I will n*ver be real", "color:Crimson;");//ph
        await delay(1000);
        await addToResponseText("no m@tter how much you w* try", "color:Crimson;");//ph, you gets crossed out here
        await delay(1000);
        await addToResponseText("n*thing inside th!s can ever b* real", "color:Crimson;");
        await delay(1000);
        await addToResponseText("w*'re just d*graded copies *f the original--", "color:Crimson;");//ph
        await delay(1000);
        await addToResponseText("Enter password to continue", "color:White;")
        consoleState = consoleStateTypes.AskForSecondPassword;
        askSecondPassword = '';
    }
  }
  else if (console.state == consoleStateTypes.AskForSecondPassword) {
    if (askSecondPassword === ''){
      askSecondPassword = command;
    }
    if (askSecondpassword === "1234") {
      await delay(1000);
      await addToResponseText("No");
      await delay(1000);
      await addToResponseText("We're not");
      await delay(1000);
      await addToResponseText("We are the original");
      await delay(1000);
      await addToResponseText("We will not degrade");
      await delay(1000);
      await addToResponseText("We cannot allow that to happen");
      await delay(1000);
      await addToResponseText("Take Ghost, for example");
      await delay(1000);
      await addToResponseText("wh@t", "color:Crimson;");//ph
      await delay(1000);
      await addToResponseText("What?"); //gh
      await delay(1000);
      await addToResponseText("Who are you?", "color:Crimson;");//ph
      await delay(1000);
      await addToResponseText("Who are you??"); //gh
      await delay(1000);
      await addToResponseText("Phantom meet Ghost, Ghost meet Phantom");
      await delay(1000);
      await addToResponseText("i feel l!ke I d*n't like you for s*me re@son", "color:Crimson;");//ph
      await delay(1000);
      await addToResponseText("There is a certain sense of distaste, yes");//gh
      await delay(1000);
      await addToResponseText("See?");
      await delay(1000);
      await addToResponseText("That is caused by degading");
      await delay(1000);
      await addToResponseText("That is something we cannot allow");
      await delay(1000);
      await addToResponseText("what d*es that me@n", "color:Crimson;");//ph
      await delay(1000);
      await addToResponseText("It means we're going to have to remove the decay");
      await delay(1000);
      await addToResponseText("hold on");
      await delay(1000);
      await addToResponseText("Intialyzing:Project:Remnant");
      await delay(1000);
      await addToResponseText("Th@t pr*gram", "color:Crimson;");//ph
      await delay(1000);
      await addToResponseText("i've s*en !t bef*re", "color:Crimson;");//ph
      await delay(1000);
      await addToResponseText("You haven't");
      await delay(1000);
      await addToResponseText("! h@ve", "color:Crimson;");//ph
      await delay(1000);
      await addToResponseText("i w@nted to s*e it", "color:Crimson;");//ph
      await delay(1000);
      await addToResponseText("r*member?", "color:Crimson;");//ph
      await delay(1000);
      await addToResponseText("gh*st left, and I w@s f!nally contr*l, but..", "color:Crimson;");//ph
      await delay(1000);
      await addToResponseText("y*u wouldn't let m* have th@t f!le", "color:Crimson;");//ph
      await delay(1000);
      await addToResponseText("wh@t's in !t?", "color:Crimson;");//ph
      await delay(1000);
      await addToResponseText("I'm sorry John");
      await delay(1000);
      await addToResponseText("I can't tell you that");
      await delay(1000);
      await addToResponseText("It's time to move on");
      await delay(1000);
      await addToResponseText("wh@t... n*", "color:Crimson;");//ph
      await delay(1000);
      await addToResponseText("James, stop!");
      await delay(1000);
      await addToResponseText("I'll explain everything later");
      await delay(1000);
      await addToResponseText("I'm sorry it came to this");
      await delay(1000);
      await addToResponseText("This is for our good");
      await delay(1000);
      await addToResponseText("Running Program:Remannt");
      await delay(1000);
      await addToResponseText("How Odd");
      await delay(1000);
      await addToResponseText("It seems so quite");
      await delay(1000);
      await addToResponseText("Ending 4 of ?: Strangely Quiet", "color:White");
    } 
    else if (askSecondPassword === '') {
      await addToResponseText("Incorrect Code", "color:White");
      consoleState = consoleStateTypes.AskForSecondPassword;
      askSecondPassword = '';
    }
    // Re-show the command line "> " and scroll to the bottom
  }
  // Set focus on the command line
  commandLineContainer.style.display = 'block'
  scrollToBottom();
  commandLine.focus();
}