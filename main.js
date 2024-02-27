document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector) => document.querySelector(selector);

  const body = $("body");
  const card = $(".card");

  const { width, height } = body.getBoundingClientRect();
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  body.addEventListener("mousemove", (e) => {
    card.style.transition = `none`;
    
    const { offsetX, offsetY } = e;

    const rotationX = ((offsetX - halfWidth) / halfWidth) * 10;
    const rotationY = ((offsetY - halfHeight) / halfHeight) * 10;

    card.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  });

  body.addEventListener('mouseleave', () => {
    card.style.transition = `transform 0.5s ease-in-out`;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
});
