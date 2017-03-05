import React, {Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { observer, PropTypes } from 'mobx-react';

import ModelPersonView from './ModelPersonView';

@observer export default class SilhouettePreviewView extends Component
{
    deleteModel = (model, event) => {
        let { models } = this.props;
        models.remove(model);
    };

    render() {
        let models = this.props.models.map((model, key) =>
            <ModelPersonView
                key={model.id}
                modelKey={model.key}
                model={model}
                selection={this.props.selection}
                deleteModel={this.deleteModel}
            />
        );

        return (
            <div className="preview-models">
                <ReactCSSTransitionGroup
                    transitionName="dropZone"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                {models}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

SilhouettePreviewView.propTypes = {
    models: PropTypes.observableArray.isRequired,
    selection: React.PropTypes.object
};