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

function changeContent(content_id) {
    // Get the innerHTML of the target content element
    var newContent = document.getElementById(content_id).innerHTML;
    var myNode = document.getElementById("main_id");
    myNode.style.display = "none";

    // Set the innerHTML of the main_id element to the new content
    document.getElementById("b-body").innerHTML = newContent;
}

function gohome(){
    window.location.href="index.html";
}

function goblog(){
    window.location.href="blog.html";
}

function gonotes(){
    window.location.href="Notes.html";
}

function goquize(){
    window.location.href="Quize.html";
}
function gocontact(){
    window.location.href="contact.html";
}