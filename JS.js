function nextPage() {
    window.location.href = "index0.html";
}
function nextPage0() {
    window.location.href = "index1.html";
}
function nextPage1() {
    window.location.href = "index2.html";
}
function nextPage2() {
    window.location.href = "index3.html";
}
function nextPage3() {
    window.location.href = "yes.html";
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth) - 85;
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight) - 48;
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}