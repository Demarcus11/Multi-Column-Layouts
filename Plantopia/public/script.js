const addPlantModalDOM = document.querySelector("[data-add-plant-modal]");
const addPlantFormDOM = document.querySelector("[data-add-plant-form]");
const addPlantBtnDOM = document.querySelector("[data-add-plant-btn]");
const closeAddPlantModalBtnDOM = document.querySelector("[data-close-modal-btn]");

// Event Listeners
function handleOpenModalClick() {
  addPlantModalDOM.showModal();
}

function handleCloseModalClick() {
  addPlantModalDOM.close();
}

function handleAddPlantSubmit() {
  // Form Data API
}

addPlantBtnDOM.addEventListener("click", handleOpenModalClick);
addPlantFormDOM.addEventListener("submit", handleAddPlantSubmit);
closeAddPlantModalBtnDOM.addEventListener("click", handleCloseModalClick);
