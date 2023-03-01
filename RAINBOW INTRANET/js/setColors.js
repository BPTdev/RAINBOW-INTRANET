    setTimeout(doIt, 1000);
//when a click is detected on a "fc-button-inner" element, the function doIt is called
    document.addEventListener('click', function(e) {
        if (e.target.className === 'fc-button') {
            setTimeout(doIt, 1000);
        }
    }, false);
function doIt() {
    // Initialize button with user's preferred color
    let changeColor = document.getElementById("changeColor");
    // Initialize variables
    let classes =  JSON.parse(localStorage.getItem("RB.classes"));
    //let classes = ["fc-event-bg", "fc-event-head"]
    // Initialize elements array
    let elements = [];
    //Initialize debug
    let debug;


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

//put the number of element in classes array in the variable totalclasses
    totalclasses = classes.length;




    classes.forEach(className => {
        const elements = document.getElementsByClassName(className);
        makeitrainbow(elements);
    });



    function makeitrainbow(elements) {
        Array.from(elements).forEach(element => {
            console.log(element)
            element.classList.add('rainbow-bg');

        });
    }


}