function lazyLoadImages() {
  const imgTargets = document.querySelectorAll("img[data-src]");
  const callBackObserverLazy = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", function () {
      entry.target.classList.remove("lazy-img");
    });
    observer.unobserve(entry.target);
  };
  const optionsLazy = {
    root: null,
    threshold: 0,
    rootMargin: "200px",
  };
  const observerLazy = new IntersectionObserver(
    callBackObserverLazy,
    optionsLazy
  );
  imgTargets.forEach((img) => observerLazy.observe(img));
}

export default lazyLoadImages;
