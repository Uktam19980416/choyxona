import loader from "./modules/loader";
import footer from "./modules/footer";
import lazyLoadImages from "./modules/lazy-load-images";
import revealingSections from "./modules/revealing-sections";
import stickyNavigation from "./modules/sticky-navigation";
import slider from "./modules/slider";
import activateNavLinks from "./modules/activate-nav-links";

window.addEventListener("DOMContentLoaded", () => {
  loader();
  footer();
  lazyLoadImages();
  revealingSections();
  stickyNavigation();
  slider();
  activateNavLinks();
});
