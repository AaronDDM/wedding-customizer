import React, {Component} from "react";
import { PropTypes } from 'mobx-react';

import SilhouetteAppView from '../View/SilhouetteAppView';

export default class Home extends Component
{
    render() {
        return (
            <SilhouetteAppView silhouetteStore={this.props.silhouetteStore} />
        )
    }
}

Home.propTypes = {
    silhouetteStore: PropTypes.observableObject.isRequired
};