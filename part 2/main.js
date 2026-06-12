
function Like(button , className) {
    var counter = document.querySelector(className);
    var mySpan = parseInt(counter.innerText);
    var newSpan = mySpan + 1 ;
    counter.innerText = newSpan;
}