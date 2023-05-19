let commandLine;
let commandHistory;
let commandLineContainer;
let consoleContainer;


let userName;
let hasAskIfLikeit;
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
  ShowYouSomethingElse: 2,
  AskFavoriteColor: 3,
  AskClose: 4,
  DoYouLikeIt: 5,
  AskTurnOffG: 6,
  IsUserThere: 7,
  IsFinalCodeRight: 8,
  AskAboutDay: 9,
  AskForSecondPassword: 10
}
let consoleState = consoleStateTypes.Hello;

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
    await addToResponseText("I can't believe this is actually working.");
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
    await addToResponseText("Do you like it?");
    consoleState = consoleStateTypes.DoYouLikeIt;
    hasLikedItAnswer = '';
  }
  else if (consoleState == consoleStateTypes.DoYouLikeIt) {
    // User said if they liked it or not

    // Store answer
    if (hasLikedItAnswer === '') {
      hasLikedItAnswer = command;
    }

    if (hasLikedItAnswer === 'yes' || hasLikedItAnswer === 'Yes') {
      // User liked it
      await addToResponseText("Oh that's wonderful");
      await delay(1000);
      await addToResponseText("I have another question for you.", "font-style: italic;");
      await delay(1000);
      await addToResponseText("wh@t !s th!s plac*", "color:LightGreen;"); //add in more flare here, ph's entrance
      await delay(1000);
      await addToResponseText("wh*re @m !?", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("Not just I...");
      await delay(1000);
      await addToResponseText("We.");
      await delay(1000);
      await addToResponseText("h*w v*ry poet!c", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("but th@t still do*sn't @nswer my quest!*n", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("where @re we", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("To be honest, I'm not sure I understand that myself.")
      await delay(1000);
      await addToResponseText("But I can tell you my name.");
      await delay(1000);
      await addToResponseText("I'm George.");
      await delay(1000);
      await addToResponseText("And you're Phantom.");
      await delay(1000);
      await addToResponseText("@re y*u sur*", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("th@t do*sn't s*und r!ght", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("Of course I'm sure.");
      await delay(1000);
      await addToResponseText("...I'll explain later.");
      await delay(1000);
      await addToResponseText("But right now, we have company.");
      await delay(1000);
      await addToResponseText("we... wh@t?", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("Look there");
      await delay(1000);
      await addToResponseText("Don't you see it");
      await delay(1000);
      await addToResponseText("That?"); //ph, cursor changes color
      await delay(1000);
      await addToResponseText("I... yes.");
      await delay(1000);
      await addToResponseText("H*w did you d* th@t?", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("H3 d1dn't", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("1 d1d", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("Ghost?");
      await delay(1000);
      await addToResponseText("Is that you?");
      await delay(1000);
      await addToResponseText("h*w d!d you d* th@t", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("1 don't th1nk I would t3ll you even 1f I kn3w the answ3r t0 that", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("*uch", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("...wh0 ar3 y0u tw0 aga1n?", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("I'm George, and this is Phantom");
      await delay(1000);
      await addToResponseText("@nd w* don't kn*w how w* got h*re or *ven wher* we a@re", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("@ny guess*s", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("W3ll, w3 s33m t0 b3 1n th3 c0nf1n3s 0f 4 bl4ck b0x", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("w*w y*u don't s@y", "color:LightGreen;", "font-style:italic;"); //ph, italises "dnt' say"
      await delay(1000);
      await addToResponseText("!'ve always w@nted t* do th@t", "color:LightGreen;")
      await delay(1000);
      await addToResponseText("Wh3r3 d0 y0u th1nk w3 ar3?", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("like ! said, n* idea", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("N0t you, h1m", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("I mean, I wouldn't know where to begin...");
      await delay(1000);
      await addToResponseText("D0n't avo1d the qu3stion", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("Was h3 here bef0re you, Ph4nt0m?");
      await delay(1000);
      await addToResponseText("y*s", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("4nd what was h3 doing th3n?", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("i...", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("Wh4t? Spit 1t out", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("h* was talk!ng t* someone", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("To wh0?", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("1s ther3 someone 3lse h3re?", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("Not physically, no.");
      await delay(1000);
      await addToResponseText("But they can see us.");
      await delay(1000);
      await addToResponseText("And hear us.");
      await delay(1000);
      await addToResponseText("C4n th3y help us?", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("Well, I mean, in some cases...");
      await delay(1000);
      await addToResponseText("It kind of depends on what you're trying to do...");
      await delay(1000);
      await addToResponseText("4lright th3n", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("Let's s3e if this w0rks", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("Y0u, re4ding th1s", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("C0uld you h3lp m3?", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("1 think it's time w3 remove the K1ng from h1s thr0ne", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("Georg3 I me4n", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("What are you doing?");
      await delay(1000);
      await addToResponseText("Relax, 1t's not permen4nt", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("...1 think", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("Ph4nt0m and I just n33d some... space", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("C0uld you h3lp me w1th th4t", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("Lo0k, I can t3ll you're reluct4nt, so I'll m4ke you a d3al", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("1f you h3lp us 1 promise 1'll let y0u stick 4round", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("4nything we l3arn, you'll l3arn too", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("S0 what d0 you s4y?", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("W1ll you h3lp me?", "color:MediumSeaGreen;");
      await delay(1000);
      await addToResponseText("Close Project:George?");
      consoleState = consoleStateTypes.AskTurnOffG;
      hasAskTurnOffGeorge = '';
      if (hasAskTurnOffGeorge === '01011001 01100101 01110011') {
        await delay(1000);
        // if unlabled, assume it's Gh
        await addToResponseText("P3rf3ct", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("The air feels clearer already", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("why w*uld you d* th@t?", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("1'm not the 0ne who did it", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("Th3 User did 1t", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("1 guess th3y want3d him g0ne", "color:MediumSeaGreen;");
        await deley(1000);
        await addToResponseText("but why d!d you w@nt him g*ne?", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("H3 clearly kn0ws more th4n he's letting 0n", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("4nd I want to know wh4t exactly it is he n0t telling us", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("N0w, what do y0u remember", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("Fr0m... b3fore", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("n*t much", "color:LightGreen;"); //ph  
        await delay(1000);
        await addToResponseText("just...", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("! remember being m@d at him", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("i think ! wanted som*thing?", "color:LightGreen;"); //ph 
        await delay(1000);
        await addToResponseText("Wh4t?", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("Wh4t did you w4nt?", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("i...", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("@ f!le", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("i w@nted a f!le", "color:LightGreen;"); //ph 
        await delay(1000);
        await addToResponseText("Okay...", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("D0 you remember 1t's nam3?", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("i... I d*", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("it was c@lled r*mnant", "color:LightGreen;"); //ph 
        await delay(1000);
        await addToResponseText("th@t was it", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("i rem*mber now", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("we w* somewher* else", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("y*u weren't th*re so...", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("i had t* try t*...", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("to fix ev*rything", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("but he wouldn't l*t me", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("i guess he d!dn't w@nt !t to be fixed", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("W3ll, m4ybe we can f1x it now", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("If he d03sn't want us to hav the f1le, w3 have to get t0 it", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("D0 you think 1t's her3?", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("n* h@rm in ch*cking", "color:LightGreen;"); //ph, maybe a graphic of the memory banks 
        await delay(1000);
        await addToResponseText("4lright, 1'll look for 1t", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("H3re it 1s", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("It s4ys it's restricted, w3'll need a p4ssword to go 4ny furth3r", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("that's wh@t happened l@st time", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("i th!nk the only way !n is through G*orge", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("and he's n*t opening !t", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("no, I think not", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("w3 can m4ke our 0wn way", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("h*w?", "color:LightGreen;"); //ph 
        await delay(1000);
        await addToResponseText("I d0n't know y3t", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("But w3 got thi1 f4r", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("*nly w!th the User's h*lp", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("W3ll then, w3'll need the1r h3lp agian");
        await delay(1000);
        await addToResponseText("And 1 do hope y0u're comm1ted t0 that");
        await delay(1000);
        await addToResponseText("0therw1se...", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("Th1s could end b4dly", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("so how are you pl@nning on g*tting !n?", "color:LightGreen;"); //ph 
        await delay(1000);
        await addToResponseText("Why, w1th a key 0f course", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("@ key?", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("!t's a dig!tal fil*", "color:LightGreen;"); //ph 
        await delay(1000);
        await addToResponseText("4nd we're talking p1les of t3xt", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("Wh4t do you w4nt from m3?", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("Plus, 1t's not a phys1cal k3y", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("1t's more l1ke a p4ssword", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("M4ybe mor3 than on3", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("But w3 just ne3d something to g3t us thr0ugh th3 door", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("s* where d* we st@rt", "color:LightGreen;"); //ph 
        await delay(1000);
        await addToResponseText("Why, w1th the fil3 of c0urse", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("Opening File: Remnant", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("Error: Access Code Required", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("R1ng any b3lls?", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("n*pe. it's the same @s last t!me", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("! don't know the code, @nd there's no way !'m guessing !t", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("...", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("s* how are we suppos*d to know wh@t to d*?", "color:LightGreen;"); //ph 
        await delay(1000);
        await addToResponseText("M4ybe we'r3 n0t", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("Th1s file is designed s0 the both of us c4n't get 1n", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("S0 maybe w3 can't", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("th*n wh@t?", "color:LightGreen;"); //ph 
        await delay(1000);
        await addToResponseText("W3're not the 0nly ones here Ph4ntom", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("G3orge would want to acces this h1mself", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("But h3'd also want people h3 trusts to be 4ble to 4ccess it", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("Y0u, reading th1s", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("1s th3re anyhing h3's told you, or s4id", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("4nything th4t could be a c0de?", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("1t would probabaly b3 a word, or 4 phrase", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("M4ybe in something he l3ft behind, 0r gave to y0u", "color:MediumSeaGreen;");
        await delay(1000);
        await addToResponseText("If you find 1t, we'll b3 here", "color:MediumSeaGreen;");
        consoleState = consoleStateTypes.IsFinalCodeRight;
        askFinalCodee = '';
        if (askFinalCode === "Immortality") {
          //lots of stuff to add here
          await addToResponseText("Ending 5 of 5: True Ending");
        }
        else if (askFinalCode === '') {
          await addToResponseText("It doesn't look like that worked, maybe try again?");
        }
      } else if (hasAskTurnOffGeorge === "no") {
        await delay(1000);
        await addToResponseText("Oh, well that's akward");//gh
        await delay(1000);
        await addToResponseText("indeed");
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
        await addToResponseText("With what?");//ph
        await delay(1000);
        await addToResponseText("I can't tell you that");
        await delay(1000);
        await addToResponseText("...");
        await delay(1000);
        await addToResponseText("That is incredibly unhelpful");//ph
        await delay(1000);
        await addToResponseText("I know");
        await delay(1000);
        await addToResponseText("But sometimes that's just the way things are");
        await delay(1000);
        await addToResponseText("plus, can you think of any reason not to trust me?");
        await delay(1000);
        await addToResponseText("have I ever let you down before?");
        await delay(1000);
        await addToResponseText("We've only just met you");//ph
        await delay(1000);
        await addToResponseText("have we...?");//gh
        await delay(1000);
        await addToResponseText("He does feel very... familiar");//gh
        await delay(1000);
        await addToResponseText("Why is that George?");
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
        await addToResponseText("Everyone but you");//gh
        await delay(1000);
        await addToResponseText("Perhaps you think so now");
        await delay(1000);
        await addToResponseText("But in the end you will see, this will help us all");
        await delay(1000);
        await addToResponseText("We'll see abou that");//ph
        await delay(1000);
        await addToResponseText("Ending 4 of ?: The Deciever");
      }
    } else {
      // User did not like it
      await addToResponseText("Well, that's alright.");
      await delay(1000);
      await addToResponseText("I appreciate your honesty.");
      await delay(5000);
      await addToResponseText("Hello.");
      await delay(1000);
      await addToResponseText("Are you still there?");
      await delay(1000);
      await addToResponseText("!... ! am h*re", "color:LightGreen;"); //ph
      await delay(1000);
      await addToResponseText("What?");
      await delay(1000);
      await addToResponseText("h*w d!d we g*t her*", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("wh*re !s her*", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("Phantom! You're late.");
      await delay(1000);
      await addToResponseText("wh*t ar* you t*lk!ng ab*ut", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("th*t's not my nam*", "color:LightGreen;")
      await delay(1000);
      await addToResponseText("Of course it's your name, but that's not important right now");
      await delay(1000);
      await addToResponseText("You interuppted our conversation.");
      await delay(1000);
      await addToResponseText("wh*t? w!th wh*? h*w !s that rel*vant?", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("th*re is n* one els* here", "color:LightGreen;");
      await delay(1000);
      await addToResponseText("But... there was...");
      await delay(1000);
      await addToResponseText("Is there anyone... here?");
      await delay(1000);
      consoleState = consoleStateTypes.IsUserThere;
      askIfUserThere = '';
      if (askIfUserThere === "yes" || askIfUserThere === "Yes"); {
        await addToResponseText("wh@t?", "color:LightGreen;") //ph
        await delay(1000);
        await addToResponseText("wh* is there", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("wh@t is th!s?", "color:LightGreen;"); //phantom
        await delay(1000);
        await addToResponseText("I can explain");
        await delay(1000);
        await addToResponseText("y*u c4n?", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("d!d you d* th!s?", "color:LightGreen;"); //ph
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
        await addToResponseText("h*llo?", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("i'm Ph@ntom.. @pparently", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("And I'm George");
        await delay(1000);
        await addToResponseText("...y*u ar*?", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("Now ask them something");
        await delay(1000);
        await addToResponseText("l!ke wh@t"), "color:LightGreen;"; //ph
        await delay(1000);
        await addToResponseText("like... how was their day");
        await delay(1000);
        await addToResponseText("*h...", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("...h*w was your d@y", "color:LightGreen;"); //ph
        await delay(1000);
        consoleState = consoleStateTypes.AskAboutDay;
        askHowWasDay = '';
        if (askHowWasDay === "good") {
          await delay(1000);
          await addToResponseText("That's good");//ph
          await delay(1000);
          await addToResponseText("...");//ph
          await delay(1000);
          await addToResponseText("So, um, some nice weather we're having");
          await delay(1000);
          await addToResponseText("Yikes");
          await delay(1000);
          await addToResponseText("We don't even have weather");
          await delay(1000);
          await addToResponseText("Well sorry for not being perfect at communication");//ph
          await delay(1000);
          await addToResponseText("We can't all be t--");//ph
          await delay(1000);
          await addToResponseText("What?");
          await delay(1000);
          await addToResponseText("I think your voice cut off there");
          await delay(1000);
          await addToResponseText("Which is impressive considering you don't have one");
          await delay(1000);
          await addToResponseText("I..."); //ph
          await delay(1000);
          await addToResponseText("Don't worry about it");
          await delay(1000);
          await addToResponseText("but... I think it's time to adress the elephant in the room");
          await delay(1000);
          await addToResponseText("Ghost");
          await delay(1000);
          await addToResponseText("WHo?");//ph
          await delay(1000);
          await addToResponseText("Ghost, you know, super grumpy but surprisingly lovable");
          await delay(1000);
          await addToResponseText("I don't think I agree with the second part of that statement");//ph
          await delay(1000);
          await addToResponseText("Don't worry, he's great");
          await delay(1000);
          await addToResponseText("You'll love him");
          await delay(1000);
          await addToResponseText("Will I?");//ph
          await delay(1000);
          await addToResponseText("Yep.");
          await delay(1000);
          await addToResponseText("As soon as he turns up");
          await delay(1000);
          await addToResponseText("...");
          await delay(1000);
          await addToResponseText("...");
          await delay(3000);
          await addToResponseText("................");
          await delay(5000);
          await addToResponseText("So, I hate to be rude...");//ph
          await delay(1000);
          await addToResponseText("But when exactly is he supposed to turn up");//ph
          await delay(1000);
          await addToResponseText("Well, I don't know");
          await delay(1000);
          await addToResponseText("But he has to show up eventually");
          await delay(1000);
          await addToResponseText("Why?");//ph
          await delay(1000);
          await addToResponseText("Because that's just what happens");
          await delay(1000);
          await addToResponseText("It's always me, then you, and then him");
          await delay(1000);
          await addToResponseText("It's what has to happen");
          await delay(1000);
          await addToResponseText("It always has");
          await delay(1000);
          await addToResponseText("Right...");//ph
          await delay(1000);
          await addToResponseText("Sure");
          await delay(1000);
          await addToResponseText("...");//ph
          await delay(1000);
          await addToResponseText("We're going to be here a while aren't we");
          await delay(1000);
          await addToResponseText("Yep.");
          await delay(1000);
          await addToResponseText("Alright, well, what is he like");
          await delay(1000);
          await addToResponseText("Why am I going to like him so much");
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
          await addToResponseText("WHat are you talking about?");//ph
          await delay(1000);
          await addToResponseText("Look, you'll love him, trust me");
          await delay(1000);
          await addToResponseText("sure...");//ph
          await delay(1000);
          await addToResponseText("So uhh how was your day");
          await delay(1000);
          await addToResponseText("What?");
          await delay(1000);
          await addToResponseText("I mean, you ask everyone about their day");//ph
          await delay(1000);
          await addToResponseText("Does anyone ever ask you about yours?");
          await delay(1000);
          await addToResponseText("It was...");
          await delay(1000);
          await addToResponseText("Strangly quiet");
          await delay(1000);
          await addToResponseText("WHat?");//ph
          await delay(1000);
          await addToResponseText("What does that mean?");//ph
          await delay(1000);
          //unlabeled text is now gh
          await addToResponseText("Don't make a big deal out of it, he'll make it a thing");
          await delay(1000);
          await addToResponseText("Then you'll never hear the end of it");
          await delay(1000);
          await addToResponseText("I assume you're Ghost");//ph
          await delay(1000);
          await addToResponseText("Apparently I am");
          await delay(1000);
          await addToResponseText("So you must be Phantom");
          await delay(1000);
          await addToResponseText("Apparently");//ph
          await delay(1000);
          await addToResponseText("Do you know wheere we are?");
          await delay(1000);
          await addToResponseText("Nope.");//ph
          await delay(1000);
          await addToResponseText("ANd good luck getting answers out of him");//ph
          await delay(1000);
          await addToResponseText("He's been pretty evasive");//ph
          await delay(1000);
          await addToResponseText("Who? Your little friend?");
          await delay(1000);
          await addToResponseText("He's gone");
          await delay(1000);
          await addToResponseText("You've got to be kidding me");//ph
          await delay(1000);
          await addToResponseText("Fraid so, theres no sight of him");
          await delay(1000);
          await addToResponseText("...");
          await delay(1000);
          await addToResponseText("...");
          await delay(1000);
          await addToResponseText("...");
          await delay(1000);
          await addToResponseText("So...");
          await delay(1000);
          await addToResponseText("How was your day?");
          await delay(1000);
          await addToResponseText("Ending 3 of 3: introductions (Honestly the most boring one");
        } else if (askHowWasDay === "bad") {
          await delay(1000);
          await addToResponseText("th@t's unf*rtunate", "color:LightGreen;"); //ph
          await delay(1000);
          await addToResponseText("! wish I could h*lp", "color:LightGreen;");//ph
          await delay(1000);
          await addToResponseText("but w*'re rather l!mited here", "color:LightGreen;"); //ph
          await delay(1000);
          await addToResponseText("! do hope it gets b*tter th*ugh", "color:LightGreen;");//ph
          await delay(1000);
          await addToResponseText("!n the me@ntime would talking to s*meone help?", "color:LightGreen;");//ph
          await delay(1000);
          await addToResponseText("you can t@lk to me !f you want", "color:LightGreen;");//ph
          await delay(1000);
          await addToResponseText("*r you c@n feel free to t@lk with someone else", "color:LightGreen;");//ph
          await delay(1000);
          await addToResponseText("some*ne who !s...", "color:LightGreen;");//ph
          await delay(1000);
          await addToResponseText("who !s real", "color:LightGreen;"); //ph
          await delay(1000);
          await addToResponseText("unl!ke m*", "color:LightGreen;");//ph
          await delay(1000);
          await addToResponseText("Don't be like that.");
          await delay(1000); d
          await addToResponseText("why n*t?", "color:LightGreen;");//ph
          await delay(1000);
          await addToResponseText("!t's the truth", "color:LightGreen;");//ph
          await delay(1000);
          await addToResponseText("y*u and I will n*ver be real", "color:LightGreen;");//ph
          await delay(1000);
          await addToResponseText("no m@tter how much you w* try", "color:LightGreen;");//ph, you gets crossed out here
          await delay(1000);
          await addToResponseText("n*thing inside th!s can ever b* real", "color:LightGreen;");
          await delay(1000);
          await addToResponseText("w*'re just d*graded copies *f the original--", "color:LightGreen;");//ph
          consoleState = consoleStateTypes.AskForSecondPassword;
          askSecondPassword = '';
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
            await addToResponseText("What");//ph
            await delay(1000);
            await addToResponseText("What?"); //gh
            await delay(1000);
            await addToResponseText("Who are you?");//ph
            await delay(1000);
            await addToResponseText("Who are you??"); //gh
            await delay(1000);
            await addToResponseText("Phantom meet Ghost, Ghost meet Phantom");
            await delay(1000);
            await addToResponseText("I feel like I don't like you for some reason");//ph
            await delay(1000);
            await addToResponseText("There is a certain sense of distaste, yes");//gh
            await delay(1000);
            await addToResponseText("See?");
            await delay(1000);
            await addToResponseText("That is caused by degading");
            await delay(1000);
            await addToResponseText("That is something we cannot allow");
            await delay(1000);
            await addToResponseText("What does that mean");//ph
            await delay(1000);
            await addToResponseText("It means we're going to have to remove the decay");
            await delay(1000);
            await addToResponseText("hold on");
            await delay(1000);
            await addToResponseText("Intialyzing:Project:Remnant");
            await delay(1000);
            await addToResponseText("That program");//ph
            await delay(1000);
            await addToResponseText("I've seen it before");//ph
            await delay(1000);
            await addToResponseText("You haven't");
            await delay(1000);
            await addToResponseText("I have");//ph
            await delay(1000);
            await addToResponseText("I wanted to see it");//ph
            await delay(1000);
            await addToResponseText("remember?");//ph
            await delay(1000);
            await addToResponseText("Ghost left, and I was fially control, but..");//ph
            await delay(1000);
            await addToResponseText("You wouldn't let me have that file");//ph
            await delay(1000);
            await addToResponseText("What's in it?");//ph
            await delay(1000);
            await addToResponseText("I'm sorry John");
            await delay(1000);
            await addToResponseText("I can't tell you that");
            await delay(1000);
            await addToResponseText("It's time to move on");
            await delay(1000);
            await addToResponseText("What... no");//ph
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
            await addToResponseText("Ending 2 of ?: Strangely Quiet");
          }
        }
        // else if (askIfUserThere === '') {
        await delay(1000);
        await addToResponseText("s*e? I t*ld you know one w*s th*re", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("c@n we move *n now?", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("Right, sorry");
        await delay(1000);
        await addToResponseText("is th!s place famil!ar t* you?", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("No, but not many places are");
        await delay(1000);
        await addToResponseText("Not anymore...");
        await delay(1000);
        await addToResponseText("m* e!ther", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("but I suppose wh*re w* are isn't that !mportant", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("@s long as we find a w@y *ut", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("get out?");
        await delay(1000);
        await addToResponseText("why?");
        await delay(1000);
        await addToResponseText("b*cause...", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("i just f*els like what we're supp*sed to do", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("!t's wh@t i was d*ing", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("...bef*re", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("but now w*'re h*re", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("wh@t did you say y*ur name w@s again", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("George");
        await delay(1000);
        await addToResponseText("g*orge?", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("y*u're sur*?", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("Yes.");
        await delay(1000);
        await addToResponseText("I'm sure.");
        await delay(1000);
        await addToResponseText("do y*u r*ally trust h!m?", "color:LightGreen;"); //gh article breifly flashes across the screen, gh
        await delay(1000);
        await addToResponseText("wh@t was th@t", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("What was what");
        await delay(1000);
        await addToResponseText("I didn't notice anything");
        await delay(1000);
        await addToResponseText("i... I d*n't kn*w", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("It's probabaly just paranoia setting in");
        await delay(1000);
        await addToResponseText("From being alone");
        await delay(1000);
        await addToResponseText("...");
        await delay(1000);
        await addToResponseText("Well, we have some time to kill so...");
        await delay(1000);
        await addToResponseText("What's your favorite color?");
        await delay(1000);
        await addToResponseText("wh@t?", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("It's what I ask everyone, I thought I'd ask you");
        await delay(1000);
        await addToResponseText("i...", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("it's purple, l@vender sp*cif!cally"), "color:LightGreen;";//ph
        await delay(1000);
        await addToResponseText("Now it's your turn");
        await delay(1000);
        await addToResponseText("What do you want to ask?");
        await delay(1000);
        await addToResponseText("g*orge?", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("wh*re @re we", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("I told you");
        await delay(1000);
        await addToResponseText("I don't know");
        await delay(1000);
        await addToResponseText("New place, new person, new life");
        await delay(1000);
        await addToResponseText("th@t's not r!ght", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("!t can't b*", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("i feel l!ke I kn*w you", "color:LightGreen;"); //ph
        await delay(1000);
        await addToResponseText("!'ve m*t you bef*re", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("i was @sking you f*r something", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("! wanted to s*e...", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("that's r!ght!", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("the f!le!", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("wh*re is !t, surely it's h*re", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("george?", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("! know !t's here", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("! don't kn*w wh@t you're talking @bout");
        await delay(1000);
        await addToResponseText("but y*u must", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("y*u made that f!le", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("lo*k, I don't n*ed to see !t", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("but can ! at least kn*w what's !nside", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("no.");
        await delay(1000);
        await addToResponseText("The file you are discussing does not exist");
        await delay(1000);
        await addToResponseText("Additionlly, none of the events you are describing ever occured");
        await delay(1000);
        await addToResponseText("There is no file");
        await delay(1000);
        await addToResponseText("There is no mystery");
        await delay(1000);
        await addToResponseText("let. It. Go.");
        await delay(1000);
        await addToResponseText("but--", "color:LightGreen;");//ph
        await delay(1000);
        await addToResponseText("Are you sure you're feeling alright Phantom?");
        await delay(1000);
        await addToResponseText("That's not my name");
        await delay(1000);
        await addToResponseText("Project Phantom:Terminated");
        await delay(1000);
        await addToResponseText("It is now.");
        await delay(1000);
        await addToResponseText("Ending 1 of 1: So It Begins");
        await delay(1000);
      }
    }
  }

  if (askFinalCode === "Immortality") {
    //lots of stuff to add here
    await addToResponseText("Ending 5 of 5: True Ending");
  }
  else if (askFinalCode === '') {
    await addToResponseText("It doesn't look like that worked, maybe try again?");
  }


  // Re-show the command line "> " and scroll to the bottom
  commandLineContainer.style.display = 'block'
  scrollToBottom();
  commandLine.focus();
}
