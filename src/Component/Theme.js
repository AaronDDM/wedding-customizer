import React, {Component} from "react";
import { observer } from 'mobx-react';

@observer export default class Theme extends Component {
    render() {
        return (
            <style>
                {".theme-color { fill: " + this.props.settings.colour + "; }"}
            </style>
        )
    }
}