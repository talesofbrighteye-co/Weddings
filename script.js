
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  window.addEventListener("scroll", () => {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 40);
  }, {passive:true});

  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
  }

  const slides = [...document.querySelectorAll(".hero-slide")];
  const progress = document.querySelector(".hero-progress span");
  if (slides.length) {
    let index = 0;
    const interval = 6000;
    const showSlide = next => {
      slides[index].classList.remove("active");
      index = (next + slides.length) % slides.length;
      slides[index].classList.add("active");
      if (progress) {
        progress.style.animation = "none";
        void progress.offsetWidth;
        progress.style.animation = `progress ${interval}ms linear`;
      }
    };
    showSlide(0);
    let timer = setInterval(() => showSlide(index + 1), interval);
    document.addEventListener("visibilitychange", () => {
      clearInterval(timer);
      if (!document.hidden) timer = setInterval(() => showSlide(index + 1), interval);
    });
  }

  const form = document.querySelector("#enquiry-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const d = new FormData(form);
      const message = [
        "Hi Tales of Brighteye,",
        "",
        `Name: ${d.get("name") || ""}`,
        `Email: ${d.get("email") || ""}`,
        `Phone: ${d.get("phone") || ""}`,
        `Collection: ${d.get("collection") || ""}`,
        `Wedding Date: ${d.get("date") || ""}`,
        `Location: ${d.get("location") || ""}`,
        `Message: ${d.get("message") || ""}`
      ].join("\n");
      window.open("https://wa.me/917619586265?text=" + encodeURIComponent(message), "_blank");
    });
  }
});
