// navbar menu
const navMenu = document.getElementById('nav-menu'),
toggleMenu=document.getElementById('nav-toggle'),
closeMenu=document.getElementById('nav-close')
closeMenuW=document.getElementById('nav-close-w')

// show menu
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

// hide menu
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})
closeMenuW.addEventListener('click', () => {
    navMenu.classList.remove('show')
})


// active menu select on click
const navLink = document.querySelectorAll('.nav__item')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n =>n.addEventListener('click', linkAction));

// active menu select on scroll
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY =window.pageYOffset
    var x = window.matchMedia("(max-width: 768px)")
    // document.getElementById("hr1").style.top = scrollY+"px";
    var sectionTop ;
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        if (x.matches) {
          sectionTop = current.offsetTop -50
        }else{
          sectionTop = current.offsetTop -current.offsetHeight
        }
        
        sectionId =current.getAttribute('id')
        // document.getElementById("hr").style.top = sectionHeight+"px"
        // document.getElementById("hr2").style.top = sectionTop+"px"
        // console.log(sectionHeight);

        if (scrollY > sectionTop && scrollY <= sectionTop+sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId+']').classList.add('active')
            // console.log(scrollY);
            // console.log(sectionTop);
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId+']').classList.remove('active')
        }
    })
}

// document.body.style="background-color: var(--bs-dark);transition: 0.5s;"
const sun = "./assets/img/sun.svg";
const moon = "./assets/img/moon2.svg";

const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
container.addEventListener("click", setTheme);

        const isDarkMode = window.matchMedia('(color-scheme: dark)').matches;
        if(isDarkMode){
            var theme = "dark";
            setDark();
            // document.documentElement.setAttribute('data-theme', 'dark')
        }else {
            var theme = "light";
            setLight();

        }

// var theme = "dark";
//   const root = document.querySelector(":root");

  function setTheme() {
    console.log('clicked')
    switch (theme) {
      case "dark":
        setLight();
        theme = "light";
        break;
      case "light":
        setDark();
        theme = "dark";
        break;
    }
  }
  function setLight() {
    // root.style.setProperty(
    //   "--bs-dark",
    //   "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
    // );
    document.documentElement.setAttribute('data-theme', 'light')    
    container.classList.remove("shadow-dark");
    setTimeout(() => {
      container.classList.add("shadow-light");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
  }
  function setDark() {
    // root.style.setProperty("--bs-dark", "#212529");
    
    document.documentElement.setAttribute('data-theme', 'dark')
    container.classList.remove("shadow-light");
    setTimeout(() => {
      container.classList.add("shadow-dark");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = sun;
  }


  function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" act", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " act";
  }

  document.querySelector(".act").click();


  const workContainers = document.querySelectorAll(".works__container");

  workContainers.forEach(workContainer => {
    workContainer.addEventListener('wheel', (event) => {
      event.preventDefault();
    
      workContainer.scrollLeft += event.deltaY;;
      // element.scrollBy({
      //   left: event.deltaY < 0 ? -30 : 30,
        
      // });
    });
  });


  const tabs = document.querySelectorAll(".tabcontent");
  tabs.forEach(tab => {
    tab.addEventListener('wheel', (event) => {
      event.preventDefault();
    
      // workContainer.scrollLeft += event.deltaY;;


      workContainers.forEach(workContainer => {      
          workContainer.scrollLeft += event.deltaY-95;
      });
    });
  })




  // for (const workContainer  in workContainers) {
  //   console.log(workContainers);
// workContainer.addEventListener('wheel', (event) => {
//   event.preventDefault();

//   workContainer.scrollLeft += event.deltaY;;
//   // element.scrollBy({
//   //   left: event.deltaY < 0 ? -30 : 30,
    
//   // });
// });
  // }
// element.addEventListener('wheel', (event) => {
//   event.preventDefault();

//   element.scrollLeft += event.deltaY;;
//   // element.scrollBy({
//   //   left: event.deltaY < 0 ? -30 : 30,
    
//   // });
// });