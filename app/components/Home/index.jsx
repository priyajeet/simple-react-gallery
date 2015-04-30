var React = require("react");
var imageActions = require('../../actions/imageActions');
var eventBus = require('../../actions/eventBus');
var Grid = require('./Grid');

module.exports = React.createClass({

    getInitialState: function(){
        return {images: []}
    },

    componentDidMount: function (){

        // Fetch initial set of images
        this.fetchImages();

        // On change, grab updated set of data
        eventBus.on('images.updated', () => {
            this.fetchImages();
        });
    },

    fetchImages: function(){
        imageActions.getAll((response) => {
            this.setState({images: response.results});
        })
    },

	render: function() {
		return <div id='home'>
                   <Grid images={this.state.images} />
               </div>;
	}
});
