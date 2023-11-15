document.getElementById('addClassButton').addEventListener('click', function() {
    let className = document.getElementById('classInput').value;
    let classTitle = document.getElementById('classTitleInput').value;

    if (className) {
        addClassToTable(className, classTitle);
        saveClasses();
    }
});


function addClassToTable(className, classTitle = '') { // Ajout de classTitle avec une valeur par défaut
    let table = document.getElementById('classesTable').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();
    
    // Cellule pour le nom de la classe
    let cellClassName = newRow.insertCell(0);
    cellClassName.textContent = className;
    
    // Cellule pour le titre de la classe
    let cellClassTitle = newRow.insertCell(1);
    cellClassTitle.textContent = classTitle;

    // Cellule pour le bouton de suppression
    let cellDelete = newRow.insertCell(2);
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        newRow.remove();
        saveClasses();
    };
    cellDelete.appendChild(deleteButton);
}


function saveClasses() {
    let classes = [];
    let table = document.getElementById('classesTable').getElementsByTagName('tbody')[0];

    for (let i = 0; i < table.rows.length; i++) {
        let className = table.rows[i].cells[0].textContent;
        let classTitle = table.rows[i].cells[1].textContent; // Assumer que le titre est dans la deuxième cellule

        classes.push({ className, classTitle }); // Enregistrer un objet avec la classe et le titre
    }

    chrome.storage.sync.set({ 'rainbowClasses': classes }, function() {
        if (chrome.runtime.lastError) {
            console.error('Error saving classes:', chrome.runtime.lastError);
        } else {
            console.log('Classes and titles saved');
        }
    });
}


// Charger les classes enregistrées
window.onload = function() {
    chrome.storage.sync.get('rainbowClasses', function(data) {
        if (data.rainbowClasses) {
            data.rainbowClasses.forEach(function(item) {
                addClassToTable(item.className, item.classTitle);
            });
        }
    });

    chrome.storage.sync.get(['url', 'title', 'delay'], function(data) {
        if (data.url) {
            document.getElementById('urlInput').value = data.url;
            document.getElementById('urlDisplay').textContent = data.url;
        } else {
            document.getElementById('urlDisplay').textContent = 'No URL stored';
        }

        if (data.title) {
            document.getElementById('titleInput').value = data.title;
            document.getElementById('titleDisplay').textContent = data.title;
        } else {
            document.getElementById('titleDisplay').textContent = 'No Title stored';
        }

        if (data.delay) {
            document.getElementById('delayInput').value = data.delay;
            document.getElementById('currentDelay').textContent = data.delay;
        }
    });
};

document.getElementById('saveDelayButton').addEventListener('click', function() {
    let delay = document.getElementById('delayInput').value;
    chrome.storage.sync.set({ 'delay': delay }, function() {
        console.log('Delay saved:', delay);
        document.getElementById('currentDelay').textContent = delay;
    });
});

document.getElementById('saveButton').addEventListener('click', function() {
    let url = document.getElementById('urlInput').value;
    let title = document.getElementById('titleInput').value;
    
    chrome.storage.sync.set({ url, title }, function() {
        console.log('URL and Title saved');
    });
});