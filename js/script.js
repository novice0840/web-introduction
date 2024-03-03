const $visitorBook = document.querySelector(".visitor-book");
const $submitButton = document.querySelector(".submit-button");

$submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData($visitorBook);
  alert(`${formData.get("name")}님, 저와 취향이 ${formData.getAll("movie").length}개 같으시네요!`);
});
