function toggleDislike(element) {
    var id = element.id;
    var test = id.substr(3, id.length)
    var likeId = "#" + test;
    var likeButton = document.querySelector(likeId);
    element.classList.add("colorToggle")
    likeButton.classList.remove("colorToggle")
}

function toggleLike(element) {
    var id = element.id;
    var dislikeId = "#dis" + id;
    var dislikeButton = document.querySelector(dislikeId);
    element.classList.add("colorToggle")
    dislikeButton.classList.remove("colorToggle")
}

function burgermenu() {
    element = document.querySelector(".burger");
    element.classList.toggle("burger-js");
}
