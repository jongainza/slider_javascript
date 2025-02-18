import people from "./data.js";
import get from "./utils/getElement.js";

const container = get(".slide-container");
const prevBtn = get(".prev-btn");
const nextBtn = get(".next-btn");

container.innerHTML = people
  .map((person, index) => {
    const { img, name, job, text } = person;

    let position = "next";
    if (index === 0) {
      position = "current";
    }
    if (index === people.length - 1) {
      position = "last";
    }

    return `<article class="slide ${position}" data-id=${index}><img src="${img}" alt="${name}" class="img" />
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">
            ${text}
          </p>
          <div class="quote-icon">
            <div class="fa fa-quote-right"></div>
          </div></article>`;
  })
  .join("");

let slides = [...document.querySelectorAll(".slide")];

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function nextSlide() {
  let currentIndex = slides.findIndex((person) =>
    person.classList.contains("current")
  );
  slides[currentIndex].classList.remove("current");
  if (currentIndex === people.length - 1) {
    slides[0].classList.add("current");
  } else {
    slides[currentIndex + 1].classList.add("current");
  }
}
function prevSlide() {
  let currentIndex = slides.findIndex((person) =>
    person.classList.contains("current")
  );
  slides[currentIndex].classList.remove("current");
  if (currentIndex === 0) {
    slides[people.length - 1].classList.add("current");
  } else {
    slides[currentIndex - 1].classList.add("current");
  }
}
