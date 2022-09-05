// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");
function addCss(fileName) {


}
// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {


}

function doProcess (){
    elements = document.getElementsByClassName("content-with-sidemenu content-without-sidebar")[0];

   /* element.style.animation = "10s linear rainbow-bg";
    element.style.animationIterationCount = "infinite";
    document.body.appendChild(element);
*/
    element.classList.add('rainbow-bg');


    var head = document.head;
    var link = document.createElement("style");

    link.textContent = ".rainbow-bg{\n" +
        "    animation: rainbow-bg 10s linear;\n" +
        "    animation-iteration-count: infinite;\n" +
        "}\n" +
        "@keyframes rainbow-bg{\n" +
        "    100%,0%{\n" +
        "        background-color: rgba(255, 0, 0, 0.30);\n" +
        "    }\n" +
        "    8%{\n" +
        "        background-color: rgb(255,127,0, 0.30);\n" +
        "    }\n" +
        "    16%{\n" +
        "        background-color: rgb(255,255,0, 0.30);\n" +
        "    }\n" +
        "    25%{\n" +
        "        background-color: rgb(127,255,0, 0.30);\n" +
        "    }\n" +
        "    33%{\n" +
        "        background-color: rgb(0,255,0, 0.30);\n" +
        "    }\n" +
        "    41%{\n" +
        "        background-color: rgb(0,255,127, 0.30);\n" +
        "    }\n" +
        "    50%{\n" +
        "        background-color: rgb(0,255,255, 0.30);\n" +
        "    }\n" +
        "    58%{\n" +
        "        background-color: rgb(0,127,255, 0.30);\n" +
        "    }\n" +
        "    66%{\n" +
        "        background-color: rgb(0,0,255, 0.30);\n" +
        "    }\n" +
        "    75%{\n" +
        "        background-color: rgb(127,0,255, 0.30);\n" +
        "    }\n" +
        "    83%{\n" +
        "        background-color: rgb(255,0,255, 0.30);\n" +
        "    }\n" +
        "    91%{\n" +
        "        background-color: rgb(255,0,127, 0.30);\n" +
        "    }\n" +
        "}";

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