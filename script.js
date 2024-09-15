const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "My heart is forever yours ❤  247d udriin mend hurgey huurhunuu.";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnpseTNvNmI0N3lqZmNybTB4eTFkbmcxdnJoNjN5MXBjcmNkbzd5MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/D3Y3z4zRIRyL4B6bJd/giphy.gif";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
