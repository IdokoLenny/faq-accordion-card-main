var acc = document.getElementsByTagName("h5");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    acc[i].style.fontWeight = 700;
    for (let j = 0; j < acc.length; j++) {
      acc[j].classList.remove("show_text");
      if (j != i) {
        acc[j].nextElementSibling.style.display = "none";
        acc[j].style.fontWeight = 100;
      }
    }
    this.classList.add("show_text");
    var text = this.nextElementSibling;
    if (text.style.display == "block") {
      text.style.display = "none";
      this.classList.remove("show_text");
      this.style.fontWeight = 100;
    } else {
      text.style.display = "block";
    }
  });
}
