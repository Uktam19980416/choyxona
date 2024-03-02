function activateNavLinks() {
  const nav = document.querySelector(".header__nav");
  const handleHover = function (e) {
    if (e.target.classList.contains("header__nav-link")) {
      const link = e.target;
      const siblings = link
        .closest(".header__nav")
        .querySelectorAll(".header__nav-link");
      const logo = link.closest(".header").querySelector(".header__logo-text");
      siblings.forEach((sibling) => {
        if (sibling !== link) sibling.style.opacity = this;
      });
      logo.style.opacity = this;
    }
  };
  nav.addEventListener("mouseover", handleHover.bind(0.5));
  nav.addEventListener("mouseout", handleHover.bind(1));
}

export default activateNavLinks;