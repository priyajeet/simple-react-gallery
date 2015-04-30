var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

// polyfill
if(!Object.assign)
	Object.assign = React.__spread;

// export routes
module.exports = (
	<Route name="app" path="/" handler={require("./components/mainLayout")}>
		<Route name="home" path="/home" handler={require("./components/Home")} />
		<DefaultRoute handler={require("./components/Home")} />
		<NotFoundRoute handler={require("./components/NotFound")} />
	</Route>
);