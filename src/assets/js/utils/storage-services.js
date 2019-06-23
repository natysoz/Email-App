
export default {
    saveToStorage,
    loadFromStorage,
    createMailRandomID,
}

function saveToStorage(key, value) {
    localStorage[key] = JSON.stringify(value);
}

function loadFromStorage(key) {
    var str = localStorage[key] || 'null';
    return Promise.resolve(JSON.parse(str));
}


function createMailRandomID(length=15) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}