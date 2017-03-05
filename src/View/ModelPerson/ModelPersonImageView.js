import React, {Component} from "react";
import SVGModel from '../../Model/SVGModel';

export default class ModelPersonImageView extends Component
{
    render() {
        return (
            <div>
                <SVGModel svgId={'#' + this.props.svgId + '-icon'} />
            </div>
        )
    }
}