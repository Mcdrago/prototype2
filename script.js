/* typing */
const words = [
  "Junior Accountant",
  "ACCA Student",
  "Xero Specialist",
  "Video Editor"
];

let i = 0;
let j = 0;
let deleting = false;

const el = document.querySelector(".typing");

function type() {
  let word = words[i];

  if (!deleting) j++;
  else j--;

  el.textContent = word.substring(0, j);

  if (!deleting && j === word.length) {
    deleting = true;
    setTimeout(type, 1200);
    return;
  }

  if (deleting && j === 0) {
    deleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, deleting ? 50 : 90);
}

type();

/* reveal */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});
