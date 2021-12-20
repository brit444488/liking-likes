
const likes = [9, 12, 9];
const spans = [
    document.querySelector("#box-1"),
    document.querySelector("#box-2"),
    document.querySelector("#box-3")
];

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + "like(s)";
}



