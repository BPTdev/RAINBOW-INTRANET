// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");
// Initialize variables
let classes = ["fc-event-bg", "fc-event-head"]
let url= "https://intranet.cpnv.ch/etudiants/benoit_pierrehumbert/agenda";
let timeToWait = 4000
function doProcess (){

    style = ".rainbow-bg{\n" +
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
    var head = document.head;
    var link = document.createElement("style");


    link.textContent = style;
    head.appendChild(link);





    //cunt the number of lines in the array to determine what do with the content or the classes array
    if (classes.count===1)
    {
        elements = document.getElementsByClassName("fc-event-bg");
    }else
    {
        //for each element in the array classes, get his element by class name
        Array.from(classes).forEach(oneClass => {
            console.log(oneClass)
            elements.push(document.getElementsByClassName(oneClass))
        });

    }


//for each element in the array elements, put the rainbow-bg class name in his dom element
    Array.from(elements).forEach(element => {
        console.log(element)
        element.classList.add('rainbow-bg');

    });


}
function waitForPageLoad() {
alert("ddaf");

}

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    newpage = chrome.tabs.create({ url: url });
    newpage.addEventListener("DOMContentLoaded", async () => {alert("ddaf");})
    /*
      chrome.scripting.executeScript({
             target: { tabId: tab.id },
             func: waitForPageLoad,
         });
    */
});