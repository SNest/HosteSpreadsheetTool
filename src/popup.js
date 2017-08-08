var newURL = chrome.extension.getURL('background.html');
chrome.tabs.create({ url: newURL, 'selected': true });