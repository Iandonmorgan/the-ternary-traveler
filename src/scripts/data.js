/* 
Code that deals with getting the data.
*/

const locationApiUrl = "http://localhost:8088/places";
const dataApiUrl = "http://localhost:8088/interests";

const API = {
    getLocations() {
        return fetch(locationApiUrl).then(entries => entries.json());
    },
    getPOIEntries() {
        return fetch(dataApiUrl + "?_expand=place").then(entries => entries.json());
    },
    savePOIEntry(entry) {
        return fetch(dataApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    },
    deletePOIEntry(entry){
        return fetch(`${dataApiUrl}/${entry}`, {
            method: "DELETE"
        });
    },
    editPOIEntry(entry){
        return fetch(dataApiUrl + "/" + entry).then(entry => entry.json());
    },
    updatePOIEntry(entry){
        return fetch(`${dataApiUrl}/${entry.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        });
    }
}

export default API;