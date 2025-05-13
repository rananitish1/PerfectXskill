function navigateTo(page) {
  window.location.href = page;
}

document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const initialSpan = document.getElementById('userInitial');

  if (initialSpan && currentUser && currentUser.username) {
    const firstLetter = currentUser.username.charAt(0).toUpperCase();
    initialSpan.innerText = firstLetter;
  }

  const description = document.getElementById("description");
  const readMoreBtn = document.getElementById("readMoreBtn");
  const fullText = description.innerText;
  const shortText = fullText.slice(0, 100) + "...";

  description.innerText = shortText;

  readMoreBtn.addEventListener("click", function () {
    if (description.innerText === shortText) {
      description.innerText = fullText;
      readMoreBtn.innerText = "Read Less";
    } else {
      description.innerText = shortText;
      readMoreBtn.innerText = "Read More";
    }
  });
});
