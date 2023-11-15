chrome.storage.sync.get(['url', 'title'], function(data) {
    // Vérifiez si l'URL existe dans les données récupérées
    if (data && data.url) {
        // Si une URL personnalisée est définie, ouvrez-la dans un nouvel onglet
        chrome.tabs.create({ url: data.url });
    } else {
        // Sinon, ouvrez la page d'options par défaut de l'extension
        chrome.runtime.openOptionsPage();
    }
});
