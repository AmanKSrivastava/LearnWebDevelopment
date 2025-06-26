let textArea = document.querySelector("#input-text");
let liveText = "";

textArea.addEventListener("input", (e) => {
  console.log(e);
  liveText = e.target.value;
  console.log(liveText.trim().length);
  let outputArea = document.querySelector(".output-text p");
  outputArea.textContent =
    liveText.trim().length > 0
      ? liveText.charAt(0).toUpperCase() + liveText.slice(1)
      : "";
  let counter = document.querySelector(".text-count span");
  counter.textContent = liveText.trim().length;
});
