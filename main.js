


let link = document.querySelector(".menu_link1");


let review = document.getElementById("review");


function handleButtonClick() {
  review.scrollIntoView({behavior: "smooth" });
}

link.addEventListener("click", handleButtonClick);
