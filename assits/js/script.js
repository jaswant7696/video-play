
let btnE1 = document.querySelector(".btn")
let trailercontainerE1 = document.querySelector(".trailer-container")
let  closeiconE1 = document.querySelector(".colse-btn")
let videoEl = document.querySelector(".video")

btnE1.addEventListener("click", () => {
    trailercontainerE1.classList.add("active");
  });
  
  closeiconE1.addEventListener("click", () => {
    trailercontainerE1.classList.remove("active");
    videoEl.pause();
    videoEl.currentTime = 0;
  });