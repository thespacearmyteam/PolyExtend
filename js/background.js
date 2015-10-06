chrome.storage.sync.get("options", function(items) {
	if(!items.options || Object.keys(items.options).length != 8) {
		chrome.storage.sync.set({options: {
			twitchemotes: true,
			linkimages: true,
			colornames: false,
			colornamesover: true,
			beamlink: true,
			beamlinkcolor: true,
			showdeleted: false,
			separator: false
		}});
	}
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if(message == "showicon") {
		chrome.pageAction.show(sender.tab.id);
	}
});
