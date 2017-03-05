import React, {Component} from "react";
import { observer, PropTypes } from 'mobx-react';
import { FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import { ChromePicker } from 'react-color';

import SilhouetteModel from '../Model/SilhouetteModel';

let id = 0;

@observer export default class SilhouetteSettingsView extends Component
{
    constructor(props) {
        super(props);
        this.state = {colour: this.props.settings.colour}
    }

    handleChange = (event) => {
        let { models } = this.props;

        if (event.target.value > models.length) {
            let difference = event.target.value - models.length;

            for (let i = 0; i<difference; i++) {
                id++;

                let silhouetteModel = new SilhouetteModel();
                silhouetteModel.id = id;
                silhouetteModel.name = 'Name ' + id;
                silhouetteModel.xCoordinate = 0;
                silhouetteModel.yCoordinate = 0;

                models.push(silhouetteModel);
            }
        } else {
            let difference = models.length - event.target.value;

            if (difference > -1) {
                models.splice(0,difference);
            }
        }
    };

    changeColour = (colour) => {
        let { settings } = this.props;
        settings.colour = colour.hex;
        this.setState({colour: colour.hex});
    }

    render() {
        return (
            <form>
                <FormGroup
                    controlId="totalModels"
                >
                    <ControlLabel>Total Models</ControlLabel>
                    <FormControl
                        type="number"
                        value={this.props.models.length}
                        onChange={this.handleChange}
                        placeholder="# of models"
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                    controlId="colour"
                >
                    <ControlLabel>Theme Colour</ControlLabel>
                    <ChromePicker
                        color={this.state.colour}
                        onChange={this.changeColour}
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </form>
        )
    }
}

SilhouetteSettingsView.propTypes = {
    models: PropTypes.observableArray.isRequired
};