var async = require("async");
var React = require("react");
var Router = require("react-router");
var routes = require("../app/" + __resourceQuery.substr(1) + "Routes");
var withTimeout = require("../lib/withTimeout");
var ReactUpdates = require("react/lib/ReactUpdates");

var initialRun = true;

// react-router handles location
Router.run(routes, Router.HistoryLocation, function(Application, state) {

	// On every page navigation invalidate data from the stores
	// This is not needed when the server notifies the client about changes (WebSocket, SSE)
	if(!initialRun) {
        ;
	}

	initialRun = false;

	React.render(<Application />, document.getElementById("content"));
});
