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
