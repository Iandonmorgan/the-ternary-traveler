/* 
This file is irrelevant until code is refactored. When I tried to implement it, the code was broken
because event listeners couldn't find classes and IDs intended.
*/


const entryInput = {
    poi() {
        const poiEntry = document.getElementById("poiEntry");
        let entryFields =
        `<div id="poiEntryFields">
        <input type="hidden" id="poiId" value="" />
        <fieldset class="entryName">
            <legend>Point of Interest</legend>
            <input type="text" name="poiName" id="poiName">
        </fieldset>
        <fieldset class="entryDescription">
            <legend>Description</legend>
            <textarea name="poiDescription" id="poiDescription" cols="48" rows="5"></textarea>
        </fieldset>
        <fieldset class="entryCost">
            <legend>Cost</legend>
            <input type="number" name="poiCost" id="poiCost" value="0.00">
        </fieldset>
        <fieldset class="entryLocation">
            <legend>Location</legend>
            <select id="poiLocation">
            </select>
        </fieldset>
        <input type="submit" id="poiEntrySubmitBtn" value="Save Point of Interest">
    </div>`;
        poiEntry.innerHTML = entryFields;
    }
}

export default entryInput;