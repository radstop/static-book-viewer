document.body.innerHTML += `<div class="go-to-top">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-15 5 5h-4v5h-2v-5H7l5-5z"></path></svg>
  </div>`;

const btn = document.querySelector(".go-to-top");

window.onscroll = function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btn.classList.add("go-to-top--show");
  } else {
    btn.classList.remove("go-to-top--show");
  }
};

// handle scroll
btn.addEventListener("click", function () {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
