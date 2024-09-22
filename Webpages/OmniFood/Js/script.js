
// Set Current Year
const CopyRightYear = document.querySelector(".Copy-Right-Year");
CopyRightYear.textContent = new Date().getFullYear();

// Mobile Nav Work
const BtnNav = document.querySelector(".Mobile-Nav-Button");
const HeaderEl = document.querySelector(".header");

BtnNav.addEventListener('click', function(){
  HeaderEl.classList.toggle('Nav-Open')
})

// smooth scrolling

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("Nav-Link"))
      HeaderEl.classList.toggle("nav-open");

  });
});

// Sticky Nav

const sectionHeroEl = document.querySelector(".section-Hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
