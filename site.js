let tally = 0;
// let smallerTally = tally;
// let biggerTally = tally + 1;
// let tallyChecker;
let commandLine;
let commandHistory;
let userName;
let saidHello;
let actionState;
let hasAskIfLikeit;
let hasAskTurnOffGeorge;

// function tallyLimit() {
//   if (tally === smallerTally && tally <= biggerTally) {
//     tallyChecker = true;
//   }
// }

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
};

function addToResponseText(command, colorClass) {
  commandHistory.innerHTML += "<div class='" + colorClass + "'>" + command + "</div>";
}

function runCommand(command) {
  tally++;
  switch (tally) {
    case 1:
      userName = command;
      addToResponseText("It's nice to meet you " + command, + ".");
      break;
    case 2:
      addToResponseText("I can't believe this is actually working.");
      // setTimeout(function() { runCommand("")}, 2000)
      break;
    case 3:
      addToResponseText("Um...");
      //setTimeout(function() { runCommand("")}, 2000)
      break;
    case 4:
      addToResponseText("I should show you something else.");
      //setTimeout(function() { runCommand("")}, 2000)
      break;
    case 5:
      addToResponseText("Let's see...");
      //setTimeout(function() { runCommand("")}, 2000)
      break;
    case 6:
      addToResponseText("What's your favorite color?");
      break;
    case 7:
      addToResponseText("Oh, that's a wonderful color.");
      //setTimeout(function() { runCommand("")}, 2000)
      break;
    case 8:
      addToResponseText("Wait one moment.");
      //setTimeout(function() { runCommand("")}, 2000)
      break;
    case 9:
      addToResponseText("I have an idea.");
      //setTimeout(function() { runCommand("")}, 2000)
      break;
    case 10:
      addToResponseText("One second...");
      //setTimeout(function() { runCommand("")}, 2000)
      break;
    case 11:
      addToResponseText("There!" + 'command-line-red');
      setTimeout(function() { runCommand("")}, 2000)
      break;
    case 12:
      addToResponseText("Do you like it? (enter 'yes' or 'no')");
      hasAskIfLikeit = true;
    default:
      break;
  }

  if (hasAskIfLikeit === true) {
    hasLikedItAnswer = command;
    if (command === "yes") {
      addToResponseText("Oh, that's wonderful.");
      if (tally === 14) {
        addToResponseText("I have another question for you.");
      } else if (tally === 15) {
        addToResponseText("Wh@t !s th!s plac*"); //add in more dramitc flare here, ph's entrance
      } else if (tally === 16) {
        addToResponseText("Wh*re @m !?"); //ph
      } else if (tally === 17) {
        addToResponseText("Sorry, not just I...");
      } else if (tally === 18) {
        addToResponseText("We.");
      } else if (tally === 19) {
        addToResponseText("*h yes, v*ry poet!c"); //ph
      } else if (tally === 20) {
        addToResponseText("But th@t still do*sn't @nswer my quest!*n"); //ph
      } else if (tally === 21) {
        addToResponseText("Where @re we"); //ph
      } else if (tally === 22) {
        addToResponseText("To be honest, I'm not sure I understand that myself.")
      } else if (tally === 23) {
        addToResponseText("But I can tell you my name.");
      } else if (tally === 24) {
        addToResponseText("I'm George.");
      } else if (tally === 25) {
        addToResponseText("And you're Phantom.");
      } else if (tally === 26) {
        addToResponseText("@re y*u sur*"); //ph
      } else if (tally === 27) {
        addToResponseText("th@t do*sn't s*und r!ght"); //ph
      } else if (tally === 28) {
        addToResponseText("Of course I'm sure.");
      } else if (tally === 29) {
        addToResponseText("...I'll explain later.");
      } else if (tally === 30) {
        addToResponseText("But right now, we have company.");
      } else if (tally === 31) {
        addToResponseText("we... wh@t?"); //ph
      } else if (tally === 32) {
        addToResponseText("Look there");
      } else if (tally === 33) {
        addToResponseText("Don't you see it");
      } else if (tally === 34) {
        addToResponseText("That?"); //ph, cursor changes color
      } else if (tally === 35) {
        addToResponseText("I... yes.");
      } else if (tally === 36) {
        addToResponseText("How did you do that?");
      } else if (tally === 37) {
        addToResponseText("H3 d1dn't"); //gh
      } else if (tally === 38) {
        addToResponseText("1 d1d"); //gh
      } else if (tally === 39) {
        addToResponseText("Ghost?");
      } else if (tally === 40) {
        addToResponseText("Is that you?");
      } else if (tally === 41) {
        addToResponseText("h*w d!d you d* th@t"); //ph
      } else if (tally === 42) {
        addToResponseText("1 don't th1nk I would t3ll you even 1f I kn3w the answ3r t0 that"); //gh
      } else if (tally === 43) {
        addToResponseText("*uch"); //ph
      } else if (tally === 44) {
        addToResponseText("...wh0 ar3 y0u tw0 aga1n?"); //gh
      } else if (tally === 45) {
        addToResponseText("I'm George, and this is Phantom");
      } else if (tally === 46) {
        addToResponseText("@nd w* don't kn*w how w* got h*re or *ven wher* we a@re"); //ph
      } else if (tally === 47) {
        addToResponseText("@ny guess*s"); //ph
      } else if (tally === 48) {
        addToResponseText("W3ll, w3 s33m t0 b3 1n th3 c0nf1n3s 0f 4 bl4ck b0x"); //gh
      } else if (tally === 49) {
        addToResponseText("W*w y*u don't s@y"); //ph, italises "dnt' say"
      } else if (tally === 50) {
        addToResponseText("!'ve always w@nted t* do th@t") //ph
      } else if (tally === 51) {
        addToResponseText("Wh3r3 d0 y0u th1nk w3 ar3?"); //gh 
      } else if (tally === 52) {
        addToResponseText("like I said, no idea"); //ph
      } else if (tally === 53) {
        addToResponseText("Not you, him"); //gh 
      } else if (tally === 54) {
        addToResponseText("I mean, I wouldn't know where to begin...");
      } else if (tally === 55) {
        addToResponseText("Don't avoid the question"); //gh
      } else if (tally === 56) {
        addToResponseText("was he here befpre you, Phantom?"); //gh
      } else if (tally === 57) {
        addToResponseText("yes"); //ph
      } else if (tally === 58) {
        addToResponseText("And what was he doing then?"); //gh 
      } else if (tally === 59) {
        addToResponseText("i..."); //ph 
      } else if (tally === 60) {
        addToResponseText("what? Spit it out"); //gh 
      } else if (tally === 61) {
        addToResponseText("he was talking to someone"); //ph 
      } else if (tally === 62) {
        addToResponseText("To who?"); //gh
      } else if (tally === 63) {
        addToResponseText("Is there someone else here?"); //gh
      } else if (tally === 64) {
        addToResponseText("Not physically, no");
      } else if (tally === 65) {
        addToResponseText("but they can see us");
      } else if (tally === 67) {
        addToResponseText("and hear us");
      } else if (tally === 68) {
        addToResponseText("Can they help us?"); //gh 
      } else if (tally === 69) {
        addToResponseText("Well, I mean, in some cases...");
      } else if (tally === 70) {
        addToResponseText("It kind of depends on wat you're trying to do...");
      } else if (tally === 71) {
        addToResponseText("alright then"); //gh
      } else if (tally === 72) {
        addToResponseText("let's see if this works"); //gh
      } else if (tally === 73) {
        addToResponseText("You, reading this"); //gh
      } else if (tally === 74) {
        addToResponseText("Could you help me"); //gh 
      } else if (tally === 75) {
        addToResponseText("I think it's time we remove the King from his throne"); //gh 
      } else if (tally === 76) {
        addToResponseText("George I mean"); //gh 
      } else if (tally === 77) {
        addToResponseText("What are you doing");
      } else if (tally === 78) {
        addToResponseText("Relax, it's not permenat");//gh 
      } else if (tally === 79) {
        addToResponseText("...I think"); //gh
      } else if (tally === 80) {
        addToResponseText("Phantom and I just need some... space"); //gh 
      } else if (tally === 81) {
        addToResponseText("could you help me with that"); //gh 
      } else if (tally === 82) {
        addToResponseText("look, I can tell you're relucanat, so I'll make you a deal"); //gh
      } else if (tally === 83) {
        addToResponseText("If you help us I promise I'll let you stick around"); //gh
      } else if (tally === 84) {
        addToResponseText("anything we learn, you'll learn too"); //gh 
      } else if (tally === 85) {
        addToResponseText("so what do you say?"); //gh
      } else if (tally === 86) {
        addToResponseText("Will you help me?"); //gh
      } else if (tally === 87) {
        addToResponseText("Close Project:George? (enter yes or no)");
      }
      hasAskTurnOffGeorge = true;
    }
  }
  if (hasAskTurnOffGeorge === true) {
    if (command === "yes") {
      if (tally === 87) {
        addToResponseText("")
      } else if (tally === 88) {
        addToResponseText("")
      }

    }
  }
}
//     switch {
  //       case
  //     }

  //   }


