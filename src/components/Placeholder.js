export default function setPlaceholder() {
    let placeHolderTemplate = `
        <div class="placeholder">
            <div class="animatedBg animatedBg__small"></div>
            <div class="animatedBg animatedBg__large"></div>
            <div class="animatedBg animatedBg__med"></div>
        </div>
        <div class="placeholder">
            <div class="animatedBg animatedBg__small"></div>
            <div class="animatedBg animatedBg__large"></div>
            <div class="animatedBg animatedBg__med"></div>
        </div>
    `;

    document.querySelector(".container .loading").innerHTML = placeHolderTemplate;
    document.querySelector(".container .post").innerHTML = "";

    return true;
}