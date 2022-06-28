// Get slider items Array.from[Es6 Feature]
const sliderImage = Array.from(
  document.querySelectorAll(".slider_container img")
);
// get number of slides
const slidesCount = sliderImage.length;

// set current slide
let currentSlide = 1;

// slide element
const slideNumberElement = document.getElementById("slid_number");

// previous and next buttons
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

//handle click on previous and next buttons
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

// create the main ul element
const paginationElement = document.createElement("ul");

//set Id on created ul element
paginationElement.setAttribute("id", "pagination-ul");

for (let i = 1; i <= slidesCount; i++) {
  const paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationItem.appendChild(document.createTextNode(i));
  paginationElement.appendChild(paginationItem);
}
document.getElementById("indecators").appendChild(paginationElement);

const paginationCreatedUl = document.getElementById("pagination-ul");
const paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);
////
function theChecker() {
  slideNumberElement.textContent =
    "slide #" + currentSlide + " of " + slidesCount;
  removeAllActive();
  sliderImage[currentSlide - 1].classList.add("active");
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");
}
theChecker();
///
for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = () => {
    currentSlide = i + 1;
    theChecker();
  };
}
function nextSlide() {
  if (nextBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}
function prevSlide() {
  if (prevBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

//remove all active class
function removeAllActive() {
  sliderImage.forEach((img) => {
    img.classList.remove("active");
  });
  paginationBullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
  if (currentSlide == 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
  if (currentSlide == slidesCount) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}
