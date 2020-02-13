import entryInput from "./formDOM.js";
import parsedEntries from "./entriesDOM.js";
import API from "./data.js";
import entryHTML from "./entryComponent.js";
import entryMutate from "./mutateEntries.js";

const saveButton = document.getElementById("poiEntrySubmitBtn");

const poiEntry = (id, name, description, cost, review, place) => ({
    "id": id,
    "name": name,
    "description": description,
    "cost": cost,
    "review": review,
    "placeId": place
})

const captureInputData = () => {
    const poiIdField = document.getElementById("poiId");
    const poiNameField = document.getElementById("poiName");
    const poiDescriptionField = document.getElementById("poiDescription");
    const poiCostField = document.getElementById("poiCost");
    const poiReviewField = document.getElementById("poiReview");
    const poiLocationField = document.getElementById("poiLocation");

    const poiEntryData = poiEntry(parseInt(poiIdField.value), poiNameField.value, poiDescriptionField.value, poiCostField.value, poiReviewField.value, parseInt(poiLocationField.value));
    if (poiEntryData.name !== "" && poiEntryData.description !== "") {
        if (event.target.id === "poiEntrySubmitBtn") {
            API.savePOIEntry(poiEntryData)
            .then(API.getLocations)
            .then(parsedEntries.renderLocations)
            .then(API.getPOIEntries)
            .then(parsedEntries.renderPOIs);
        } else if (event.target.id === "poiEntryUpdateBtn") {
            API.updatePOIEntry(poiEntryData)
            .then(API.getLocations)
            .then(parsedEntries.renderLocations)
            .then(API.getPOIEntries)
            .then(parsedEntries.renderPOIs);
        }
    } else {
        window.alert("Please complete all required fields in the form prior to submitting.");
    }
    API.getPOIEntries().then(parsedEntries.renderPOIs);
    entryHTML.clearPOIForm();
}

API.getLocations().then(parsedEntries.renderLocationOptions).then(parsedEntries.clearLocationOption);
API.getPOIEntries().then(parsedEntries.renderPOIs);

saveButton.addEventListener("click", captureInputData);


entryMutate.eventListener();