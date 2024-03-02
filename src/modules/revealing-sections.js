function revealingSections() {
  const allSections = document.querySelectorAll(".main__content");
  const callBackObserverReveal = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  };
  const optionsReveal = {
    root: null,
    threshold: 0.15,
  };
  const observerReveal = new IntersectionObserver(
    callBackObserverReveal,
    optionsReveal
  );
  allSections.forEach((section) => {
    observerReveal.observe(section);
    section.classList.add("section--hidden");
  });
}

export default revealingSections;