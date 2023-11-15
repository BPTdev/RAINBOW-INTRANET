chrome.storage.sync.get('delay', function(data) {
    let delay = data.delay ? parseInt(data.delay) : 1000; // Utiliser 1000 ms par défaut
    setTimeout(doIt, delay);
});

function doIt() {
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

    function makeitrainbow(elements, title) {
        Array.from(elements).forEach(element => {
            element.classList.add('rainbow-bg');
            if (title) {
                element.setAttribute('title', title); // Ajoute un attribut title à l'élément
            }
        });
    }
    
    // Code pour récupérer les classes et appliquer l'animation
chrome.storage.sync.get('rainbowClasses', function(data) {
    let rainbowClasses = data.rainbowClasses;
    console.log(rainbowClasses);
    if (rainbowClasses) {
        rainbowClasses.forEach(function(item) {
            let elements = document.getElementsByClassName(item.className);
            makeitrainbow(elements, item.classTitle);
        });
    }
});



}