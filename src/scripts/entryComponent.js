/* 
Code that is responsible for creating the locations and POI entry HTML components.
*/

const htmlCreate = (htmlType, input, classes) => {
    return `<${htmlType} class="${classes}">${input}</${htmlType}>`
}

const entryHTML = {
    createLocations(entry) {
        return `
        <div class=displayLocations>
            <h1>${entry.name}</h1>
            <div id="locDisplay_${entry.id}">
            </div>
        </div>
        `
    },
    createPOIEntryHTML(entry) {
        return `
            <div class="poiEntries">
            ${htmlCreate("h3", entry.name, "entryName")}
            ${htmlCreate("div", entry.description, "entryDescription")}
            <div class="costReview">
            ${htmlCreate("p", entry.cost, "entryCost")}
            ${htmlCreate("p", entry.review, "entryReview")}
            </div>
            <button id="editEntry--${entry.id}" class="editBtn">Edit</button>
            <button id="deleteEntry--${entry.id}" class="deleteBtn">Delete</button>
            </div>
            `
    },
    createLocationOptions(entry) {
        return `
            <option value="${entry.id}" label="${entry.name}"></option>
            `
    },
    clearPOIForm() {
        document.getElementById("poiId").value = "";
        document.getElementById("poiName").value = "";
        document.getElementById("poiDescription").value = "";
        document.getElementById("poiCost").value = "";
        document.getElementById("poiLocation").value = "";
        document.getElementById("poiReview").value = "";
    }
}

export default entryHTML;