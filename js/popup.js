// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");


// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: setPageBackgroundColor,
    });
});


function addStyleInHtml () {
    document.head.insertAdjacentHTML("beforeend", `<style></style>`)
}

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
    element = document.getElementsByClassName("intranet-inner")[0];

    element.style.animation = "10s linear rainbow-bg";
    element.style.animationIterationCount = "infinite";
    //element.style.backgroundColor = "red";
    document.body.appendChild(element);
}
function addCss(fileName) {

    var head = document.head;
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fileName;

    head.appendChild(link);
}

addCss('{my-url}');