chrome.storage.sync.get('delay', function(data) {
    let delay = data.delay ? parseInt(data.delay) : 1000; // Utiliser 1000 ms par défaut
    setTimeout(doIt, delay);
});

function doIt() {
    function updateRainbowStyle(opacity = 0.3) {
        let style = ".rainbow-bg{\n" +
            "    animation: rainbow-bg 10s linear;\n" +
            "    animation-iteration-count: infinite;\n" +
            "}\n" +
            "@keyframes rainbow-bg{\n" +
            "    100%,0%{\n" +
            `        background-color: rgba(255, 0, 0, ${opacity});\n` +
            "    }\n" +
            "    8%{\n" +
            `        background-color: rgba(255, 127, 0, ${opacity});\n` +
            "    }\n" +
            "    16%{\n" +
            `        background-color: rgba(255, 255, 0, ${opacity});\n` +
            "    }\n" +
            "    25%{\n" +
            `        background-color: rgba(127, 255, 0, ${opacity});\n` +
            "    }\n" +
            "    33%{\n" +
            `        background-color: rgba(0, 255, 0, ${opacity});\n` +
            "    }\n" +
            "    41%{\n" +
            `        background-color: rgba(0, 255, 127, ${opacity});\n` +
            "    }\n" +
            "    50%{\n" +
            `        background-color: rgba(0, 255, 255, ${opacity});\n` +
            "    }\n" +
            "    58%{\n" +
            `        background-color: rgba(0, 127, 255, ${opacity});\n` +
            "    }\n" +
            "    66%{\n" +
            `        background-color: rgba(0, 0, 255, ${opacity});\n` +
            "    }\n" +
            "    75%{\n" +
            `        background-color: rgba(127, 0, 255, ${opacity});\n` +
            "    }\n" +
            "    83%{\n" +
            `        background-color: rgba(255, 0, 255, ${opacity});\n` +
            "    }\n" +
            "    91%{\n" +
            `        background-color: rgba(255, 0, 127, ${opacity});\n` +
            "    }\n" +
            "}";
    
        var head = document.head;
        var link = document.createElement("style");
        link.textContent = style;
        head.appendChild(link);
    }

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


// Récupérer l'opacité lors du chargement
chrome.storage.sync.get('opacity', function(data) {
    let opacity = data.opacity ? data.opacity : 0.30; // Utiliser 0.30 par défaut
    updateRainbowStyle(opacity);
});



}