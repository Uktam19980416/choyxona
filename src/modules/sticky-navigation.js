function stickyNavigation() {
  const nav = document.querySelector(".header__nav");
  const header = document.querySelector(".header");
  const viewHeight = nav.getBoundingClientRect().height;
  const callBackObserver = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
  };
  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: `-${viewHeight}px`,
  };
  const observer = new IntersectionObserver(callBackObserver, options);
  observer.observe(header);
}

export default stickyNavigation;
