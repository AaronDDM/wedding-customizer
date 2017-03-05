import React, {Component} from "react";
import { FormGroup, FormControl } from 'react-bootstrap';

export default class ModelPersonNameView extends Component
{
    constructor(props) {
        super(props);

        this.state = {editing: false, name: this.props.name}
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.name !== nextProps.name) {
            return true;
        }

        if (this.state.name !== nextProps.state) {
            return true;
        }

        if (this.state.editing !== nextProps.editing) {
            return true;
        }

        return false;
    }

    _onEnableEditing = () => {
        this.setState({ editing: true });
        this.refs.nameInput.getDOMNode().focus();
    };

    _onNameChange = (event) => {
        this.setState({ name: event.target.value });
    };

    _onSaveNameChange = (event) => {
        this.props.onSaveNameChange(this.state.name);
        this.setState({ editing: false });
    };

    componentWillReceiveProps(nextProps) {
        if (this.state.editing === false) {
            this.setState({name: nextProps.name});
        }
    }

    render() {
        if (this.state.editing === true) {
            return (
                <FormGroup>
                    <FormControl
                        ref="nameInput"
                        type="text"
                        value={this.state.name}
                        onChange={this._onNameChange}
                        onBlur={this._onSaveNameChange}
                        placeholder="Enter the name of this model"
                    />
                </FormGroup>
            )
        } else {
            return (
                <div className="model-name" onClick={this._onEnableEditing}>{this.state.name}</div>
            )
        }
    }
}