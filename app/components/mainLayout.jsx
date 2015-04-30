var React = require("react");
var RouteHandler = require("react-router").RouteHandler;
var MainMenu = require("./Application/MainMenu.jsx");

require("../styles/reset.css");
require("../styles/app.less");

var Application = React.createClass({
	mixins: [],

    getInitialState: function(){
        return {
			loading: false
		};
    },

	render: function() {
		return <div className={this.state.loading ? "application loading" : "application"}>
			      {this.state.loading ? <div style={{float: "right"}}>loading...</div> : null}
			      <RouteHandler />
		       </div>;
	}
});
module.exports = Application;
