import React, {Component} from "react";
import { observer } from 'mobx-react';
import { Panel } from 'react-bootstrap';

import * as constant from '../Constants/Constants';
import SilhouettePerson from '../Model/SilhouettePerson';
import ModelView from './ModelView';


@observer export default class SilhouetteModelLibraryView extends Component
{
    dragStart = (model, event) => {
        let { selection } = this.props;
        event.dataTransfer.setData('text', '');
        selection.model = model;
    };

    render() {
        let couple1 = new SilhouettePerson();
        couple1.type = constant.MODEL_PERSON_COUPLE;
        couple1.name = 'Couple 1';
        couple1.image_name = 'couple/couple.svg';
        couple1.svg_id = 'couple';

        let couple2 = new SilhouettePerson();
        couple2.type = constant.MODEL_PERSON_COUPLE;
        couple2.name = 'Couple 2';
        couple2.image_name = 'couple/couple.svg';
        couple2.svg_id = 'couple';

        let bridesmaid = new SilhouettePerson();
        bridesmaid.type = constant.MODEL_PERSON_BRIDESMAID;
        bridesmaid.name = 'Bridsmade 1';
        bridesmaid.image_name = 'couple/couple.svg';
        bridesmaid.svg_id = 'couple';

        let bestman = new SilhouettePerson();
        bestman.type = constant.MODEL_PERSON_BEST_MAN;
        bestman.name = 'Bestman 1';
        bestman.image_name = 'couple/couple.svg';
        bestman.svg_id = 'couple';

        let flowergirl = new SilhouettePerson();
        flowergirl.type = constant.MODEL_PERSON_FLOWER_GIRL;
        flowergirl.name = 'Flowergirl 1';
        flowergirl.image_name = 'couple/couple.svg';
        flowergirl.svg_id = 'couple';

        let models = [
            couple1,
            couple2,
            bridesmaid,
            bestman,
            flowergirl
        ];

        return (
            <Panel header="Models" className="over">
                {models.map((model, key) => (
                    <ModelView model={model} key={key} onModelDrag={this.dragStart} />
                ))}
            </Panel>
        )
    }
}

SilhouetteModelLibraryView.propTypes = {
    models: React.PropTypes.object.isRequired,
    selection: React.PropTypes.object.isRequired
};