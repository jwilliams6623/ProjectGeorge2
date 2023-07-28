function foundCalc() {
    Cookies.set('hasCalc', 'true');
}

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

  document.addEventListener('DOMContentLoaded', function() {
    if (Cookies.get('hasFlashLight') === 'true') { 
      Cookies.set('flashOn', '');
      window.addEventListener('keydown', (e) => {
        switch (e.key) {
          case 'f':
            console.log("pressed f")
            if (Cookies.get('flashOn') === 'true') {
              Cookies.set('flashOn', 'false');
              console.log('flash is off')
              document.querySelectorAll(".hint-format").forEach(a=>a.style.visibility = "hidden");
              
            }
            else if (Cookies.get('flashOn') === 'false' || Cookies.get('flashOn') === '') {
              Cookies.set('flashOn', 'true');
              console.log('flash is on')
              document.querySelectorAll(".hint-format").forEach(a=>a.style.visibility = "inherit");
            } 
          break
        }
      })
     
    }
    
  }, false);