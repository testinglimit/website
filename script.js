const pageButtons = document.querySelectorAll(".page-button");
const comicPage = document.querySelector("#comicPage");

pageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    pageButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    comicPage.src = button.dataset.page;
  });
});

const filterButtons = document.querySelectorAll(".filter-button");
const works = document.querySelectorAll(".work-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    works.forEach((work) => {
      const shouldShow = filter === "all" || work.dataset.category === filter;
      work.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
