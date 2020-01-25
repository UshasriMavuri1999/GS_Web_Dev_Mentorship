function slide() {
    // document.querySelector('#menu-hide').className = "active" ? "hide": "active";
    var menu=document.querySelector('#menu-active');
    var menu2=document.querySelector('#menu-hide');
    if(menu.className=="hide"){
      menu.className="active";
      menu2.className="hide";
      // var x = document.querySelector('#menu-hide').children[0].src = "./images/close.png";
    }
    else{
      menu.className="hide";
      menu2.className="active";
      // var x = document.querySelector('#menu-hide').children[0].src = "./images/menuIcon.png";
    }
}
function pageRedirect() {
        window.location.replace("https://www.tutorialrepublic.com/");
    }
function direct() {
setTimeout("pageRedirect()", 1000);  
}
