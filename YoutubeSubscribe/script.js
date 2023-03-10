const wait = ms => new Promise(r => setTimeout(r, ms));
const colors = {
    "#fff": "black",
    "#ccc": "black",
    "#000": "white"
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button.subscribe-btn").addEventListener("click", subscribeClick);
});

function setHeaderImage() {
    const headerImageElement = document.querySelector(".headerImage > img");
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "file");
    inputElement.onchange = () => {
        const selectedImageFile = inputElement.files[0];
        if (!selectedImageFile) return;
        const { size, type } = selectedImageFile;
        if (size > 0 && type.split("/")[0] === "image")
            headerImageElement.src = URL.createObjectURL(selectedImageFile);
    };
    inputElement.click();
}

function subscribeClick(e) {
    const { target } = e;
    const mode = target.getAttribute("mode");
    if (mode === "not-subscribed") {
        target.style["background-color"] = "#272727";
        target.style["color"] = "#fff";
        target.setAttribute("mode", "subscribed");
        target.innerHTML = `&nbsp;&nbsp;Abone olundu`;
        document.querySelector(".buttonsAction svg.bellSvg").innerHTML = `<svg class="bellSvg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
				class="style-scope yt-icon"
				style="fill: white; pointer-events: none; display: block; width: 25px; height: 25px; position: absolute;">
				<g class="style-scope yt-icon">
					<path
						d="M21.5 8.99992H19.5V8.80992C19.5 6.89992 18.39 5.18991 16.6 4.32991L17.47 2.52991C19.96 3.71991 21.5 6.12992 21.5 8.80992V8.99992ZM4.5 8.80992C4.5 6.89992 5.61 5.18991 7.4 4.32991L6.53 2.52991C4.04 3.71991 2.5 6.12992 2.5 8.80992V8.99992H4.5V8.80992ZM12 21.9999C13.1 21.9999 14 21.0999 14 19.9999H10C10 21.0999 10.9 21.9999 12 21.9999ZM20 17.3499V18.9999H4V17.3499L6 15.4699V10.3199C6 7.39991 7.56 5.09992 10 4.33992V3.95991C10 2.53991 11.49 1.45991 12.99 2.19991C13.64 2.51991 14 3.22991 14 3.95991V4.34991C16.44 5.09991 18 7.40991 18 10.3299V15.4799L20 17.3499Z"
						class="style-scope yt-icon"></path>
				</g>
			</svg>`;

    } else if (mode === "subscribed") {
        target.style["background-color"] = "#fff";
        target.style["color"] = "#393838";
        target.setAttribute("mode", "not-subscribed");
        target.innerHTML = "&nbsp;&nbsp;Abone ol";
        document.querySelector(".buttonsAction svg.bellSvg").innerHTML = `<svg class="bellSvg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z" class="style-scope yt-icon"></path></g></svg>`;
    }
}