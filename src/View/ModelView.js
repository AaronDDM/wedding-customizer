import React, {Component} from "react";
import SVGModel from '../Model/SVGModel';

export default class ModelView extends Component
{
    _onModelDrag = (event) => {
        this.props.onModelDrag(this.props.model, event);
    };

    render() {
        let { model } = this.props;

        return (
            <div className="model-box" draggable='true' onDragStart={this._onModelDrag}>
                <SVGModel svgId={'#' + model.svg_id + '-icon'} />
            </div>
        )
    }
}

ModelView.propTypes  = {
    model: React.PropTypes.shape({
        name: React.PropTypes.string,
        image_name: React.PropTypes.image_name
    }).isRequired,
    onModelDrag: React.PropTypes.func.isRequired
};