function Like(){
    var counter = document.querySelector(".likeCount");
    var mySpan = parseInt(counter.innerText);
    var newSpan = mySpan + 1 ;
    counter.innerText = newSpan;
}