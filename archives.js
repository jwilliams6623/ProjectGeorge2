

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

  

  function notes() {
    console.log("hello1");
    if (Cookies.get('currentUser' === 'AShley')) {
      // fill this later
    }
    if (Cookies.get('ghostTitle') === 'true') {
      document.querySelectorAll(".ghost-title").forEach(a=>a.style.visbility = "visible");
    }
    if (Cookies.get('ghostLiars') === 'true') {
      document.querySelectorAll(".ghost-liars").forEach(a=>a.style.display = "inherit");
    }
    if (Cookies.get('ghostDoubt') === 'true') {
      document.querySelectorAll(".ghost-doubt").forEach(a=>a.style.display = "inherit");
    }
    if (Cookies.get('ghostPower') === 'true') {
      document.querySelectorAll(".ghost-power").forEach(a=>a.style.display = "inherit");
    }
    if (Cookies.get('ghostForget') === 'true') {
      document.querySelectorAll(".ghost-forget").forEach(a=>a.style.display = "inherit");
    }
    if (Cookies.get('ghostSocial') === 'true') {
      document.querySelectorAll(".ghost-social").forEach(a=>a.style.display = "inherit");
    }
    if (Cookies.get('ghostQuote') === 'true') {
      document.querySelectorAll(".ghost-quote").forEach(a=>a.style.display = "inherit");
    }

    if (Cookies.get('phantomTitle') === 'true') {
      document.querySelectorAll(".phantom-title").forEach(a=>a.style.visibility = "visible");
    }
    if (Cookies.get('phantomFix') === 'true') {
      document.querySelectorAll(".phantom-fix").forEach(a=>a.style.display = "inherit");
    }
    if (Cookies.get('phantomPast') === 'true') {
      document.querySelectorAll(".phantom-past").forEach(a=>a.style.display = "inherit");
    }
    if (Cookies.get('phantomGhost') === 'true') {
      document.querySelectorAll(".phantom-ghost").forEach(a=>a.style.display = "inherit");
    }
    if (Cookies.get('phantomTrust') === 'true') {
      document.querySelectorAll(".phantom-trust").forEach(a=>a.style.display = "inherit");
    }
    if (Cookies.get('phantomFail') === 'true') {
      document.querySelectorAll(".phantom-fail").forEach(a=>a.style.display = "inherit");
    }

    if (Cookies.get('georgeTitle') === 'true') {
      document.querySelectorAll(".george-title").forEach(a=>a.style.visibility = "visible");
    }
    if (Cookies.get('georgeCreate') === 'true') {
      document.querySelectorAll(".george-create").forEach(a=>a.style.display = "inherit");
    }
    if (Cookies.get('georgeQuote') === 'true') {
      document.querySelectorAll(".george-quote").forEach(a=>a.style.display = "inherit");
    }
    if (Cookies.get('georgeBack') === 'true') {
      document.querySelectorAll(".george-back").forEach(a=>a.style.display = "inherit");
    }


    if (Cookies.get('hasFlashLight') === "true") { 
      document.querySelectorAll(".flash-img").forEach(a=>a.style.display = "inherit");
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
    // if (Cookies.get('georgeViolet') === 'true') {
    //   document.querySelectorAll(".george-violet").forEach(a=>a.style.display = "inherit");
    // }

  }