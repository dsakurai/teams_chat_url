document.addEventListener('DOMContentLoaded', () => {
    const chatURLButton = document.getElementById('chatURLButton');

    chatURLButton.addEventListener('click', () => {
        // Check the tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'findChatID' },

                // Response from the page content (content.js)
                (response) => {
                    if (response && response.chatId) {

                        const chatId = response.chatId;

                        // This is the URL for the Teams chat
                        const page = `https://teams.microsoft.com/v2/?clientexperience=t2#/l/chat/${chatId}`;
                        navigator.clipboard.writeText(page); // write the URL in the clipboard

                        // use this, instead, to load the page possibly with the app. I'm not sure if the query `deeplinkId` is correct, though.
                        // const url = encodeURIComponent(`/_#/l/chat/${chatId}`);
                        // const launcherPage = `https://teams.microsoft.com/dl/launcher/launcher.html?url=${url}&type=chat&deeplinkId=37ed239a-efcc-45d1-bc5f-586c1eedb808&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true`;
                    }
                });
        });
    });
});
