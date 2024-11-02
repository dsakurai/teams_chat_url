chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'findChatID') {
        // Select the div with role="treeitem" and aria-selected="true"
        const treeItem = document.querySelector('div[role="treeitem"][aria-selected="true"]');

        // If found, send the chat ID back
        if (treeItem) {

            const parent = treeItem.parentElement;

            sendResponse({ chatId: parent.id });

            // navigator.clipboard.writeText(parent.id)
        } else {
            console.log('No treeitem with role="treeitem" and aria-selected="true" found.');
        }
    }
});
