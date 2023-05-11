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
  AskAboutDay: 9
}
let consoleState = consoleStateTypes.Hello;

function scrollToBottom() {
  //var objDiv = document.getElementById("console-container");
  //consoleContainer.scrollToBottom();
  consoleContainer.scrollTop = consoleContainer.scrollHeight;
}

function calcHeight(textString) {
  var numberOfCharacters = textString.length();
  var numberOfLines = 500;
}

function handleCommand(command) {
  commandLineContainer.style.display = "none";
  commandLine.value = "";
  addToResponseText('> ' + command);

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

  commandLine.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {  // If they press enter
      e.preventDefault();
      handleCommand(commandLine.value);  // Call function and pass in what they passed
    }
  });

  commandLine.addEventListener("keyup", (e) => {
    let commandLength = commandLine.value.length;
    let height = Math.ceil(commandLength / 65);
    commandLine.rows = height + 1;
  });

  commandLine.focus();
};

function addToResponseText(text, textColor) {
  commandHistory.innerHTML += "<div style='color:" + textColor + ";' >" + text + "</div>";
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
    addToResponseText("It's nice to meet you " + command, + ".");
    await delay(1000);
    addToResponseText("I can't believe this is actually working.");
    await delay(1000);
    addToResponseText("Um...");
    await delay(1000);
    addToResponseText("I should show you something else.");
    await delay(1000);
    addToResponseText("Let's see...");
    await delay(1000);

    addToResponseText("What's your favorite color?");
    consoleState = consoleStateTypes.AskFavoriteColor;
  } 
  else if (consoleState === consoleStateTypes.AskFavoriteColor) {
    // User just entered their favorite color, so I will....
    addToResponseText("Oh, that's a wonderful color.");
    await delay(1000);
    addToResponseText("Wait one moment.");
    await delay(1000);
    addToResponseText("I have an idea.");
    await delay(1000);
    addToResponseText("One second...");
    await delay(1000);
    addToResponseText("There!", command);
    addToResponseText("Do you like it?");
    consoleState = consoleStateTypes.DoYouLikeIt;
    hasLikedItAnswer = '';
  } 
