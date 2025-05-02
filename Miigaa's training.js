document.addEventListener("DOMContentLoaded", () => {
    // 1. Menu toggle
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    menuIcon?.addEventListener('click', () => {
      navbar?.classList.toggle('active');
    });
  
    // 2. Scroll effect
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
});
function calculateBMR() {
  const gender = document.getElementById("gender").value;
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseInt(document.getElementById("age").value);

if (isNaN(weight) || isNaN(height) || isNaN(age)) {
  document.getElementById("bmr-result").innerText = "= Бүх талбарыг бөглөнө үү!";
  return;
}

let bmr = 0;

if (gender === "male") {
  bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
} else {
  bmr = 655 + (9.6 * weight) + (1.7 * height) - (4.7 * age);
}

document.getElementById("bmr-result").innerText = `= ${Math.round(bmr)} ккал/өдөр`;
}

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

