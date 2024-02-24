const ratings = document.querySelectorAll(".rating");
const submit = document.getElementById("submit");
const numberRating = document.getElementById("number-rating");
const ratingInput = document.querySelector(".rating-input");
const result = document.querySelector(".result");

ratings.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    rating.style.backgroundColor = "hsl(25, 97%, 53%)";
    rating.style.color = "white";

    numberRating.textContent = `You selected ${rating.textContent} out of 5`;
    submit.onclick = () => {
      result.style.display = "flex";
      ratingInput.style.display = "none";
    };
  });
});