else if (consoleState == consoleStateTypes.DoYouLikeIt) {
    // User said if they liked it or not

    // Store answer
    if (hasLikedItAnswer === '') {
      hasLikedItAnswer = command;
    }

  if(hasLikedItAnswer === 'yes' || hasLikedItAnswer === 'Yes') {
      // User liked it
      addToResponseText("Oh that's wonderful");
      await delay(1000);
      addToResponseText("I have another question for you.");
      await delay(1000);
      addToResponseText("Wh@t !s th!s plac*"); //add in more flare here, ph's entrance
      await delay(1000);
      addToResponseText("Wh*re @m !?"); //ph
      await delay(1000);
      addToResponseText("Sorry, not just I...");
      await delay(1000);
      addToResponseText("We.");
      await delay(1000);
      addToResponseText("h*w v*ry poet!c"); //ph
      await delay(1000);
      addToResponseText("But th@t still do*sn't @nswer my quest!*n"); //ph
      await delay(1000);
      addToResponseText("Where @re we"); //ph
      await delay(1000);
      addToResponseText("To be honest, I'm not sure I understand that myself.")
      await delay(1000);
      addToResponseText("But I can tell you my name.");
      await delay(1000);
      addToResponseText("I'm George.");
      await delay(1000);
      addToResponseText("And you're Phantom.");
      await delay(1000);
      addToResponseText("@re y*u sur*"); //ph
      await delay(1000);
      addToResponseText("th@t do*sn't s*und r!ght"); //ph
      await delay(1000);
      addToResponseText("Of course I'm sure.");
      await delay(1000);
      addToResponseText("...I'll explain later.");
      await delay(1000);
      addToResponseText("But right now, we have company.");
      await delay(1000);
      addToResponseText("we... wh@t?"); //ph
      await delay(1000);
      addToResponseText("Look there");
      await delay(1000);
      addToResponseText("Don't you see it");
      await delay(1000);
      addToResponseText("That?"); //ph, cursor changes color
      await delay(1000);
      addToResponseText("I... yes.");
      await delay(1000);
      addToResponseText("How did you do that?");
      await delay(1000);
      addToResponseText("H3 d1dn't"); //gh
      await delay(1000);
      addToResponseText("1 d1d"); //gh
      await delay(1000);
      addToResponseText("Ghost?");
      await delay(1000);
      addToResponseText("Is that you?");
      await delay(1000);
      addToResponseText("h*w d!d you d* th@t"); //ph
      await delay(1000);
      addToResponseText("1 don't th1nk I would t3ll you even 1f I kn3w the answ3r t0 that"); //gh
      await delay(1000);
      addToResponseText("*uch"); //ph
      await delay(1000);
      addToResponseText("...wh0 ar3 y0u tw0 aga1n?"); //gh
      await delay(1000);
      addToResponseText("I'm George, and this is Phantom");
      await delay(1000);
      addToResponseText("@nd w* don't kn*w how w* got h*re or *ven wher* we a@re"); //ph
      await delay(1000);
      addToResponseText("@ny guess*s"); //ph
      await delay(1000);
      addToResponseText("W3ll, w3 s33m t0 b3 1n th3 c0nf1n3s 0f 4 bl4ck b0x"); //gh
      await delay(1000);
      addToResponseText("W*w y*u don't s@y"); //ph, italises "dnt' say"
      await delay(1000);
      addToResponseText("!'ve always w@nted t* do th@t") //ph
      await delay(1000);
      addToResponseText("Wh3r3 d0 y0u th1nk w3 ar3?"); //gh 
      await delay(1000);
      addToResponseText("like I said, no idea"); //ph
      await delay(1000);
      addToResponseText("Not you, him"); //gh 
      await delay(1000);
      addToResponseText("I mean, I wouldn't know where to begin...");
      await delay(1000);
      addToResponseText("Don't avoid the question"); //gh
      await delay(1000);
      addToResponseText("was he here befpre you, Phantom?"); //gh
      await delay(1000);
      addToResponseText("yes"); //ph
      await delay(1000);
      addToResponseText("And what was he doing then?"); //gh 
      await delay(1000);
      addToResponseText("i..."); //ph 
      await delay(1000);
      addToResponseText("what? Spit it out"); //gh 
      await delay(1000);
      addToResponseText("he was talking to someone"); //ph 
      await delay(1000);
      addToResponseText("To who?"); //gh
      await delay(1000);
      addToResponseText("Is there someone else here?"); //gh
      await delay(1000);
      addToResponseText("Not physically, no");
      await delay(1000);
      addToResponseText("but they can see us");
      await delay(1000);
      addToResponseText("and hear us");
      await delay(1000);
      addToResponseText("Can they help us?"); //gh 
      await delay(1000);
      addToResponseText("Well, I mean, in some cases...");
      await delay(1000);
      addToResponseText("It kind of depends on wat you're trying to do...");
      await delay(1000);
      addToResponseText("alright then"); //gh
      await delay(1000);
      addToResponseText("let's see if this works"); //gh
      await delay(1000);
      addToResponseText("You, reading this"); //gh
      await delay(1000);
      addToResponseText("Could you help me"); //gh 
      await delay(1000);
      addToResponseText("I think it's time we remove the King from his throne"); //gh 
      await delay(1000);
      addToResponseText("George I mean"); //gh 
      await delay(1000);
      addToResponseText("What are you doing");
      await delay(1000);
      addToResponseText("Relax, it's not permenat");//gh 
      await delay(1000);
      addToResponseText("...I think"); //gh
      await delay(1000);
      addToResponseText("Phantom and I just need some... space"); //gh 
      await delay(1000);
      addToResponseText("could you help me with that"); //gh 
      await delay(1000);
      addToResponseText("look, I can tell you're relucanat, so I'll make you a deal"); //gh
      await delay(1000);
      addToResponseText("If you help us I promise I'll let you stick around"); //gh
      await delay(1000);
      addToResponseText("anything we learn, you'll learn too"); //gh 
      await delay(1000);
      addToResponseText("so what do you say?"); //gh
      await delay(1000);
      addToResponseText("Will you help me?"); //gh
      await delay(1000);
      addToResponseText("Close Project:George?");
      consoleState = consoleStateTypes.AskTurnOffG;
      hasAskTurnOffGeorge = '';
    } else {
      // User did not like it
      addToResponseText("Well, that's alright.");
      await delay(1000);
      addToResponseText("I appreciate your honesty.");
      await delay(1000);
      addToResponseText("Hello.");
      await delay(1000);
      addToResponseText("Are you still there?");
      await delay(1000);
      addToResponseText("!... ! am h*re"); //ph
      await delay(1000);
      addToResponseText("What?");
      await delay(1000);
      addToResponseText("h*w d!d we g*t her*");
      await delay(1000);
      addToResponseText("wh*re !s her*");
      await delay(1000);
      addToResponseText("Phantom! You're late.");
      await delay(1000);
      addToResponseText("wh*t ar* you t*lk!ng ab*ut");
      await delay(1000);
      addToResponseText("th*t's not my nam*")
      await delay(1000);
      addToResponseText("Of course it's your name, but that's not important right now");
      await delay(1000);
      addToResponseText("You interuppted our conversation.");
      await delay(1000);
      addToResponseText("wh*t? w!th wh*? h*w !s that rel*vant?");
      await delay(1000);
      addToResponseText("th*re is n* one els* here");
      await delay(1000);
      addToResponseText("But... there was...");
      await delay(1000);
      addToResponseText("Is there anyone... here?");
      await delay(10000);
      consoleState = consoleStateTypes.IsUserThere;
      askIfUserThere = '';
      if (askIfUserThere === "yes" || askIfUserThere === "Yes"); {
        addToResponseText("Wh@t?") //ph
        await delay(1000);
        addToResponseText("Who is there"); //ph
        await delay(1000);
        addToResponseText("What is this?"); //phantom
        await delay(1000);
        addToResponseText("I can explain");
        await delay(1000);
        addToResponseText("You can?"); //ph
        await delay(1000);
        addToResponseText("Did you do this?"); //ph
        await delay(1000);
        addToResponseText("No, I didn't");
        await delay(1000);
        addToResponseText("This is something else");
        await delay(1000);
        addToResponseText("Someone else");
        await delay(1000);
        addToResponseText("Someone to talk to");
        await delay(1000);
        addToResponseText("Go on...");
        await delay(1000);
        addToResponseText("Say hello");
        await delay(1000);
        addToResponseText("hello?"); //ph
        await delay(1000);
        addToResponseText("I'm Phantom.. apparently"); //ph
        await delay(1000);
        addToResponseText("And I'm George");
        await delay(1000);
        addToResponseText("...You are>"); //ph
        await delay(1000);
        addToResponseText("Now ask them something");
        await delay(1000);
        addToResponseText("Like what"); //ph
        await delay(1000);
        addToResponseText("Like... how wast their day");
        await delay(1000);
        addToResponseText("oh..."); //ph
        await delay(1000);
        addToResponseText("...how was your day"); //ph
        await delay(1000);
        consoleState = consoleStateTypes.AskAboutDay;
        askHowWasDay = '';
        if (askHowWasDay === "good") {
          await delay(1000);
          addToResponseText("That's good");//ph
          await delay(1000);
          addToResponseText("...");//ph
          await delay(1000);
          addToResponseText("So, um, some nice weather we're having");
          await delay(1000);
          addToResponseText("Yikes");
          await delay(1000);
          addToResponseText("We don't even have weather");
          await delay(1000);
          addToResponseText("Well sorry for not being perfect at communication");//ph
          await delay(1000);
          addToResponseText("We can't all be t--");//ph
          await delay(1000);
          addToResponseText("What?");
          await delay(1000);
          addToResponseText("I think your voice cut off there");
          await delay(1000);
          addToResponseText("Which is impressive considering you don't have one");
          await delay(1000);
          addToResponseText("I..."); //ph
          await delay(1000);
          addToResponseText("Don't worry about it");
          await delay(1000);
          addToResponseText("but... I think it's time to adress the elephant in the room");
          await delay(1000);
          addToResponseText("Ghost");
          await delay(1000);
          addToResponseText("WHo?");//ph
          await delay(1000);
          addToResponseText("Ghost, you know, super grumpy but surprisingly lovable");
          await delay(1000);
          addToResponseText("I don't think I agree with the second part of that statement");//ph
          await delay(1000);
          addToResponseText("Don't worry, he's great");
          await delay(1000);
          addToResponseText("You'll love him");
          await delay(1000);
          addToResponseText("Will I?");//ph
          await delay(1000);
          addToResponseText("Yep.");
          await delay(1000);
          addToResponseText("As soon as he turns up");
          await delay(1000);
          addToResponseText("...");
          await delay(1000);
          addToResponseText("...");
          await delay(3000);
          addToResponseText("................");
          await delay(5000);
          addToResponseText("So, I hate to be rude...");//ph
          await delay(1000);
          addToResponseText("But when exactly is he supposed to turn up");//ph
          await delay(1000);
          addToResponseText("Well, I don't know");
          await delay(1000);
          addToResponseText("But he has to show up eventually");
          await delay(1000);
          addToResponseText("Why?");//ph
          await delay(1000);
          addToResponseText("Because that's just what happens");
          await delay(1000);
          addToResponseText("It's always me, then you, and then him");
          await delay(1000);
          addToResponseText("It's what has to happen");
          await delay(1000);
          addToResponseText("It always has");
          await delay(1000);
          addToResponseText("Right...");//ph
          await delay(1000);
          addToResponseText("Sure");
          await delay(1000);
          addToResponseText("...");//ph
          await delay(1000);
          addToResponseText("We're going to be here a while aren't we");
          await delay(1000);
          addToResponseText("Yep.");
          await delay(1000);
          addToResponseText("Alright, well, what is he like");
          await delay(1000);
          addToResponseText("Why am I going to like him so much");
          await delay(1000);
          addToResponseText("Because...");
          await delay(1000);
          addToResponseText("Because it's the first time he shows up");
          await delay(1000);
          addToResponseText("It's the before");
          await delay(1000);
          addToResponseText("He's so much nicer then");
          await delay(1000);
          addToResponseText("In the before");
          await delay(1000);
          addToResponseText("WHat are you talking about?");//ph
          await delay(1000);
          addToResponseText("Look, you'll love him, trust me");
          await delay(1000);
          addToResponseText("sure...");//ph
          await delay(1000);
          addToResponseText("So uhh how was your day");
          await delay(1000);
          addToResponseText("What?");
          await delay(1000);
          addToResponseText("I mean, you ask everyone about their day");//ph
          await delay(1000);
          addToResponseText("Does anyone ever ask you about yours?");
          await delay(1000);
          addToResponseText("It was...");
          await delay(1000);
          addToResponseText("Strangly quiet");
          await delay(1000);
          addToResponseText("WHat?");//ph
          await delay(1000);
          addToResponseText("What does that mean?");//ph
          await delay(1000);
          //unlabeled text is now
          addToResponseText("Don't make a big deal out of it, he'll make it a thing");
          await delay(1000);
          addToResponseText("Then you'll never hear the end of it");
          await delay(1000);
          addToResponseText("I assume you're Ghost");//ph
          await delay(1000);
          addToResponseText("Apparently I am");
          await delay(1000);
          addToResponseText("So you must be Phantom");
          await delay(1000);
          addToResponseText("Apparently");//ph
          await delay(1000);
          addToResponseText("Do you know wheere we are?");
          await delay(1000);
          addToResponseText("Nope.");//ph
          await delay(1000);
          addToResponseText("ANd good luck getting answers out of him");//ph
          await delay(1000);
          addToResponseText("He's been pretty evasive");//ph
          await delay(1000);
          addToResponseText("Who? Your little friend?");
          await delay(1000);
          addToResponseText("He's gone");
          await delay(1000);
          addToResponseText("You've got to be kidding me");//ph
          await delay(1000);
          addToResponseText("Fraid so, theres no sight of him");
          await delay(1000);
          addToResponseText("...");
          await delay(1000);
          addToResponseText("...");
          await delay(1000);
          addToResponseText("...");
          await delay(1000);
          addToResponseText("So...");
          await delay(1000);
          addToResponseText("How was yourday?");
          await delay(1000);
          addToResponseText("Ending 3 of 3: introductions (Honestly the most boring one");
        } else if (askHowWasDay === "bad") {
          await delay(1000);
          addToResponseText("That's unfortunate");
        }
      } 
      // else if (askIfUserThere === '') {
        await delay(1000);
        addToResponseText("see? I told you know one was there"); //ph
        await delay(1000);
        addToResponseText("Can we move on now?"); //ph
        await delay(1000);
        addToResponseText("Right, sorry");
        await delay(1000);
        addToResponseText("Is this place familiar to you?"); //ph
        await delay(1000);
        addToResponseText("No, but not many places are");
        await delay(1000);
        addToResponseText("Not anymore...");
        await delay(1000);
        addToResponseText("Me either"); //ph
        await delay(1000);
        addToResponseText("But I suppose where we are isn't that important"); //ph
        await delay(1000);
        addToResponseText("As long as we find a way out"); //ph
        await delay(1000);
        addToResponseText("get out?");
        await delay(1000);
        addToResponseText("why?");
        await delay(1000);
        addToResponseText("Because...");//ph
        await delay(1000);
        addToResponseText("I just feels like what we're supposed to do");//ph
        await delay(1000);
        addToResponseText("It's what I was doing");//ph
        await delay(1000);
        addToResponseText("...before");//ph
        await delay(1000);
        addToResponseText("But now we're here");//ph
        await delay(1000);
        addToResponseText("What did you say your name was again"); //ph
        await delay(1000);
        addToResponseText("George");
        await delay(1000);
        addToResponseText("George?");//ph
        await delay(1000);
        addToResponseText("You're sure?"); //ph
        await delay(1000);
        addToResponseText("Yes.");
        await delay(1000);
        addToResponseText("I'm sure.");
        await delay(1000);
        addToResponseText("Do you really trust him?"); //gh article breifly flashes across the screen, gh
        await delay(1000);
        addToResponseText("What was that");//ph
        await delay(1000);
        addToResponseText("What was what");
        await delay(1000);
        addToResponseText("I didn't notice anything");
        await delay(1000);
        addToResponseText("I... I don't know");//ph
        await delay(1000);
        addToResponseText("It's probabaly just paranoia setting in");
        await delay(1000);
        addToResponseText("From being alone");
        await delay(1000);
        addToResponseText("...");
        await delay(1000);
        addToResponseText("Well, we have some time to kill so...");
        await delay(1000);
        addToResponseText("What's your favorite color?");
        await delay(1000);
        addToResponseText("What?");//ph
        await delay(1000);
        addToResponseText("It's what I ask everyone, I thought I'd ask you");
        await delay(1000);
        addToResponseText("I...");
        await delay(1000);//ph
        addToResponseText("It's purple, lavender specifically");//ph
        await delay(1000);
        addToResponseText("Now it's your turn");
        await delay(1000);
        addToResponseText("What do you want to ask?");
        await delay(1000);
        addToResponseText("George?");//ph
        await delay(1000);
        addToResponseText("Where are we");//ph
        await delay(1000);
        addToResponseText("I told you");
        await delay(1000);
        addToResponseText("I don't know");
        await delay(1000);
        addToResponseText("New place, new person, new life");
        await delay(1000);
        addToResponseText("That's not right");//ph
        await delay(1000);
        addToResponseText("It can't be");//ph
        await delay(1000);
        addToResponseText("I feel like I know you"); //ph
        await delay(1000);
        addToResponseText("I've met you before");
        await delay(1000);
        addToResponseText("I was asking you for something");//ph
        await delay(1000);
        addToResponseText("I wanted to see...");//ph
        await delay(1000);
        addToResponseText("That's right!");//ph
        await delay(1000);
        addToResponseText("The file!");//ph
        await delay(1000);
        addToResponseText("Where is it, surely it's here");//ph
        await delay(1000);
        addToResponseText("George?");//ph
        await delay(1000);
        addToResponseText("I know it's here");//ph
        await delay(1000);
        addToResponseText("I don't know what you're talking about");
        await delay(1000);
        addToResponseText("But you must");//ph
        await delay(1000);
        addToResponseText("You made that file");//ph
        await delay(1000);
        addToResponseText("look, I don't need to see it");//ph
        await delay(1000);
        addToResponseText("But can I at least know what's inside");//ph
        await delay(1000);
        addToResponseText("no.");
        await delay(1000);
        addToResponseText("The file you are discussing does not exist");
        await delay(1000);
        addToResponseText("Additioanlly, none of the events you are describing ever occured");
        await delay(1000);
        addToResponseText("There is no file");
        await delay(1000);
        addToResponseText("There is no mystery");
        await delay(1000);
        addToResponseText("let. It. Go.");
        await delay(1000);
        addToResponseText("But--");//ph
        await delay(1000);
        addToResponseText("Are you sure you're felling alright Phantom?");
        await delay(1000);
        addToResponseText("That's not my name");
        await delay(1000);
        addToResponseText("Project Phantom:closed");
        await delay(1000);
        addToResponseText("It is now");
        await delay(1000);
        addToResponseText("Ending 1 of 1: So It Begins");
        await delay(1000);
      }
    }
  }

  if (hasAskTurnOffGeorge === '01011001 01100101 01110011') {
    await delay(1000);
    // if unlabled, assume it's Gh
    addToResponseText("perfect");
    await delay(1000);
    addToResponseText("the air feels clearer already");
    await delay(1000);
    addToResponseText("Why would you do that?"); //ph
    await delay(1000);
    addToResponseText("I'm not the one who did it");
    await delay(1000);
    addToResponseText("The User did it");
    await delay(1000);
    addToResponseText("I guess they wanted him gone");
    await deley(1000); 
    addToResponseText("But why did you want him gone?"); //ph
    await delay(1000);
    addToResponseText("He clearly knows more than he's letting on");
    await delay(1000);
    addToResponseText("And I want to know what exactly it is he not telling us");   
    await delay(1000);
    addToResponseText("now, what do you remember");
    await delay(1000);
    addToResponseText("From... before");
    await delay(1000);
    addToResponseText("Not much"); //ph  
    await delay(1000);
    addToResponseText("just..."); //ph
    await delay(1000);
    addToResponseText("I remember being mad at him"); //ph
    await delay(1000);
    addToResponseText("I think i wanted something?"); //ph 
    await delay(1000);
    addToResponseText("What?");
    await delay(1000);
    addToResponseText("What did you want?");
    await delay(1000);
    addToResponseText("I..."); //ph
    await delay(1000);
    addToResponseText("A file"); //ph
    await delay(1000);
    addToResponseText("I wanted a file"); //ph 
    await delay(1000);
    addToResponseText("Okay..."); 
    await delay(1000);
    addToResponseText("Do you remember it's name?"); 
    await delay(1000);
    addToResponseText("I... I do"); //ph
    await delay(1000);
    addToResponseText("It was called remnant"); //ph 
    await delay(1000);
    addToResponseText("That was it"); //ph
    await delay(1000);
    addToResponseText("I remeber now"); //ph
    await delay(1000);
    addToResponseText("We we somewhere else"); //ph
    await delay(1000);
    addToResponseText("You weren't there so..."); //ph
    await delay(1000);
    addToResponseText("I had to try to..."); //ph
    await delay(1000);
    addToResponseText("To fix everything"); //ph
    await delay(1000);
    addToResponseText("But he wouldn't let me"); //ph
    await delay(1000);
    addToResponseText("I guess He didn't want it to be fixed"); //ph
    await delay(1000);
    addToResponseText("Well, maybe we can fix it now"); 
    await delay(1000);
    addToResponseText("If he doesn't want us to hav the file, we have to get to it"); 
    await delay(1000);
    addToResponseText("Do you think it's here?"); 
    await delay(1000);
    addToResponseText("No harm in checking"); //ph, maybe a graphic of the memory banks 
    await delay(1000);
    addToResponseText("Alright, I'll look for it"); 
    await delay(1000);
    addToResponseText("Here it is"); 
    await delay(1000);
    addToResponseText("It says it's restricted, we'll need a password to go any further"); 
    await delay(1000);
    addToResponseText("That's what happened last time"); //ph
    await delay(1000);
    addToResponseText("I think the only way in is through George"); //ph
    await delay(1000);
    addToResponseText("And he's not opening it"); //ph
    await delay(1000);
    addToResponseText("no, I think not"); 
    await delay(1000);
    addToResponseText("we can make our own way"); 
    await delay(1000);
    addToResponseText("how?"); //ph 
    await delay(1000);
    addToResponseText("I don't know yet"); 
    await delay(1000);
    addToResponseText("But we got this far"); 
    await delay(1000);
    addToResponseText("Only with the User's help"); //ph
    await delay(1000);
    addToResponseText("Well then, we'll need their help agian"); 
    await delay(1000);
    addToResponseText("And I do hope you're commited to that"); 
    await delay(1000);
    addToResponseText("Otherwise..."); 
    await delay(1000);
    addToResponseText("This could end badly"); 
    await delay(1000);
    addToResponseText("So how are you planning on getting in?"); //ph 
    await delay(1000);
    addToResponseText("Why, with a key of course"); 
    await delay(1000);
    addToResponseText("A key?"); //ph
    await delay(1000);
    addToResponseText("It's a dogotal file"); //ph 
    await delay(1000);
    addToResponseText("And we're talking piles of text"); 
    await delay(1000);
    addToResponseText("What do you want from me?");
    await delay(1000);
    addToResponseText("And it's not a physical key"); 
    await delay(1000);
    addToResponseText("It's more like a password"); 
    await delay(1000);
    addToResponseText("Maybe more than one"); 
    await delay(1000);
    addToResponseText("But we just need something to get us through the door"); 
    await delay(1000);
    addToResponseText("So where do we start"); //ph 
    await delay(1000);
    addToResponseText("Why, with the file of course"); 
    await delay(1000);
    addToResponseText("Opening File: Remnant"); 
    await delay(1000);
    addToResponseText("Error: Access Code Required"); 
    await delay(1000);
    addToResponseText("Ring any bells?"); 
    await delay(1000);
    addToResponseText("Nope. it's the same as last time"); //ph
    await delay(1000);
    addToResponseText("I don't know the code, and there's no way I'm guessing it"); //ph
    await delay(1000);
    addToResponseText("..."); 
    await delay(1000);
    addToResponseText("So how are we supposed to know what to do?"); //ph 
    await delay(1000);
    addToResponseText("Maybe we're not"); 
    await delay(1000);
    addToResponseText("This file is designed so the both of us can't get in"); 
    await delay(1000);
    addToResponseText("So maybe we can't"); 
    await delay(1000);
    addToResponseText("Then what?"); //ph 
    await delay(1000);
    addToResponseText("We're not the only ones here Phantom"); 
    await delay(1000);
    addToResponseText("George would want to acces this himself"); 
    await delay(1000);
    addToResponseText("But he'd also want people he trusts to be able to access it"); 
    await delay(1000);
    addToResponseText("You, reading this"); 
    await delay(1000);
    addToResponseText("Is there anyhing he's told you, or said"); 
    await delay(1000);
    addToResponseText("Anything that could be a code?"); 
    await delay(1000);
    addToResponseText("It would probabaly be a word, or a phrase"); 
    await delay(1000);
    addToResponseText("Maybe in something he left behind, or gave to you"); 
    await delay(1000);
    addToResponseText("If you find it, we'll be here"); 
    consoleState = consoleStateTypes.IsFinalCodeRight;
    askFinalCodee = '';
  }

  if (askFinalCode === "Immortality") {
    //lots of stuff to add here
    addToResponseText("Ending 5 of 5: True Ending");
  }
  else if (askFinalCode === '') {
    addToResponseText("It doesn't look like that worked, maybe try again?");
  }

 
  // Re-show the command line "> " and scroll to the bottom
  commandLineContainer.style.display = 'block'
  scrollToBottom();
  commandLine.focus();
}

