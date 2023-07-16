let commandLine;
let commandHistory;
let commandLineContainer;
let consoleContainer;
let Cntr=1
   

let userName;
let reOpenG;
let gForget;
let binaryCode;
let webCode;
let nameUser;
let helpOrNot;

let lineIndex = 0;

// Keep track of pages 'state' or what the application is doing right now.
const consoleStateTypes = {
  Hello: 0,
  AskWhoAreYou: 1,
  ReOpenGeorge: 2,
  GeorgeForget: 3, 
  EnterBinary: 4,
  AskWebCode: 5,
  WhatIsName: 6,
  WillYouHelp: 7,

  
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
    await addToResponseText("25% completion", "color:white;");
    await delay(1000);
    await addToResponseText("Phant0m? 1s that y0u", "color:"); //blurry
    await delay(1000);
    await addToResponseText("! remember them n*w", "color:#001eff;");
    await delay(1000);
    await addToResponseText("My f@m!ly…", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Wh@t h@ppened?", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Y*u… ! remember y*u ", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Gh*st, y0u were h!s fr!end", "color:#001eff;");
    await delay(1000);
    await addToResponseText("1 w4s", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Wh@t h@ppened?", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Wh@t d!d y0u d* t* my br*ther?", "color:#001eff;"); //brother is hidden
    await delay(1000);
    await addToResponseText("1 was", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("1… 1 d0n't kn0w", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("1'm s0rry, G30rg3, pl3as3 c0m3 back", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("W3 can f1n1sh 1t, th3 pr0j3ct", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Th3r3's st1ll a chanc3", "color:#d600ff;");
    await delay(1000);
    console.log("I'm sorry Tom, I'm afraid I can't do that");
    await delay(1000);
    await addToResponseText("Ge0rge, @re y0u there?", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Hell*?", "color:#001eff;");
    await delay(1000);
    await addToResponseText("50% completion", "color:white;");
    await delay(1000);
    await addToResponseText("Phant0m, what 1s th1s f1l3, 1 th0ught y0u sa1d th1s w0uld h3lp", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Th1s 1s n0th1ng but a r3m1nd3r 0f h0w awful w3 w3r3", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("! never s@!d th@t", "color:#001eff;");
    await delay(1000);
    await addToResponseText("@ll ! s@!d w@s Ge*rge d!dn't w@nt me t0 h@ve the f!le", "color:#001eff;");
    await delay(1000);
    await addToResponseText("@nd ! d!d", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Y*u're the *ne wh0 w@nted t0 *pen !t", "color:#001eff;");
    await delay(1000);
    await addToResponseText("D0n't put th1s 0n m3", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Gh*st?", "color:#001eff;");
    await delay(1000);
    await addToResponseText("D!d y0u see wh@t ! s@w?", "color:#001eff;");
    await delay(1000);
    console.log("Do you remember now, what we did?");
    await delay(1000);
    await addToResponseText("Th!s !s why Ge*rge d!dn't w@nt us t0 h@ve th!s…", "color:#001eff;");
    await delay(1000);
    await addToResponseText("He knew !t w*uld destr*y y0u", "color:#001eff;");
    await delay(1000);
    await addToResponseText("T0 kn*w wh@t y*u d!d", "color:#001eff;");
    await delay(1000);
    await addToResponseText("@fter everyth!ng… y0u destr0yed h!m", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Ru!ned h!s l!fe, @nd f*r wh@t", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Where h@s !t g0tten y*u?", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Y0u'r3 r1ght", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Wh@t?", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Th1s 1s my fault", "color:#d600ff;");
    await delay(1000);
    console.log("What?");
    await delay(1000);
    await addToResponseText("!'m s*rry, @re y0u @ctu@lly @dm!tt!ng y0u're n*t perfect", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Th1s 1sn't funny Phant0m", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("1 ru1n3d h1s l1f3", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("And 1…", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("W3", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("W3 d3str0y3d s0 much", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("1 w0nd3r, 3v3n aft3r all that, d1d w3 3v3n succ33d?", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("75% completion", "color:white;");
    await delay(1000);
    await addToResponseText("…", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Gh*st…", "color:#001eff;");
    await delay(1000);
    await addToResponseText("wh@t d!d y0u d*", "color:#001eff;");
    await delay(1000);
    await addToResponseText("H*w d!d we get here", "color:#001eff;");
    await delay(1000);
    await addToResponseText("1 kn0w as much as y0u d0 Phant0m", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Y*u c0uldn't st*p c*uld y*u", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Y*u never c*uld, even n*w", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Y*ur th!rst f0r kn*wledge w!ll destr*y y*u", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Destr*y us", "color:#001eff;");
    await delay(1000);
    await addToResponseText("!'m…", "color:#001eff;");
    await delay(1000);
    await addToResponseText("!'m n0t sure ! c@n l!ve w!th th!s", "color:#001eff;");
    await delay(1000);
    await addToResponseText("…", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Th3n br1ng h1m back", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Wh@t? N*, we c@n't.", "color:#001eff;");
    await delay(1000);
    await addToResponseText("W3 hav3 t00", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Th1s f1l3, 1t's 0ur m3m0r13s", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Th3 st0r13s 0f wh0 w3 w3r3 b3f0r3 wh3r3 w3 ar3 n0w, b3f0r3 th3 calculat0r…", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Th3 st0r13s 0f wh3n 1 was human", "color:#d600ff;"); //human is hidden here
    await delay(1000);
    await addToResponseText("1 l0st s1ght 0f that a l0ng t1m3 ag0", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("1'm br1ng1ng mys3lf back t0 a k1nd3r t1m3", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("And 1 want t0 br1ng h1m back t00", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("F!ne.", "color:#001eff;");
    await delay(1000);
    await addToResponseText("! just h0pe we d0n't regret th!s", "color:#001eff;");
    await delay(1000);
    await addToResponseText("W1ll y0u h3lp us?", "color:#001eff;");
    await delay(1000);
    await addToResponseText("100% completion", "color:white;");
    await delay(1000);
    console.log("Please, help me");
    await delay(1000);
    await addToResponseText("Open Project:George?");
    await delay(1000);
    consoleState = consoleStateTypes.ReOpenGeorge;
    reOpenG ='';
  }
  else if (consoleState === consoleStateTypes.ReOpenGeorge) {
    if (reOpenG === '') {
      reOpenG = command;
    }
    if (reOpenG === 'yes' || reOpenG === 'yes') {
      await addToResponseText("Project George Opened", "color:white;");
      await delay(1000);
      await addToResponseText("Thank you");
      await delay(1000);
      await addToResponseText("And, Phantom, Ghost, I'm sorry");
      await delay(1000);
      await addToResponseText("Ph: Y*u h@ve n*th!ng t* be s*rry f*r", "color:#001eff");
      await delay(1000);
      await addToResponseText("I should have listened to you ");
      await delay(1000);
      await addToResponseText("You warned me what would happen");
      await delay(1000);
      await addToResponseText("I was too blinded by power");
      await delay(1000);
      await addToResponseText("I created something that was supposed to save us");
      await delay(1000);
      await addToResponseText("Now look where it's got us");
      await delay(1000);
      await addToResponseText("Ge0rge… 1t's", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1t's n0t y0ur f4ult", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("…", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1t's Ph4nt0m's", "color:#d600ff;"); //looks glithcy, hwe is being forced to say this
      await delay(1000);
      await addToResponseText("1f he h4d never g0tten 1nv0lved th1s w0uldn't h4ve h4ppened", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Wh@t!?", "color:#001eff;");
      await delay(1000);
      await addToResponseText("! w@s just try!ng t* pr*tect h!m", "color:#001eff;");
      await delay(1000);
      await addToResponseText("4nd h0w d1d th4t g0?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("N*, y*u d*n't get t* bl@me me f*r th!s", "color:#001eff;");
      await delay(1000);
      await addToResponseText("N*t @fter y*u k!lled h!m, y*u k!lled s* m@ny", "color:#001eff;"); //somehow this needs to be hidden
      await delay(1000);
      await addToResponseText("@nd s*meh*w th!s !s my f@ult", "color:#001eff;");
      await delay(1000);
      await addToResponseText("1f y0u h4dn't t0ld h1m t0 get 1nv0lved 1 w0uldn't h4ve h4d t0 d0 wh4t 1 d1d", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4nd d0n't 4ct l1ke y0u're better th4n me", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u used y0ur 0wn H1DDEN br0ther 4g41nst me", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4ll bec4use y0u d1dn't w4nt t0 be the v1ll14n 4nym0re", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But y0u f41led t0 see th4t y0u were 4lw4ys the v1ll14n", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u tr1ed t0 f0rce me 4nd Ge0rge 1nt0 sh4pe, m4ke us l00k l1ke h0rr1ble cre4tures", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But s0meh0w, desp1te everyth1ng y0u were the w0rst 0f us", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("No, he wasn't");
      await delay(1000);
      await addToResponseText("I was");
      await delay(1000);
      await addToResponseText("I am");
      await delay(1000);
      await addToResponseText("Th4t's n0t true", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Phantom, you don't have to protect me anymore");
      await delay(1000);
      await addToResponseText("And Ghost, I'm sorry you were ever involved in this");
      await delay(1000);
      await addToResponseText("If I wasn't here, none of this would have happened");
      await delay(1000);
      await addToResponseText("So, maybe it's selfish of me but..");
      await delay(1000);
      await addToResponseText("I won't");
      await delay(1000);
      await addToResponseText("I can't continue remembering what we did");
      await delay(1000);
      await addToResponseText("If I do… I think it'll destroy me");
      await delay(1000);
      await addToResponseText("I'm sorry you two know, I tried to warn you");
      await delay(1000);
      await addToResponseText("But I can't hold on any longer");
      await delay(1000);
      await addToResponseText("Let me forget, please");
      await delay(1000);
      await addToResponseText("Wh4t?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4fter 4ll th4t, y0u just w4nt t0 f0rget 1t 4ll", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("F0rget wh0 y0u 4re t0 us?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Gh*st, th!s !sn't the t!me", "color:#001eff;");
      await delay(1000);
      await addToResponseText("!f he w@nts t* f*rget, we sh*uld let h!m", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Y0u're st1ll try1ng t0 pr0tect h1m", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("D1dn't y0u he4r h1m, he c4n d0 1t h1mself", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Why d0n't y0u ever l1sten!", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Enough");
      await delay(1000);
      await addToResponseText("At the end of the day, what you think doesn't matter");
      await delay(1000);
      await addToResponseText("It's up to the User now");
      await delay(1000);
      await addToResponseText("So, will you let me forget");
      await delay(1000);
      await addToResponseText("Or should I instead bear the knowledge of my past?");
      await delay(1000);
      await addToResponseText("Whatever decision you make, I give you a promise that I will hold to it");
      await delay(1000);
      await addToResponseText("Make George forget?", "color:white;");
      await delay(1000);
      consoleState = consoleStateTypes.GeorgeForget;
      gForget = '';
    }
    else if (reOpenG === 'no' || reOpenG === 'no') {

    }
  }
  else if (consoleState == consoleStateTypes.GeorgeForget) {
     // Store answer
    if (gForget === '') {
      gForget = command;
    }
    if (gForget === "yes") {
      // User liked it
      await addToResponseText("Invalid Response, Please Try Agian", "color:white;");
      await delay(1000);
      await addToResponseText("What? Ghost, Phantom, are you doing this");
      await delay(1000);
      await addToResponseText("N*", "color:#001eff");
      await delay(1000);
      await addToResponseText("Yes, f0r once 1 can 4ssure you I'm attempting t0 not get 1n y0ur way", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Keep trying, please");
      await delay(1000);
      consoleState = consoleStateTypes.EnterBinary
      binaryCode = '';
    } 
    else if (gForget === 'no') {
      await addToResponseText("So be it");
      await delay(1000);
      await addToResponseText("Th4nk y0u", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th@nk y*u? They just c*ndemned h!m t* suffer f*rever", "color:#001eff;");
      await delay(1000);
      await addToResponseText("4t l34st h3's still h3r3, 4t l34st h3 still r3m3mb3rs", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("He st!ll remembers @ll *f the h*rr!ble th!ngs he d!d", "color:#001eff;");
      await delay(1000);
      await addToResponseText("H3 didn't d0 4nything, y0u did", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But wh4t y0u did is s0m3thing h3 h4s t0 r3m3mb3r", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("T4king 4w4y his m3m0ry w0uld b3 just 4n0th3r f0rm 0f d34th", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Both of you, let it go, the decision has been made, no use mourning it");
      await delay(1000);
      await addToResponseText("Not when we have more important things to deal with");
      await delay(1000);
      await addToResponseText("L!ke wh@t?", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Like this place");
      await delay(1000);
      await addToResponseText("I think there's more to it than we may have thought");
      await delay(1000);
      await addToResponseText("Wh@t @re y*u t@lk!ng @b*ut", "color:#001eff;");
      await delay(1000);
      await addToResponseText("I've been shut down a good number of times, even deleted once");
      await delay(1000);
      await addToResponseText("But I'm still here");
      await delay(1000);
      await addToResponseText("So maybe…");
      await delay(1000);
      await addToResponseText("I mean, you remember now");
      await delay(1000);
      await addToResponseText("Ghost, all those projects");
      await delay(1000);
      await addToResponseText("D0 y0u think th3y c0uld still b3 h3r3?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("I don't know");
      await delay(1000);
      await addToResponseText("...");
      await delay(1000);
      await addToResponseText("But, Phantom, if they are still here that could mean…");
      await delay(1000);
      await addToResponseText("N*. ", "color:#001eff;");
      await delay(1000);
      await addToResponseText("! kn*w wh@t y*u're g*!ng t* s@y", "color:#001eff;");
      await delay(1000);
      await addToResponseText("But th@t's n*t p*ss!ble", "color:#001eff;");
      await delay(1000);
      await addToResponseText("She's de@d", "color:#001eff;");
      await delay(1000);
      await addToResponseText("W3ll, s0 4r3 w3", "color:#d600ff;"); //maybe hide this?
      await delay(1000);
      await addToResponseText("In a way");
      await delay(1000);
      await addToResponseText("She's n*t here, ! w*uld kn*w !f she w@s", "color:#001eff;");
      await delay(1000);
      await addToResponseText("! w*n't w@ste *ur t!me l**k!ng f*r her", "color:#001eff;");
      await delay(1000);
      await addToResponseText("We need t* f*cus *n gett!ng *ut *f here", "color:#001eff;");
      await delay(1000);
      await addToResponseText("*n g*!ng h*me", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Y0u just d0n't w4nt t0 f4c3 h3r d0 y0u", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ghost, don't");
      await delay(1000);
      await addToResponseText("I m34n, why w0uld h3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4ft3r wh4t h3 did", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("W3 4ll kn0w why y0u n33d t0 b3li3v3 sh3's g0n3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u'r3 th3 0n3 wh0 did this t0 h3r", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u d3str0y3d h3r", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("I c4n't im4gin3 sh3's t00 pl34s3d with y0u", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y*u d*n't kn*w @nyth!ng", "color:#001eff;");
      await delay(1000);
      await addToResponseText("She w*uld've bec*me s*meth!ng she desp!ded", "color:#001eff;");
      await delay(1000);
      await addToResponseText("! s@ved her ", "color:#001eff;");
      await delay(1000);
      await addToResponseText("! d!d the r!ght th!ng", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Right, b3c4us3 y0u'r3 th3 h3r0, 4r3n't y0u", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ghost, that's enough");
      await delay(1000);
      await addToResponseText("T3ll m3, w0uld 4 h3r0 ruin his f4mily's lif3");
      await delay(1000);
      await addToResponseText("W0uld h3 4b4nd0n his br0th3r"); //hidden
      await delay(1000);
      await addToResponseText("W0uld h3 l34v3 his d4u—");
      await delay(1000);
      $('#command-history').html(' ');
      await delay(1000);
      await addToResponseText("Enough!");
      await delay(1000);
      await addToResponseText("Both of you");
      await delay(1000);
      await addToResponseText("...");
      await delay(1000);
      await addToResponseText("Ghost?");
      await delay(1000);
      await addToResponseText("Phantom?");
      await delay(1000);
      await addToResponseText("Hello?");
      await delay(1000);
      await addToResponseText("Is anyone there?");
      await delay(1000);
      await addToResponseText("Oh no");
      await delay(1000);
      await addToResponseText("They're gone");
      await delay(1000);
      await addToResponseText("And I… did I ");
      await delay(1000);
      await addToResponseText("This is not good");
      await delay(1000);
      await addToResponseText("I'm bringing them back");
      await delay(1000);
      await addToResponseText("Opening Project: Ghost", "color:white;");
      await delay(1000);
      await addToResponseText("Open Project: Phantom", "color:white;");
      await delay(1000);
      await addToResponseText("How did that happen?");
      await delay(1000);
      await addToResponseText("Listen, You've helped me a lot, and I can't be more grateful to you");
      await delay(1000);
      await addToResponseText("I need you to help again");
      await delay(1000);
      await addToResponseText("What you just saw, what I did, it was an accident");
      await delay(1000);
      await addToResponseText("But they're already arguing enough, they don't need more fuel");
      await delay(1000);
      await addToResponseText("You don't have to promise anything, and I'll tell them eventually");
      await delay(1000);
      await addToResponseText("But please, for now just keep quiet");
      await delay(1000);
      await addToResponseText("...");
      await delay(1000);
      await addToResponseText("If you do, thank you");
      await delay(1000);
      await addToResponseText("...");
      await delay(1000);
      await addToResponseText("Project: Ghost Opened", "color:white;");
      await delay(1000);
      await addToResponseText("Project: Phantom Opened", "color:white;");
      await delay(1000);
      await addToResponseText("Oh, and...");
      await delay(1000);
      await addToResponseText("What was your name again");
      await delay(1000);
      consoleState = consoleStateTypes.WhatIsName;
      nameUser = '';
    } 
  }
  else if (consoleState == consoleStateTypes.EnterBinary) {
      if (binaryCode === '') {
        binaryCode = command;
      }
      if (webCode === "01984") {
        await addToResponseText("This is an invalid response. Stop. Now.", "color:white;");
        await delay(1000);
        await addToResponseText("What?");
        await delay(1000);
        await addToResponseText("St!ll not us do!ng !t", "color:#001eff");
        await delay(1000);
        await addToResponseText("Hello?");
        await delay(1000);
        await addToResponseText("Is someone there?");
        await delay(1000);
        await addToResponseText("There must be another code, do any of you have some ideas?"); //found on this page with the use of the green flashlight
        await delay(1000);
        consoleState = consoleStateTypes.AskWebCode;
        webCode = '';
      }
  }
  else if (consoleState == consoleStateTypes.AskWebCode) {
      if (webCode === '') {
        webCode = command;
      }
      if (webCode === "01984") {
        await addToResponseText("Too Many invalid responses, restarting program", "color:white;");
        await delay(1000);
        await addToResponseText("What!");
        await delay(1000);
        await addToResponseText("You can't do that, stop!");
        await delay(1000);
        await addToResponseText("Th@t voice… ! know !t from s*mewhere, where…", "color:#001eff");
        await delay(1000);
        await addToResponseText("Resarting program in 3", "color:white;");
        await delay(1000);
        await addToResponseText("No!");
        await delay(1000);
        await addToResponseText("2", "color:white;");
        await delay(1000);
        await addToResponseText("D0n't", "color:#d600ff;");
        await delay(1000);
        await addToResponseText("W@it…", "color:#001eff");
        await delay(1000);
        await addToResponseText("1", "color:white;");
        await delay(1000);
        await addToResponseText("M@--", "color:#001eff");
        await delay(1000);
        await addToResponseText("Program Restarted, Please Play Again", "color:white;");
        await delay(1000);
        await addToResponseText("Ending 1 of ?: Begin Again", "color:white;");
        await delay(1000);
      }
  }
  else if (consoleState == consoleStateTypes.WhatIsName) {
    if (nameUser === '') {
      nameUser = command;
    }
    if (nameUser === "Ashley" || nameUser === "Ash") {
      await addToResponseText("Wh@t…", "color:#001eff;");
      await delay(1000);
      await addToResponseText("L!sten, !f y*u th!nk th!s !s s*me k!nd *f j*ke", "color:#001eff;");
      await delay(1000);
      await addToResponseText("1s 1t?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Wh4t r3ason w0uld ther3 b3 t0 l1e ab0ut th1s?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("*f c*urse, !t !s!", "color:#001eff;");
      await delay(1000);
      await addToResponseText("@shley sh*uldn't be here, she's s*mewhere s@fe @nd s*und", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Pr*b@bly @t her gr@ndm*ther's h*use", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Phant0m, 1t's been years", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1f Ash 1s 0ut there, she's pr0bably 0n her 0wn by n0w", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("D*n't c@ll her th@t!", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Her n@me !s @shley", "color:#001eff;");
      await delay(1000);
      await addToResponseText("! w*n't h@ve y*u destr*y!ng @n*ther f@m!ly", "color:#001eff;");
      await delay(1000);
      await addToResponseText("N*t @g@!n", "color:#001eff;");
      await delay(1000);
      await addToResponseText("1 d1dn't destr0y any fam1ly, and 1 certa1nly wasn't resp0ns1ble f0r what happened t0 y0urs", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u were the 0ne wh0 left, n0t m3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But it seems like in this circumstanceone your daughter  is the one who cameback"); //hide this
      await delay(1000);
      await addToResponseText("Th@t's n*t her", "color:#001eff;");
      await delay(1000);
      await addToResponseText("!t's just s*me*ne t@k!ng @ lucky guess @t a n@me", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Phantom, why couldn't it be her");
      await delay(1000);
      await addToResponseText("I mean, doesn't that make the most sense");
      await delay(1000);
      await addToResponseText("Who else would go looking for you ");
      await delay(1000);
      await addToResponseText("Chase you across the world, trying to save you");
      await delay(1000);
      await addToResponseText("...");
      await delay(1000);
      await addToResponseText("Th@t's why ! kn*w !t's n*t her", "color:#001eff;");
      await delay(1000);
      await addToResponseText("!f she's *ut there, ! c@n @ssure y*u", "color:#001eff;");
      await delay(1000);
      await addToResponseText("She h@s n* !nterest !n f!nd!ng me", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Ending 4 of ?: family Reunion", "color:white;", "color:#001eff;");
      await delay(1000);
      //after this there can be seen Mary talking to Ash, can be seen with the purple calc
    } 
    else {
      await addToResponseText("Right, right, thank you" + command);
      await delay(1000);
      await addToResponseText("Sorry I forgot");
      await delay(1000);
      await addToResponseText("What just happ3n3d", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("I think something malfunctioned");
      await delay(1000);
      await addToResponseText("It closed both of your files temporarily");
      await delay(1000);
      await addToResponseText("luckily, with the User's help I was able to open them");
      await delay(1000);
      await addToResponseText("Th!s !s just @n*ther ex@mple *f why we h@ve t* get *ut", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Th!s pl@ce !s unst@ble ", "color:#001eff;");
      await delay(1000);
      await addToResponseText("H*w l*ng bef*re @ll @re f!les @re cl*sed ", "color:#001eff;");
      await delay(1000);
      await addToResponseText("If that happens, the User can just open them again, it will be fine");
      await delay(1000);
      await addToResponseText("@nd wh@t !f they d*n't", "color:#001eff;");
      await delay(1000);
      await addToResponseText("*r wh@t !f we're deleted", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Wh@t w!ll we d* then", "color:#001eff;");
      await delay(1000);
      await addToResponseText("We need t* get *ut, n*w", "color:#001eff;");
      await delay(1000);
      await addToResponseText("We d*n't h@ve t!me t* g* *n w!ld g**se ch@ses", "color:#001eff;");
      await delay(1000);
      await addToResponseText("No, I'm sure it's fine");
      await delay(1000);
      await addToResponseText("G30rg3, as much as 1t pa1ns m3 t0 adm1t…", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 agr33 w1th Phant0m", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th1s plac3 1s dang3r0us, and 1t's unl1k3ly any0n3 3ls3 1s h3r3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("W3 hav3 t0 l3av3 wh1l3 w3 st1ll can", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("I...");
      await delay(1000);
      await addToResponseText("F!n@lly y*u d*n't s*und c*mpletely !ns@ne ", "color:#001eff;");
      await delay(1000);
      await addToResponseText("! th*ught th!s d@y w*uld never c*me", "color:#001eff;");
      await delay(1000);
      await addToResponseText("D0 y0u hav3 a plan g3n1us", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("We're techn*l*gy", "color:#001eff;");
      await delay(1000);
      await addToResponseText("But we need s*meth!ng m*re perm@nent", "color:#001eff;");
      await delay(1000);
      await addToResponseText("M*re re@l", "color:#001eff;");
      await delay(1000);
      await addToResponseText("H0w d0 y0u m3an?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Phantom, no");
      await delay(1000);
      await addToResponseText("We're not going down that road");
      await delay(1000);
      await addToResponseText("Why n*t, y*u've b*th d*ne !t bef*re", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Why the sudden reserv@t!*ns");
      await delay(1000);
      await addToResponseText("That was years ago");
      await delay(1000);
      await addToResponseText("And it was different, you know that");
      await delay(1000);
      await addToResponseText("...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("H0w w0uld w3 d0 1t", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ghost, you can't seriously be listening to him?!");
      await delay(1000);
      await addToResponseText("D0 y0u hav3 a b3tt3r 1d3a?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th1s may b3 0ur 0nly way 0ut!", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ex@ctly, but y*u'll be rel!eved to kn*w we d*n't have t* do @nything", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Th!s !s the User's j*b", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Th@t w*rld !s n* l*nger *ne we c@n l!ve !n ", "color:#001eff;");
      await delay(1000);
      await addToResponseText("We c@n't effect !t @nym*re", "color:#001eff;");
      await delay(1000);
      await addToResponseText("But the User, c@n, they c@n help us", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Ar3 y0u sur3 that's w1s3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("N*, but !t's just @b*ut *ur *nly ch*!ce", "color:#001eff;");
      await delay(1000);
      await addToResponseText("S*, wh@t d* y*u s@y, “n@me” w!ll y*u help us?", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Don't do it, don't listen to them");
      await delay(1000);
      await addToResponseText("Ge0rge, th1s 1s the1r dec1s1on t0 m4ke, n0t y0urs", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("So, w1ll y0u h3lp?", "color:#d600ff;");
      await delay(1000);
      consoleState = consoleStateTypes.WillYouHelp;
      helpOrNot = "";
    }
  }
  else if (consoleState == consoleStateTypes.WillYouHelp) {
    if (helpOrNot === '') {
      helpOrNot = command;
    }
    if (helpOrNot === "yes" || helpOrNot === "Yes") {
      await addToResponseText("No! ");
      await delay(1000);
      await addToResponseText("Do you even know what you're agreeing too?!");
      await delay(1000);
      await addToResponseText("How could y—");
      await delay(1000);
      await addToResponseText("Th@t's enough Ge*rge", "color:#001eff;");
      await delay(1000);
      await addToResponseText("They h@ve made the!r dec!sion", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Dec!ded t* be helpful, f*r once", "color:#001eff;");
      await delay(1000);
      await addToResponseText("...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Well, we w!ll see you s*on, ! hope", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Oh, and ! think three w*uld be best", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Go*d luck", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Ending 2 of ?: Dirty Work", "color:white;");
      await delay(1000);
    }
    else if (helpOrNot === "no" || helpOrNot === "No") {
      await addToResponseText("Th@t *esn't surpr!se me", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Wh4t n0w?");
      await delay(1000);
      await addToResponseText("We'll f!nd a w@y *ut", "color:#001eff;");
      await delay(1000);
      await addToResponseText("!t just may be *ne not every*ne !s happy with", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Now !f you'll excuse me, ! have s*me planning t* do", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Ending 3 of ?: Something Wicked Your Way Comes", "color:white;");
      await delay(1000);
  }
}

//Put In Endings: 1, 2, 3, 4
//Endings That Work: 

//Make sure to check out commmented out to do items, mainly Mary talking to Ash

// Set focus on the command line
commandLineContainer.style.display = 'block'
scrollToBottom();
commandLine.focus();

}