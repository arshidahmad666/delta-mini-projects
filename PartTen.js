//Q..input element only acepts A-Z,a-z letters and space ,not any other char

document.addEventListener("DOMContentLoaded", function () {
  let h2 = document.querySelector("h2");
  let inp = document.getElementById("nameInput");

  inp.addEventListener("input", function (event) {
    let value = event.target.value;
    // Remove any non-letter characters expect spaces
    value = value.replace(/[^A-Za-z\s]/g, "");
    // Update input value with only letters and spaces
    event.target.value = value;
    // Update h2 text
    h2.innerText = value;
  });
});
