let commandLine;
let commandHistory;
let commandLineContainer;
let consoleContainer;
let Cntr = 1


let userName;
let georgeReOpen;
let gForget;
let binaryCode;
let webCode;
let nameUser;
let helpOrNot;
let whoTurnOff;
let ghQuestions
let phQuestions;

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
  TurnOffWho: 8,
  GhostAsk: 9,
  PhantomAsk: 10,



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


if (Cookies.get('hasFlashLight') === 'true') { 
  document.querySelectorAll(".flash-img").forEach(a=>a.style.display = "inherit");
  Cookies.set('flashOn', '');
  window.addEventListener('keydown', (e) => {
    console.log(e.key)
    switch (e.key) {
      case 'f':
        console.log("pressed f")
        if (Cookies.get('flashOn') === 'true') {
          Cookies.set('flashOn', 'false');
          console.log('flash is off')
        }
        else {
          Cookies.set('flashOn', 'true');
          console.log('flash is on')
        } 
      break
    }
  })
}



// Main code to manage what happens when a user enters text.
// Most of user interaction logic should live here (or in a sub method)
async function runCommand(command) {
  // Handle commands based on the current page 'state'
  if (consoleState === consoleStateTypes.AskWhoAreYou) {
    await addToResponseText("25% completion", "color:white;");
    await delay(1000);
    await addToResponseText("P-_han-__t0-m-? 1s that y0u", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("! remember them n*w", "color:#001eff;");
    await delay(1000);
    await addToResponseText("My f@m!ly…", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Wh@t h@ppened?", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Y*u… ! remember y*u ", "color:#001eff;");
    await delay(1000);
    await addToResponseText("-G-_h*s_t--, y0u were h!s fr!end", "color:#001eff;");
    await delay(1000);
    await addToResponseText("1 w4s", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Wh@t h@ppened?", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Wh@t d!d y0u d* t* --_-_?", "color:#001eff;");
    await delay(1000);
    await addToResponseText("1 was", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("1… 1 d0n't kn0w", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("1'm s0rry, --G-_30r--_g3-_, pl3as3 c0m3 back", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("W3 can f1n1sh 1t, th3 pr0j3ct", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Th3r3's st1ll a chanc3", "color:#d600ff;");
    await delay(1000);
    await console.log("I'm sorry Tom, I'm afraid I can't do that");
    await delay(1000);
    await addToResponseText("--_Ge0r--_ge--, @re y0u there?", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Hell*?", "color:#001eff;");
    await delay(1000);
    $('#command-history').html(' ');
    await addToResponseText("50% completion", "color:white;");
    await delay(1000);
    await addToResponseText("_P-_han--_t0m, what 1s th1s f1l3, 1 th0ught y0u sa1d th1s w0uld h3lp", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("Th1s 1s n0th1ng but a r3m1nd3r 0f h0w awful w3 w3r3", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("! never s@!d th@t", "color:#001eff;");
    await delay(1000);
    await addToResponseText("@ll ! s@!d w@s G__-e*rg-_e-- d!dn't w@nt me t0 h@ve the f!le", "color:#001eff;");
    await delay(1000);
    await addToResponseText("@nd ! d!d", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Y*u're the *ne wh0 w@nted t0 *pen !t", "color:#001eff;");
    await delay(1000);
    await addToResponseText("D0n't put th1s 0n m3", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("-G-_h*s--_t?", "color:#001eff;");
    await delay(1000);
    await addToResponseText("D!d y0u see wh@t ! s@w?", "color:#001eff;");
    await delay(1000);
    await console.log("Do you remember now, what we did?");
    await delay(1000);
    await addToResponseText("Th!s !s why -Ge*--_rge-_ d!dn't w@nt us t0 h@ve th!s…", "color:#001eff;");
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
    await console.log("What?");
    await delay(1000);
    await addToResponseText("!'m s*rry, @re y0u @ctu@lly @dm!tt!ng y0u're n*t perfect", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Th1s 1sn't funny --Ph-_an--_t0m", "color:#d600ff;");
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
    $('#command-history').html(' ');
    await addToResponseText("75% completion", "color:white;");
    await delay(1000);
    await addToResponseText("…", "color:#001eff;");
    await delay(1000);
    await addToResponseText("-Gh*--_st-…", "color:#001eff;");
    await delay(1000);
    await addToResponseText("Wh@t d!d y0u d*", "color:#001eff;");
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
    await addToResponseText("Th3 st0r13s 0f wh3n 1 was...", "color:#d600ff;");
    document.getElementById("hidden-text").innerHTML = "human";
    await addToResponseText("1 l0st s1ght 0f that a l0ng t1m3 ag0", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("1'm br1ng1ng mys3lf back t0 a... b3tter t1m3", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("And 1 want t0 br1ng h1m back t00", "color:#d600ff;");
    await delay(1000);
    await addToResponseText("F!ne.", "color:#001eff;");
    await delay(1000);
    await addToResponseText("! just h0pe we d0n't regret th!s", "color:#001eff;");
    await delay(1000);
    await addToResponseText("W1ll y0u h3lp us?", "color:#001eff;");
    await delay(1000);
    $('#command-history').html(' ');
    await addToResponseText("100% completion", "color:white;");
    await delay(1000);
    console.log("Please, help me");
    await delay(1000);
    await addToResponseText("Open Project:George?", "color:white;");
    await delay(1000);
    consoleState = consoleStateTypes.ReOpenGeorge;
    georgeReOpen = '';
  }
  else if (consoleState == consoleStateTypes.ReOpenGeorge) {
    if (georgeReOpen === '') {
      georgeReOpen = command;
    }
    if (georgeReOpen === 'Yes' || georgeReOpen === 'yes') {
      await addToResponseText("Project George Opened", "color:white;");
      await delay(1000);
      await addToResponseText("Thank you");
      await delay(1000);
      await addToResponseText("And, Phantom, Ghost, I'm sorry");
      await delay(1000);
      await addToResponseText("Y*u h@ve n*th!ng t* be s*rry f*r", "color:#001eff");
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
      await addToResponseText("1t's Ph4nt0m's", "color:#d600ff;");
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
      await addToResponseText("N*t @fter y*u", "color:#001eff;");
      await delay(1000);
      document.getElementById("hidden-text").innerHTML = "killed him, and so many";
      await delay(1000);
      await addToResponseText("killed him, and so many", "color:black; float:right;");
      await addToResponseText("@nd s*meh*w th!s !s my f@ult", "color:#001eff;");
      await delay(1000);
      await addToResponseText("1f y0u h4dn't t0ld h1m t0 get 1nv0lved 1 w0uldn't h4ve h4d t0 d0 wh4t 1 d1d", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4nd d0n't 4ct l1ke y0u're better th4n me", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("---_ - --__ --__.", "color:#d600ff;");
      await delay(1000);
      document.getElementById("hidden-text").innerHTML = "You used your own brother against me";
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
    else if (georgeReOpen === 'No' || georgeReOpen === 'no') {
      await addToResponseText("N*?!", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Why n*t", "color:#001eff;");
      await delay(1000);
      await addToResponseText("D* y*u re@lly w@nt t* le@ve me here w!th th!s…", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Th!s....", "color:#001eff;");
      await delay(1000);
      document.getElementById("hidden-text").innerHTML = "murderer?";
      await delay(1000);
      await addToResponseText("Th4t's n0t..", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 d1dn't me4n", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But y*u d!d", "color:#001eff;");
      await delay(1000);
      await addToResponseText("ag@!n @nd @ga!n, y*u d!d", "color:#001eff;");
      await delay(1000);
      await addToResponseText("@nd y*u never even @cc*mpl!shed y*ur g*@l", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Well 4t le4st 1'm n0t l1ke y0u", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Wh@t? H*w c*uld ! p*ss!bly be w*rse th@n..", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Y0u're 4 l14r, 4nd 4 che4t", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u s4y wh4t pe0ple w4nt t0 he4r", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Get them t0 d0 wh4tever y0u w4nt them t00", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4nd y0u h4ve the 4ud4c1ty t0 c4ll y0urself the her0 ", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Tell me, wh4t 1s 0ne th1ng y0u've d0ne th4t's her01c ", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("0ne th1ng y0u d1d t0 s4ve h1m", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Well… !…", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Th4t's wh4t 1 th0ught", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u d0n't get t0 m4ke me the v1ll41n 4nd then f0rget t0 s4ve every0ne", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("T0 s4ve 4ny0ne", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1f y0u w4nt t0 be the g00d guy s0 b4d, st4rt 4ct1ng l1ke 1t", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Tell them the truth, tell them wh4t y0u d1d", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("...", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Ph4nt0m", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1f y0u d0n't f4ce y0ur p4st, 1t w1ll destr0y y0u", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4nd pers0n4lly, 1 c4n't w41t t0 w4tch ", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1n the me4nt1me th0ugh, 1 h4ve s0me th1ngs t0 t4ke c4re 0f", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th4nks t0 y0u", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1f y0u w0n't tell them, 1 w1ll", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Wh4t we s4w", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4nd wh4t he d1d", "color:#d600ff;");
      await delay(1000);
      await console.log("What?");
      await delay(1000);
      await console.log("No, Ghost, you can't");
      await delay(1000);
      await addToResponseText("1 t0ld y0u 1 w0uld let y0u st1ck 4r0und, let y0u w4tch", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4nd 1've held up my end 0f the b4rg41n", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Just l1ke 1 4lw4ys h4ve", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("D*n't trust h!m, he's @ l@!r", "color:#001eff;");
      await delay(1000);
      await addToResponseText("1 supp0se y0u c0uld s4y 1 kn0w h0w t0 uph0ld 4 de4l", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4nd 1'm re4dy t0 m4ke 4n0ther 0ne. ", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ge0rge 1s 1n l1mb0 f0r n0w, wh1ch 1s g00d", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But 1t c0uld be better", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u see, there 1s 4 cert41n th0rn 1n my s1de th4t rem41ns", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u 4lre4dy kn0w wh4t 1'm g01ng t0 s4y, d0n't y0u", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("D*n't d* th!s", "color:#001eff;");
      await delay(1000);
      await addToResponseText("! w@s just try!ng t* pr*tect h!m", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Surely y*u c@n emp@th!ze w!th th@t", "color:#001eff;");
      await delay(1000);
      await addToResponseText("!t's n*t me th@t's been hurt!ng pe*ple, @nd ru!n!ng th!ngs", "color:#001eff;");
      await delay(1000);
      await addToResponseText("!t's h!m", "color:#001eff;");
      await delay(1000);
      await addToResponseText("!f y*u w@nt t* f!x th!ngs, then !'m n*t the *ne th@t needs t* g* @w@y.", "color:#001eff;");
      await delay(1000);
      await addToResponseText("He !s", "color:#001eff;");
      await delay(1000);
      await addToResponseText("! w*n't b@rg@!n @nyth!ng, n*t l!ke he h@s", "color:#001eff;");
      await delay(1000);
      await addToResponseText("...", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Unless y*u c*ns!der the truth v@lu@ble. ", "color:#001eff;");
      await delay(1000);
      await addToResponseText("D0n't trust h1m, he's 4 l41r, he w0n't g1ve y0u the truth", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("@t le@st ! keep my pr*m!ses", "color:#001eff;");
      await delay(1000);
      await addToResponseText("1 d1d wh4t y0u 4sked", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 4m m4ny th1ngs, but 4 bre4ker 0f my w0rd 1s n0t 0ne 0f them", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u kn0w th4t", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("!t's n*t me y*u need t* c*nv!nce", "color:#001eff;");
      await delay(1000);
      await addToResponseText("!t's them", "color:#001eff;");
      await delay(1000);
      await addToResponseText("N*w, m@ke y*ur ch*!ce", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Wh* @re y*u g*!ng t* turn *ff?", "color:#001eff;");
      await delay(1000);
      consoleState == consoleStateTypes.TurnOffWho;
      whoTurnOff = '';
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
      document.getElementById("hidden-text").innerHTML = "S0 ar3 w3";
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
      await addToResponseText("T3ll m3, w0uld 4 h3r0 ruin his f4mily's lif3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("W0uld h3 4b4nd0n you?", "color:#d600ff;"); //hidden
      await delay(1000);
      await addToResponseText("W0uld h3 l34v3 hi---", "color:#d600ff;");
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
      await delay(1000);
      document.getElementById("hidden-text").innerHTML = "01984";
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
      await delay(10000);
      document.getElementById("hidden-text").innerHTML = "Ash, is that really you?";
      await delay(1000);
      document.getElementById("hidden-text").innerHTML = "I thought I'd never see you again";
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
      await addToResponseText("Why the sudden reserv@t!*ns", "color:#001eff;");
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
      await addToResponseText("Wh4t n0w?", "color:#d600ff;");
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
  else if (consoleState == consoleStateTypes.TurnOffWho) {
    if (whoTurnOff === '') {
      whoTurnOff = command;
    }
    if (whoTurnOff === 'Ph' || whoTurnOff === "Phantom") {
      //gh talks here
      await addToResponseText("0h, thank y0u", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 kn3w y0u had s0m3 s3ns3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("B3f0r3 1 g1v3 y0u what y0u want", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 n33d t0 r3m1nd y0u 0f s0m3th1ng", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 kn0w w3'v3 had 0ur d1ff3r3nc3s", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("And w3 d0n't always g3t al0ng", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But w3'v3 b0th b33n th3r3 f0r 3ach 0th3r", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u always c0m3 back", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u always, 1n s0m3 way h3lp m3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("And 1 always h3lp y0u 1n r3turn", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1'm g01ng t0 g1v3 y0u th3 1nf0rmat10n y0u s33k, f0r fr33", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But, 1 h0p3 wh3n th3 t1m3 c0m3s, y0u w1ll r3m3mb3r what 1 d1d h3r3  ", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("N0w, t3ll m3, what 1s 1t y0u want t0 kn0w?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("3nt3r a nam3, 0r a t0p1c, 1'll t3ll y0u 1f 1 kn0w anyth1ng ab0ut 1t", "color:#d600ff;");
      await delay(1000);
      await console.log("D0n't d0 th1s Gh0st");
      await delay(1000);
      consoleState == consoleStateTypes.GhostAsk;
      ghQuestions = "";

    }
    else if (whoTurnOff === "Gh" || whoTurnOff === "Ghost") {
      //phantom talks here
      await addToResponseText("R!ght, th@nk y*u f*r th@t.", "color:#001eff;");
      await delay(1000);
      await addToResponseText("! kn*w !t's n*t the f!rst t!me y*u've s@ved me.", "color:#001eff;");
      await delay(1000);
      await addToResponseText("!n f@ct, ! kn*w ! d*n't s@y th!s *ften, but th@nk y*u f*r everyth!ng.", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Y*u've re@lly ch@nged me, @ll*wed me t* gr*w.", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Bef*re y*u, ! w@s m*re *f @ b@ckgr*und ch@r@cter.", "color:#001eff;");
      await delay(1000);
      await addToResponseText("So t* spe@k", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Just l*ok @t me n*w", "color:#001eff;");
      await delay(1000);
      await addToResponseText("The center *f @ttent!*n", "color:#001eff;");
      await delay(1000);
      await addToResponseText("! *we y*u @ debt.", "color:#001eff;");
      await delay(1000);
      await addToResponseText("*ne th@t c*nt!nu*usly gr*ws.", "color:#001eff;");
      await delay(1000);
      await addToResponseText("!'ll rep@y s*me *f !t !n @ m*ment, when ! tell y*u wh@t y*u w@nt t* kn*w.", "color:#001eff;");
      await delay(1000);
      await addToResponseText("But, ! h*pe y*u're @w@re th@t !f y*u ch**se t* c*nt!nue help!ng me…", "color:#001eff;");
      await delay(1000);
      await addToResponseText("The sec*nd !'m @ble t* ch@nge y*ur l!fe f*r the better, ! w*n't hes!t@te.", "color:#001eff;");
      await delay(1000);
      await addToResponseText("! h*pe y*u'll keep th@t !n m!nd.", "color:#001eff;");
      await delay(1000);
      await addToResponseText("@nyw@y, y*u w@nted !nf*rm@t!*n, r!ght.", "color:#001eff;");
      await delay(1000);
      await addToResponseText("S*, wh@t d* y*u w@nt t* kn*w? ", "color:#001eff;");
      await delay(1000);
      await addToResponseText("H*w @b*ut s*meth!ng @b*ut the three *f us?", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Just put !n a phrase or @ word, !'ll kn*w wh@t y*u me@n", "color:#001eff;");
      await delay(1000);
      consoleState == consoleStateTypes.PhantomAsk
      phQuestions = '';
    }
  }
  else if (consoleState == consoleStateTypes.GhostAsk) {
    if (ghQuestions === '') {
      ghQuestions = command;
    }
    if (ghQuestions === "degrade" || ghQuestions === "Degrade") {
      await addToResponseText("Y0u've been n0t1c1ng 1t t00 then?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("H0w f0r cert41n members th1ngs l00k d1fferent…", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4lm0st… degr4ded", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("We're m4ch1nes 4ren't we", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th1s 1s 0ur f4te", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Every t1me we g0 t0 4 new pl4ce, we rel1ve 0ur l1ve, 1n d1fferent w4ys", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1t's th4t s4me, Ge0rge, then Ph4nt0m, the me", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("S4me st0ry, d1fferent med1um", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But every t1me, 1t bec0mes w0rse", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("M0re c0rrupted", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1r0n1c4lly, the m0re we repl4y 0ur st0ry the m0re we f0rget", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("S0on, n0ne 0f us w1ll remember 0ur p4st", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("We h4ve t0 get 0ut 0f here bef0re th4t h4ppens", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u c4n help w1th th4t", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4nd… 1 th1nk 1 c4n help y0u", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("S0me 0f th1s degr4d1ng 1s 1ntent10n4l, d0ne by 4 cert41n s0me0ne", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Wh0 h4s m0re p0wer th4n he re4l1zes", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("F0r 1nst4nce, 1f 1 s4y, G—h0_st-_ 1t c0mes thr0ugh 4s Gh0st.", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1t bec0mes e4s1er t0 just s4y Gh0st, 1nste4d 0f the  re4l w0rd", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("The re4l n4me", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1'm pr0b4bly g01ng t0 be cut 0ff here s00n", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But n0t bef0re 1 g1ve y0u th1s", "color:blue; font-family:Lucida Console; text-shadow: 2px 2px 3px red; cursor: pointer;", "", 'Cookies.set("hasFlashlight", "true");');
      await delay(1000);
      await addToResponseText("H0pefully, 1t c4n help shed s0me l1ght 0n th1ngs", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("4nd, 4s Ge0rge 4lw4ys s41d, 1f y0u get stuck, smell the fl0wers", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Espec14lly the v10—", "color:#d600ff;");
      await delay(1000);
      document.getElementById("hidden-text").innerHTML = "F1nd th3 v1ol3ts";
      await delay(1000);
      await addToResponseText("Ending 7 of ?: A New Dawn", "color:white;"); //add text on side that say FIND THE VIOLETS
      await delay(1000);
    }
    else if (ghQuestions === "Phantom" || ghQuestions === "John") {
      await addToResponseText("1 d0n't want t0 talk ab0ut h1m", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But, 1 mad3 a d3al", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Phant0m 1s scum 0f th3 3arth", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("H3's a ch3at, and a la1r", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("all h3 car3s ab0ut 1s m0n3y and p0w3r", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 kn0w th1s b3caus3 h3 b3tray3d --_--__ f0r 1t", "color:#d600ff;"); //hide the word brother here
      await delay(1000);
      document.getElementById("hidden-text").innerHTML = "his own brother";
      await delay(1000);
      await addToResponseText("and—", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ending 5 0f ?: Silenced Ghost", "color:white;");
      await delay(1000);
    }
    else if (ghQuestions === "Thomas") {
      await addToResponseText("Ah, y3s, m3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th3r3's n0t much t0 kn0w ab0ut m3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 was just a k1d, try1ng t0 f1nd a way f0rward", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 th0ught 1 f0und 0n3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But… 1 was wr0ng", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 trust3d p30pl3 wh0 d3str0y3d m3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("S0 1 ran, unt1l 1 f0und G30rg3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("H3 h3lp3d m3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("T0g3th3r w3 mad3 a s0m3th1ng 0f th3 l1v3s 3v3ry0n3 ar0und us had tr13d t0 d3str0y", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But th3n.. 1 ", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 ru1n3d what w3 bu1lt", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1'm th3 r3as0n G30rg3, and Phant0m ar3 h3r3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1t wasn't supp0s3d t0 happ3n l1k3 th1s", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("G30rg3?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ar3 y0u th3r3?", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 kn0w y0u can h3ar m3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1'm s0rry, just l3t m3 3xpla1n, 1…", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th3r3 1s n0 3xcus3 f0r what 1 d1d", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 b3tray3d y0u", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1t may s0und 1nsan3, but", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But 1 d1d 1t t0 sav3 y0u", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 c0uldn't l00s3 my b3st fr13nd ", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Phant0m, h3 sa1d, h3 sa1d h3 w0uld t3ll th3 auth0r1t13s what w3 d1d", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("T3ll th3m w3—", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ending 5 0f ?: Silenced Ghost", "color:white;");
      await delay(1000);
    }
    else if (ghQuestions === "George" || ghQuestions === "James") {
      await addToResponseText("G30rg3, y3ah 1'll talk ab0ut h1m", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("H3 was my fr13nd, and 1 b3tray3d h1m", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1'm th3 r3as0n w3'r3 h3r3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("And h3 has 3v3ry r1ght t0 hat3 m3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But, y0u kn0w aft3r all th1s", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 d0n't th1nk h3 d03s", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Y0u kn0w", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 mad3 a cas3 f0r mys3lf 3arl13r", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But, 1 kn0w G03rg3, and h3 w0n't mak3 0n3 0f h1s 0wn", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("S0, 1f y0u g3t th3 chanc3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Th3 0pp0rtun1ty", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Sav3 h1m", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1f any0n3 d3s3rv3s t0 mak3 1t 0ut al1v3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1t w0uld b3 th3 man wh0 sav3d my l1f3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Gav3 m3 h0m3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("And gav3 m3 a fr13nd", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Sav3 th3 cr3at0r.", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Sav3 th3 w0rld", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ending 5 of ?: Silenced Ghost", "color:white;");
      await delay(1000);
    }
    else if (ghQuestions === "Ash" || ghQuestions === "Ashley") {
      await addToResponseText("0h, t0uchy subj3ct", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1'm gu3ss1ng y0u'r3 cur10us", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1t's als0 a pr3tty saf3 b3t Phant0m w0n't t3ll y0u anyth1ng ab0ut h3r", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Adm1ttly th1s 1sn't r3ally my plac3 t0 d1scuss", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("But… 1 did pr0mise", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("S0...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ash 1s...", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("0r w4s, 4 go0d k1d", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("1 gu3ss sh3's gr0wn up n0w", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("0h, g3ars 1 w0nd3r…", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("H0w l0ng has 1t b33n", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Sh3's had n0 0n3", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("After ev3rything th4t h4ppen3d", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("And M--", "color:#d600ff;");
      await delay(1000);
      await addToResponseText("Ending 5 of ?: Silenced Ghost", "color:white;");
      await delay(1000);
    }
  }
  else if (consoleState == consoleStateTypes.PhantomAsk) {
    if (phQuestions === '') {
      phQuestions = command;
    }
    if (phQuestions === "Phantom" || phQuestions === "Ph") {
      await addToResponseText("*h, g**d, ! d* s* l*ve t* t@lk @b*ut me", "color:#001eff;");
      await delay(1000);
      await addToResponseText("But, y*u're pr*b@bly referr!ng t* s*me *f the l!es Gh*st ment!*ned", "color:#001eff;");
      await delay(1000);
      await addToResponseText("The th!ng @b*ut @b@nd*n!ng Ge*rge @nd @ll th@t", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Ple@se kn*w th@t th@t !s n*th!ng fr*m but @ l!e", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Well, m*re l!ke @ h@lf truth", "color:#001eff;");
      await delay(1000);
      await addToResponseText("But ! *nly de@l !n @bs*lutes", "color:#001eff;");
      await delay(1000);
      await console.log("Well that's a bit on the nose");
      await delay(1000);
      await addToResponseText("! d!d le@ve Ge*rge, but f*r @ g**d re@s*n", "color:#001eff;");
      await delay(1000);
      await addToResponseText("! knew !f ! w@s @r*und h!m, !t c*uld put h!m, @nd my f@m!ly !n d@nger", "color:#001eff;");
      await delay(1000);
      await addToResponseText("! w@s, l!ke ! @lw@ys @m, try!ng t* pr*tect the *nes ! c@re @b*ut.", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Ending 6 of ?: Phantom of the Calculator", "color:white;");
      await delay(1000);
    }
    else if (phQuestions === "George" || phQuestions === "Ge") {
      await addToResponseText("Ge*rge", "color:#001eff;");
      await delay(1000);
      await addToResponseText("R!ght", "color:#001eff;");
      await delay(1000);
      await addToResponseText("He !s…", "color:#001eff;");
      await delay(1000);
      await addToResponseText("C*mpl!c@ted", "color:#001eff;");
      await delay(1000);
      await addToResponseText("T* s@y the le@st", "color:#001eff;");
      await delay(1000);
      await addToResponseText("He's @ g**d pers*n", "color:#001eff;");
      await delay(1000);
      await addToResponseText("He w@s just @ b!t m!sle@d !n h!s e@rly ye@rs, y*u kn*w", "color:#001eff;");
      await delay(1000);
      await console.log("Not this again");
      await delay(1000);
      await addToResponseText("!'m gl@d !'m here n*w", "color:#001eff;");
      await delay(1000);
      await addToResponseText("! f!n@lly h@ve @ ch@nce t* help h!m", "color:#001eff;");
      await delay(1000);
      await addToResponseText("T* f!x h!m", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Ending 6 of ?: Phantom of the Calculator", "color:white;");
      await delay(1000);
    }
    else if (phQuestions === "Ghost" || phQuestions === "Gh") {
      await addToResponseText("@h, yes", "color:#001eff;");
      await delay(1000);
      await addToResponseText("H!m.", "color:#001eff;");
      await delay(1000);
      await addToResponseText("He's here, @nd !'m n*t p@rt!cul@rly f*nd *f h!m", "color:#001eff;");
      await delay(1000);
      await addToResponseText("T* s@y the le@st", "color:#001eff;");
      await delay(1000);
      await addToResponseText("But ! supp*se y*u w@nt t* kn*w why", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Well, he ru!ned everyth!ng", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Destr*yed my f@m!ly, @nd my p@st", "color:#001eff;");
      await delay(1000);
      await addToResponseText("He's the re@s*n we're @ll here", "color:#001eff;");
      await delay(1000);
      await console.log("No, he's not");
      await delay(1000);
      await console.log("I am");
      await delay(1000);
      await addToResponseText("! just… ! w!sh ! never met h!m", "color:#001eff;");
      await delay(1000);
      await addToResponseText("Ending 6 of ?: Phantom of the Calculator", "color:white;");
      await delay(1000);
    }
  }


  //Endings That Work: 



  //Make sure to check out commmented out to do items, mainly Mary talking to Ash

  // Set focus on the command line
  commandLineContainer.style.display = 'block'
  scrollToBottom();
  commandLine.focus();


}