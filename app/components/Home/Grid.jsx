var React = require("react");
var Image = require("./Image");

module.exports = React.createClass({

    mapImages: function(){
        return this.props.images.map((imageInfo) => {
            return <Image imageInfo={imageInfo} />;
        });
    },

	render: function() {
		return <div className='image-grid'>
                    {this.mapImages()}
               </div>;
	}
});
