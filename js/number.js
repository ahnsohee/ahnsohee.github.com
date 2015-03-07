var slideItem = document.querySelectorAll(".slide");
for(var i = 0; i < slideItem.length; i += 1) {
    var number = document.createElement("div");
    number.className = "number";
    number.innerHTML = (i + 1);
    slideItem[i].appendChild(number);
}