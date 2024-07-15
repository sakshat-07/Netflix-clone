function toggleFAQ(element) {
  const faqBoxes = document.querySelectorAll(".faqbox");
  faqBoxes.forEach((box) => {
    if (box === element.parentElement) {
      box.classList.toggle("active");
    } else {
      box.classList.remove("active");
    }
  });
}
function changeLanguage(selectElement) {
  let selectedOption = selectElement.options[selectElement.selectedIndex].value;

  if (selectedOption === "english") {
    window.location.href = "index.html";
  } else if (selectedOption === "hindi") {
    window.location.href = "hindi.html";
  } else if (selectedOption === "अंग्रेज़ी") {
    window.location.href = "index.html";
  }
}