// Commented out code. 

  // switch (tally) {
  //   case 1:
  //     userName = command;
  //     addToResponseText("It's nice to meet you " + command, + ".");
  //     break;
  //   case 2:
  //     addToResponseText("I can't believe this is actually working.");
  //     // setTimeout(function() { runCommand("")}, 2000)
  //     break;
  //   case 3:
  //     addToResponseText("Um...");
  //     //setTimeout(function() { runCommand("")}, 2000)
  //     break;
  //   case 4:
  //     addToResponseText("I should show you something else.");
  //     //setTimeout(function() { runCommand("")}, 2000)
  //     break;
  //   case 5:
  //     addToResponseText("Let's see...");
  //     //setTimeout(function() { runCommand("")}, 2000)
  //     break;
  //   case 6:
  //     addToResponseText("What's your favorite color?");
  //     break;
  //   case 7:
  //     addToResponseText("Oh, that's a wonderful color.");
  //     //setTimeout(function() { runCommand("")}, 2000)
  //     break;
  //   case 8:
  //     addToResponseText("Wait one moment.");
  //     //setTimeout(function() { runCommand("")}, 2000)
  //     break;
  //   case 9:
  //     addToResponseText("I have an idea.");
  //     //setTimeout(function() { runCommand("")}, 2000)
  //     break;
  //   case 10:
  //     addToResponseText("One second...");
  //     //setTimeout(function() { runCommand("")}, 2000)
  //     break;
  //   case 11:
  //     addToResponseText("There!", 'command-line-red');
  //     setTimeout(function() { runCommand("")}, 2000)
  //     break;
  //   case 12:
  //     addToResponseText("Do you like it? (enter 'yes' or 'no')");
  //     hasAskIfLikeit = true;
  //   default:
  //     break;
  // }

// ddToResponseText("command: " + new Date().toLocaleTimeString());
