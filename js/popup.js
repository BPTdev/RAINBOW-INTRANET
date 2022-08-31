// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
    changeColor.style.backgroundColor = color;
});

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
    chrome.storage.sync.get("color", ({ color }) => {
        var x = document.getElementsByClassName("fc-agenda-days fc-border-separate")

    });
    let dynamicStyles = null;

    function addAnimation(body) {
        if (!dynamicStyles) {
            dynamicStyles = document.createElement('style');
            dynamicStyles.type = 'text/css';
            document.head.appendChild(dynamicStyles);
        }

        dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
    }

    addAnimation(`
      @keyframes rainbow-bg{
    100%,0%{
        background-color: rgb(255,0,0);
    }
    8%{
        background-color: rgb(255,127,0);
    }
    16%{
        background-color: rgb(255,255,0);
    }
    25%{
        background-color: rgb(127,255,0);
    }
    33%{
        background-color: rgb(0,255,0);
    }
    41%{
        background-color: rgb(0,255,127);
    }
    50%{
        background-color: rgb(0,255,255);
    }
    58%{
        background-color: rgb(0,127,255);
    }
    66%{
        background-color: rgb(0,0,255);
    }
    75%{
        background-color: rgb(127,0,255);
    }
    83%{
        background-color: rgb(255,0,255);
    }
    91%{
        background-color: rgb(255,0,127);
    }
}
    `);



//______________________________________________________________________________________________________________________
    element = document.getElementsByClassName("fc-agenda-days fc-border-separate")
    element.style.animationIterationCount = "infinite";
    element.style.animation = "2.5s linear rainbow-bg";

    document.body.appendChild(element);
}
