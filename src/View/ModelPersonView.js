import React, {Component} from "react";
import ModelPersonNameView from './ModelPerson/ModelPersonNameView';
import ModelPersonImageView from './ModelPerson/ModelPersonImageView';

const styles = {
    dropZone: {
        backgroundColor: 'yellow',
        position: 'absolute',
        width: '100%',
        height: '100%',
        lineHeight: '100%',
        top: 0,
        left: 0,
        zIndex: 1
    },
    dropZoneText: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: 0,
        right: 0
    }
};

export default class ModelPersonView extends Component
{
    constructor() {
        super();
        this.dropIndex = 0;
        this.state = {showDelete: false, model: null, highlight: false, dropIndex: 0};
    }

    componentDidMount() {
        this.setState({ name: this.props.model.name });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.model !== nextProps.model) {
            return true;
        }

        if (this.state.highlight !== nextState.highlight) {
            return true;
        }

        if (this.state.showDelete !== nextState.showDelete) {
            return true;
        }

        return false;
    }

    preventDefault(event) {
        event.preventDefault();
    };

    drop = (event) => {
        let { selection, model } = this.props;

        if (selection.model !== null) {
            // Set the model dropped into this zone
            model.setModelPerson(selection.model);

            // Reset our selection since it's done!
            selection.model = {};

            // Remove the class
            this.setState({highlight: false});

            // Reset drop index
            this.dropIndex = 0;
        }

        event.preventDefault();
    };

    dragEnter = (event) => {
        this.dropIndex++;

        this.setState({highlight: true});

        event.preventDefault();
    };

    dragLeave = (event) => {
        this.dropIndex--;

        if (this.dropIndex === 0) {
            this.setState({highlight: false});
        }

        event.preventDefault();
    };

    mouseEnter = () => {
        this.setState({ showDelete: true });
    };

    mouseLeave = () => {
        this.setState({ showDelete: false });
    };

    deleteModelClick = (event) => {
        let { model } = this.props;
        this.props.deleteModel(model, event);
    };

    saveNameChange = (name) => {
        let { model } = this.props;
        model.name = name;
    };

    render() {
        let { highlight } = this.state;
        return (
            <div
                 className='selected-model-box'
                 key={this.props.modelKey}
                 onDrop={this.drop}
                 onDragEnter={this.dragEnter}
                 onDragLeave={this.dragLeave}
                 onMouseEnter={this.mouseEnter}
                 onMouseLeave={this.mouseLeave}
                 onDragOver={this.preventDefault}
            >
                {highlight &&
                    <div style={styles.dropZone}>
                        <span style={styles.dropZoneText}>Drop Model</span>
                    </div>
                }
                {(this.state.showDelete && this.props.model.modelPerson != null) &&
                    <button className="btn-delete-model" onClick={this.deleteModelClick}><span className="glyphicon glyphicon-remove"/></button>
                }
                <ModelPersonNameView
                    name={this.props.model.name}
                    onSaveNameChange={this.saveNameChange}
                />
                {Object.keys(this.props.model.modelPerson).length > 0 &&
                    <ModelPersonImageView name={this.props.model.name} svgId={this.props.model.modelPerson.svg_id} />
                }
            </div>
        )
    }
}