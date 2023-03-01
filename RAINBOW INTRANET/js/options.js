var colors = JSON.parse(localStorage.getItem("RB.classes"));
if (colors) {
    document.getElementById("class-input").defaultValue = colors.join(",");
}

function saveClasses() {
    // Get the value of the input field and split it into an array of colors
    let classes = document.getElementById("class-input").value.split(",");
    // Save the array in the local storage
    localStorage.setItem("RB.classes", JSON.stringify(classes));
}