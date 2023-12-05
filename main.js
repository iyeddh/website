const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesbtn = document.querySelector(".yes-btn");
const nobtn = document.querySelector(".no-btn");

yesbtn.addEventListener("click", () => {
  question.innerHTML = "ahhhhhhhhhh. 7ata na n7ebek ya hob galbi ";
  gif.src = "https://goodmorning-images.com/wp-content/uploads/2023/09/I-Love-You-Gif-5.gif";
});

nobtn.addEventListener("mouseover", () => {
  const noBtnRect = nobtn.getBoundingClientRect();
  const maxY = window.innerHeight - noBtnRect.height;
  const maxX = window.innerWidth - noBtnRect.width;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  nobtn.style.left = randomX + "px";
  nobtn.style.top = randomY + "px";
});
nobtn.addEventListener("click",() =>{
  window.location.href="secondpage.html";
});
