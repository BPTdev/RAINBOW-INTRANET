
let url= "https://intranet.cpnv.ch/etudiants/benoit_pierrehumbert/agenda";




// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    newpage = chrome.tabs.create({ url: url });

    newpage.addEventListener("DOMContentLoaded", async () => {alert("ddaf");})
});