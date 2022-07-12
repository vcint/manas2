//booking form view and hide
document.querySelector('.form12').setAttribute("class","form12 hidden");

document.querySelector(".btn").addEventListener("click",btnclick);

function btnclick(){
    document.querySelector('.form12').removeAttribute("class","hidden");
}

//For mobile hamburger menu
if (window.matchMedia("(max-width: 992px)").matches){
    document.querySelector('.navnet').setAttribute("class","navbar-nav navspace navnet collapse ");
  }
  else{
    document.querySelector('.navnet').setAttribute("class","navbar-nav navspace navnet ");
  }

  //For Logo Click Action
document.querySelector(".navlogo").addEventListener("click",logoRedirect);
function logoRedirect(){
 window.location="#";
}


