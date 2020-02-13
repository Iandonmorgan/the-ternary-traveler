import entryHTML from './entryComponent.js';

/* 
Code that is responsible for modifying the display part of DOM.
*/

const dataDisplay = document.getElementById("dataDisplay");
const poiLocationOptions = document.getElementById("poiLocation");

const parsedEntries = {
    renderLocationOptions(entries) {
        let locationHTML = "";
        entries.forEach(entry => {
            locationHTML += entryHTML.createLocationOptions(entry);
        })
        poiLocationOptions.innerHTML = locationHTML;
        parsedEntries.renderLocations(entries);
    },
    clearLocationOption() {
        document.getElementById("poiLocation").value = ""
    },
    renderLocations(entries) {
        let locationDisplayHTML = "";
        dataDisplay.innerHTML = "";
        entries.forEach(entry => {
            locationDisplayHTML += entryHTML.createLocations(entry);
        })
        dataDisplay.innerHTML += locationDisplayHTML;
    },
    renderPOIs(entries) {
        entries.forEach(entry => {
            const outputLoc = document.getElementById(`locDisplay_${entry.placeId}`);
            outputLoc.innerHTML += entryHTML.createPOIEntryHTML(entry);
        })
        // console.log(entries);
    }
}

export default parsedEntries;