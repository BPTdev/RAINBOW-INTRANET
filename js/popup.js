// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");
function addCss(fileName) {


}
// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {


}

function doProcess (){
    element = document.getElementsByClassName("content-with-sidemenu content-without-sidebar")[0];

    element.style.animation = "10s linear rainbow-bg";
    element.style.animationIterationCount = "infinite";
    //element.style.backgroundColor = "red";
    document.body.appendChild(element);
   


    var head = document.head;
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "https://raw.githubusercontent.com/BPTdev/RAINBOW-INTRANET/main/css/rainbow-smoothed.css";

    head.appendChild(link);
}

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: doProcess,
    });
});