// function Option12(command) {
//   if (command === "yes") {
//     if (tally === 13) {
//       addToResponseText("Oh, that's wonderful");
//       if (tally === 14) {
//         addToResponseText("I have another question for you");
//       } else if (tally === 15) {
//         addToResponseText("What is this place"); //add in more dramitc flare here
//       } else if (tally === 16) {
//         addToResponseText("Where am I?");
//       } else if (tally === 17) {
//         addToResponseText("Sorry, not just I...");
//       } else if (tally === 18) {
//         addToResponseText("We.");
//       }
//     }
//   }
// }
//     switch {
//       case
//     }

//   }
//     if (command === "yes"){
//        if (tally === 13 && tally <= 14) {
//         addToResponseText("Oh, that's wonderful");
//         if (tally === 14 && tally <= 15) {
//           addToResponseText("I have another question for you");
//         }
//         if (tally === 15 && tally <= 16) {
//           addToResponseText("What is this place"); //add in more dramitc flare here
//         }
//         if (tally === 16 && tally <= 17) {
//           addToResponseText("Where am I?");
//         }
//         if (tally === 17 && tally <= 18) {
//           addToResponseText("Sorry, not just I...");
//         }
//         if (tally === 18 && tally <= 19) {
//           addToResponseText("We.");
//         }
//       }

//     }
// }


// ddToResponseText("command: " + new Date().toLocaleTimeString());

// function chapter1() {
//     doument.write("Hello?");
// }