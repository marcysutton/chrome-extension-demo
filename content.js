var s = document.createElement('script');
s.src = chrome.extension.getURL("node_modules/axe-core/axe.js");
(document.head||document.documentElement).appendChild(s);

var h2 = document.createElement('h2'),
    div = document.createElement('div'),
	pre = document.createElement('pre'),
	code = document.createElement('code');

// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    
    if (msg.text === 'axe.a11yCheck') {
    	axe.a11yCheck(document, function (results) {
    		h2.textContent = results.violations.length + ' Accessibility Violations!';
    		div.appendChild(h2);

    		if (results.violations.length > 0) {
    			code.textContent = JSON.stringify(results.violations, null, 4);
    			pre.appendChild(code);
                div.appendChild(pre);
    		}
            document.body.appendChild(div);
    		sendResponse(document);
	    });
    }
});