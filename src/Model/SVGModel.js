import React, {Component} from "react";

export default class SVGModel extends Component {
    render() {
        return (
            <svg x="0px" y="0px" width="88px" height="118px" viewBox="98 98 88 88">
                <use xlinkHref={this.props.svgId} />
            </svg>
        )
    }
}