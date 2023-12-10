


let link = document.querySelector(".menu_link1");


let review = document.getElementById("review");
let revews = document.querySelector(".reviews-wrap");


function handleButtonClick() {
  review.scrollIntoView({behavior: "smooth" });

}



link.addEventListener("click", handleButtonClick);
