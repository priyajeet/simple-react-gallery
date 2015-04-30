var React = require("react");
var imageActions = require("../../actions/imageActions");
var eventBus = require('../../actions/eventBus');

module.exports = React.createClass({

    getInitialState: function (){
        return  {
            editingCaption: false
        }
    },

    render: function() {
        return <div className='image'>
                    <button onClick={this.handleDelete}>X</button>
                    <img src={this.props.imageInfo.path + '?dim=300x300'} />
                    {this.renderCaption()}
                </div>;
    },

    renderCaption: function(){
        var caption = this.props.imageInfo.caption || 'N/A',
            captionStyle = this.props.imageInfo.caption ? '' : 'missing';

        return <div className={'captionContainer ' + captionStyle}>

                  {this.state.editingCaption ?
                      <input onBlur={this.closeCaptionEdit} onKeyDown={this.handleKeyDown} ref='captionInput'/>
                      :
                      <div onClick={this.openCaptionEdit}>{caption}</div>
                      }
                </div>;

    },

    openCaptionEdit: function(){
        this.setState({editingCaption: true});
    },

    closeCaptionEdit: function(){
        this.setState({editingCaption: false});
    },

    handleKeyDown: function(event){
        var code = event.keyCode,
            params ={};

        if (event.charCode && code == 0) {
            code = event.charCode;
        }

        switch(code) {
            // ENTER
            case 13:
                params = {caption: this.getCaptionValue()};

                imageActions.update(this.props.imageInfo.id, params, (result) =>{
                    if (result) {
                        eventBus.emit('images.updated');
                        this.closeCaptionEdit();
                    }
                });
                break;
        }
    },

    handleDelete: function(){
        if (confirm('Are you sure?')){
            imageActions.remove(this.props.imageInfo.id, (result) => {
                if (result) {
                    eventBus.emit('images.updated');
                }
            });
        };
    },

    getCaptionValue: function(){
        return this.refs['captionInput'] && this.refs['captionInput'].getDOMNode().value;
    },

    componentDidUpdate: function(){
        if (this.state.editingCaption) {
            this.refs['captionInput'].getDOMNode().focus();
            this.refs['captionInput'].getDOMNode().value = this.props.imageInfo.caption;
        }
    }
});
