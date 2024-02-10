const id = document.getElementById("id");
const advice = document.querySelector(".advice");
const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const body = await response.json();

  id.textContent = body.slip.id;
  advice.textContent = `"${body.slip.advice}"`;
});
