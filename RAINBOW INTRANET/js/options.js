document.getElementById('addClassButton').addEventListener('click', function() {
    let className = document.getElementById('classInput').value;
    if (className) {
        addClassToTable(className);
        saveClasses();
    }
});

function addClassToTable(className) {
    let table = document.getElementById('classesTable').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.textContent = className;
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        newRow.remove();
        saveClasses();
    };
    cell2.appendChild(deleteButton);
}

function saveClasses() {
    let classes = [];
    let table = document.getElementById('classesTable').getElementsByTagName('tbody')[0];
    for (let i = 0; i < table.rows.length; i++) {
        classes.push(table.rows[i].cells[0].textContent);
    }
    chrome.storage.sync.set({ 'rainbowClasses': classes });
}

// Charger les classes enregistrées
window.onload = function() {
    chrome.storage.sync.get('rainbowClasses', function(data) {
        if (data.rainbowClasses) {
            data.rainbowClasses.forEach(addClassToTable);
        }
    });
    chrome.storage.sync.get(['url', 'title'], function(data) {
        if (data.url) {
            document.getElementById('urlInput').value = data.url;
            document.getElementById('urlDisplay').textContent = data.url;
            document.getElementById('titleDisplay').textContent = data.title;
        }
        else {
            document.getElementById('urlDisplay').textContent = 'No URL stored';
            document.getElementById('titelDisplay').textContent = 'No Title stored';
        }
        if (data.title) {
            document.getElementById('titleInput').value = data.title;
        }
    });
};

document.getElementById('saveButton').addEventListener('click', function() {
    let url = document.getElementById('urlInput').value;
    let title = document.getElementById('titleInput').value;
    
    chrome.storage.sync.set({ url, title }, function() {
        console.log('URL and Title saved');
    });
});
// Charger l'URL enregistrée
chrome.storage.sync.get(['url'], function(data) {
    if (data.url) {
        document.getElementById('urlDisplay').textContent = data.url;
    } else {
        document.getElementById('urlDisplay').textContent = 'No URL stored';
    }
});



