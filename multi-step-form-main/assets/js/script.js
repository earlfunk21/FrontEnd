/** @format */

const steps = document.querySelectorAll(".steps");
const nextBtns = document.querySelectorAll(".nextBtn");
const backBtns = document.querySelectorAll(".backBtn");
const items = document.querySelectorAll(".items");

let currStep = 0;

const addsOnCards = document.querySelectorAll(".adds-on__card");

addsOnCards.forEach((element) => {
  element.firstElementChild.addEventListener("change", () =>
    element.classList.toggle("active", this.checked)
  );
});

const updateStep = (step) => {
  if (step < 0 && currStep === 0) return;
  if (step > 0 && currStep === steps.length - 1) return;
  currStep += step;
  steps.forEach((element, index) => {
    element.dataset.stepsValue = index === currStep ? "show" : "hide";
  });
  items.forEach((element, index) => {
    element.firstElementChild.classList.toggle("active", index === currStep);
  });
};

nextBtns.forEach((element) =>
  element.addEventListener("click", () => updateStep(1))
);
backBtns.forEach((element) =>
  element.addEventListener("click", () => updateStep(-1))
);
