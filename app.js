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

nextBtn.addEventListener("click", (type) => startSlider());

prevBtn.addEventListener("click", (type) => startSlider("prev"));

const startSlider = (type) => {
  const current = document.querySelector(".current");
  const last = document.querySelector(".last");
  let next = current.nextElementSibling;
  console.log(next);
  if (!next) {
    next = container.firstElementChild;
  }
  current.classList.remove("current");
  next.classList.remove("next");
  last.classList.remove("last");
  console.log(current);

  if (type === "prev") {
    current.classList.add("next");
    last.classList.add("current");
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove("next");
    next.classList.add("last");
    return;
  }

  current.classList.add("last");
  next.classList.add("current");
  last.classList.add("next");
};
