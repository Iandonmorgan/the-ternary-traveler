import API from './data.js';
import parsedEntries from './entriesDOM.js';

const poiEntriesBtnListener = document.getElementById("dataDisplay")

const entryMutate = {
    eventListener() {
        poiEntriesBtnListener.addEventListener("click", (event) => {
            if (event.target.id.startsWith("deleteEntry--")) {
                const entryId = event.target.id.split("--")[1]
                let question = confirm("Are you sure you want to delete this entry?");
                if (question == true) {
                    API.deletePOIEntry(entryId)
                    .then(API.getLocations)
                    .then(parsedEntries.renderLocations)
                    .then(API.getPOIEntries)
                    .then(parsedEntries.renderPOIs);
                } 
            } else if (event.target.id.startsWith("editEntry--")) {
                const entryTargetId = parseInt(event.target.id.split("--")[1]);
                API.editPOIEntry(entryTargetId).then(entry => {
                    const entryID = document.getElementById("poiId");
                    const entryName = document.getElementById("poiName");
                    const entryDescription = document.getElementById("poiDescription");
                    const entryCost = document.getElementById("poiCost");
                    const entryReview = document.getElementById("poiReview");
                    const entryLocation = document.getElementById("poiLocation");
                    entryID.value = entry.id;
                    entryName.value = entry.name;
                    entryDescription.value = entry.description;
                    entryCost.value = entry.cost;
                    entryReview.value = entry.review;
                    entryLocation.value = entry.placeId;
                    if (document.getElementById("poiEntrySubmitBtn") !== null) {
                        document.getElementById("poiEntrySubmitBtn").value = "Update Point of Interest";
                        document.getElementById("poiEntrySubmitBtn").id = "poiEntryUpdateBtn";
                    }
                });
            }
        })
    }
}

export default entryMutate;