/* ==== 
 --------- open sidebar menu at mobile devices ---------
 ==== */

(function () {
  const mediaQuery = window.matchMedia("(max-width: 767px)");

  function initSidebarToggle() {
    const toggleSidebar = document.querySelector(".toggle-sidebar");
    const sidebarMenu = document.querySelector(".sidebar");
    const mainSection = document.querySelector(".main");

    if (!toggleSidebar || !sidebarMenu || !mainSection) return;

    toggleSidebar.addEventListener("click", function () {
      toggleSidebar.classList.toggle("toggle-sidebar-active");
      sidebarMenu.classList.toggle("sidebar-active");
      mainSection.classList.toggle("main-active");
    });
  }

  if (mediaQuery.matches) {
    initSidebarToggle();
  }
})();


// billing tab
document.addEventListener("DOMContentLoaded", function () {

  const tabContainer = document.querySelector(".billing__tab");
  if (!tabContainer) return;

  const tabs = document.querySelectorAll(".billing__tab-single");
  const buttons = document.querySelectorAll(".billing-tab-btn");

  if (tabs.length > 0) {
    tabs[0].classList.add("active");
  }

  buttons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      buttons.forEach(btn => btn.classList.remove("active"));

      tabs.forEach(tab => tab.classList.remove("active"));

      this.classList.add("active");
      const target = document.querySelector(this.dataset.target);
      if (target) {
        target.classList.add("active");
      }
    });
  });

});
