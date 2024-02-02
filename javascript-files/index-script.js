function changePage1() {
    // Logic to navigate to Page 1
    window.location.href = "html-doc.html";
}

function changePage2() {
    // Logic to navigate to Page 2
    window.location.href = "css-doc.html";
}
function changePage3() {
    // Logic to navigate to Page 2
    window.location.href = "javascript-doc.html";
}
function changePage4() {
    // Logic to navigate to Page 2
    window.location.href = "dsa-doc.html";
}

function gohome() {
    window.location.href = "index.html";
}

function goblog() {
    window.location.href = "blog.html";
}
function gonotes(){
  window.location.href = "Notes.html";
}
function goquize(){
  window.location.href="Quize.html";
}
function gocontact(){
  window.location.href="contact.html";
}


//animation start here
const cities = ["Learn HTML", "Learn CSS", "Learn Javascript", "Learn DSA", "Read Blog", "Download Notes","Solve Quizes"];
let currentCityIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function type() {
  const city = cities[currentCityIndex];
  const text = isDeleting ? city.slice(0, currentCharIndex) : city.slice(0, currentCharIndex + 1);

  document.getElementById('city').textContent = text;

  if (isDeleting) {
    currentCharIndex--;
  } else {
    currentCharIndex++;
  }

  if (currentCharIndex > city.length) {
    isDeleting = true;
    setTimeout(type, 500);
  } else if (currentCharIndex < 0) {
    isDeleting = false;
    currentCityIndex = (currentCityIndex + 1) % cities.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, 100);
  }
}

// Start typing when the page loads
window.onload = type;