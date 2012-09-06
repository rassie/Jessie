/*global global,isHostMethod */
/*
Description:
Relies on `window.attachEvent`
*/

/*
Degrades:
IE10, IE9, IE4, IE3, NN4, Opera 8+,Chrome, FF, Safari
*/
var attachDocumentReadyListener;

var readyListenerAttached;

if(isHostMethod(global, "attachEvent")) {
	attachDocumentReadyListener = function(fn) {
		
		/*SCAFFOLDING:Start*/
		if(readyListenerAttached) {
			throw new Error("One too many ready listeners. Use a queue!");
		}
		/*SCAFFOLDING:End*/
		readyListenerAttached = true;
		
		// Production function starts (and ends) here
		window.attachEvent('load', fn, false);
	};
}