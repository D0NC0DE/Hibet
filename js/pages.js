function demoall() {
    document.getElementById("pageall").style.display = "block";
    document.getElementById("pagesoccer").style.display= "none";
    document.getElementById("pagebasket").style.display = "none";
    document.getElementById("pagecricket").style.display = "none";
    document.getElementById("pageform").style.display = "none";
  }
  
function demosoccer() {
    document.getElementById("pageall").style.display = "none";
    document.getElementById("pagesoccer").style.display = "block";
    document.getElementById("pagebasket").style.display = "none";
    document.getElementById("pagecricket").style.display = "none";
    document.getElementById("pageform").style.display = "none";
  }

function demobasket() {
    document.getElementById("pageall").style.display = "none";
    document.getElementById("pagesoccer").style.display= "none";
    document.getElementById("pagebasket").style.display = "block";
    document.getElementById("pagecricket").style.display = "none";
    document.getElementById("pageform").style.display = "none";
  }
  
function democricket() {
    document.getElementById("pageall").style.display = "none";
    document.getElementById("pagesoccer").style.display = "none";
    document.getElementById("pagebasket").style.display = "none";
    document.getElementById("pagecricket").style.display = "block";
    document.getElementById("pageform").style.display = "none";
  }

function democbet() {
  document.getElementById("pageall").style.display = "none";
  document.getElementById("pagesoccer").style.display = "none";
  document.getElementById("pagebasket").style.display = "none";
  document.getElementById("pagecricket").style.display = "none";
  document.getElementById("pageform").style.display = "block";
}

function demoClose() {
  document.getElementById("pageall").style.display = "block";
  document.getElementById("pageform").style.display = "none";
}

function demoMyAccount() {
  var x = document.getElementById('userinfo');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}