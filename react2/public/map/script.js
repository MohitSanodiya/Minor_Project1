const buildings = document.querySelectorAll('[data-img][data-info]');
const sidePanel = document.querySelector('.side-panel');
const clg_img = document.querySelector('.clg-img');
const clg_info = document.querySelector('.collage-info');
const cancel = document.querySelector('#cancel');

let lastClickedBuilding = null; // track the last clicked div

buildings.forEach(building => {
  building.addEventListener("click", () => {
    const image = building.getAttribute("data-img");
    const info = building.getAttribute("data-info");

    // if same building clicked again, close the side panel
    if (lastClickedBuilding === building && sidePanel.classList.contains("open")) {
      sidePanel.classList.remove("open");
      lastClickedBuilding = null; // reset
    } else {
      clg_img.src = image;
      clg_info.innerHTML = info;
      sidePanel.classList.add("open");
      lastClickedBuilding = building; // update
    }
  });
});

cancel.addEventListener("click", () => {
  sidePanel.classList.remove("open");
  lastClickedBuilding = null; // reset when manually closed
});
