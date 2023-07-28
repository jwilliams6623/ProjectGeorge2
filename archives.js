

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

  function memFileOpen() {
    Cookies.set('memFile1', 'true');
    location.reload();
    alert('Something seems... different');
  }



  function notes() {
    if (Cookies.get('currentUser' === 'AShley')) {
      console.log('nice to see you again')
    }
    if (Cookies.get('ghostTitle') === 'true') {
      document.querySelectorAll(".ghost-title").forEach(a=>a.style.visibility = "visible");
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


    if (Cookies.get('memFile') === 'true') {
      document.querySelectorAll(".file-img").forEach(a=>a.style.display = "inherit");
      document.querySelectorAll(".mem-div").forEach(a=>a.style.visibility = "visible");
    }
    if (Cookies.get('memFile1') === 'true') {
      document.querySelectorAll(".memF").forEach(a=>a.style.display = "inherit");
    }
    if (Cookies.get('hasCalc') === 'true') {
      document.querySelectorAll(".calc-img").forEach(a=>a.style.display = "inherit");
      document.querySelectorAll(".calc-div").forEach(a=>a.style.visibility = "visible");
    }
    if (Cookies.get('hasFlashLight') === "true") { 
      document.querySelectorAll(".flash-img").forEach(a=>a.style.display = "inherit");
      document.querySelectorAll(".flash-div").forEach(a=>a.style.visibility = "visible");
    }
    // if (Cookies.get('georgeViolet') === 'true') {
    //   document.querySelectorAll(".george-violet").forEach(a=>a.style.display = "inherit");
    // }


    //remember we don't want inventory stuff in here, this is good
  if (Cookies.get('georgeTitle') === 'true' && Cookies.get('georgeCreate') === 'true' && Cookies.get('georgeQuote') === 'true'
  && Cookies.get('georgeBack') === 'true' && Cookies.get('georgeViolet') ==='true' && Cookies.get('phantomTitle') ==='true'
  && Cookies.get('phantomFix') ==='true' && Cookies.get('phantomPast') ==='true' && Cookies.get('phantomGhost') ==='true'
  && Cookies.get('phantomTrust') ==='true' && Cookies.get('phantomFail') ==='true' && Cookies.get('ghostTitle') ==='true'
  && Cookies.get('ghostLiars') ==='true' && Cookies.get('ghostHappy') ==='true'  && Cookies.get('ghostDoubt') ==='true'
  && Cookies.get('ghostPower') ==='true' && Cookies.get('ghostForget') ==='true' && Cookies.get('ghostSocial') ==='true'
  && Cookies.get('ghostQuote') ==='true' ) {
    document.querySelectorAll(".cassette-img").forEach(a=>a.style.display = "inherit");
  }

     
      
      
      
      
      //Phantom
      
      //Ghost
      
      
      
      
     
      
     
      
      // inventory
     
      
      



  }