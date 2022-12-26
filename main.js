let photo = document.querySelectorAll(".photo");
let icon = document.querySelectorAll(".icon");

for (let i = 0; i < photo.length; i++) {
  console.log(photo[i]);
  photo[i].addEventListener("click", function () {
    photo[i].style.overflow = "visible";
    photo[i].style.width = "fit-content";
    for (let y = 0; y < photo.length; y++) {
      if (y != i) {
        photo[y].style.overflow = "hidden";
        photo[y].style.width = "20%";
      }
    }
  });
}
