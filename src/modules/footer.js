function footer() {
  const copyright = document.querySelector("#copyright");
  const year = new Date().getFullYear();
  copyright.innerHTML = `&copy; ${year} by Choyxona. Proudly created by <a href="#" class="footer__text-link">Uktamjon</a> <br> All rights reserved.`;
}

export default footer;
