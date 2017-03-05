import {observable, asFlat, action} from "mobx";

export let SilhouetteModelId = 0;

export default class SilhouetteModel {
    id = SilhouetteModelId + 1;
    @observable modelPerson = asFlat({});
    xCoordinate;
    yCoordinate;
    @observable name;

    @action setModelPerson = (model) => {
        this.modelPerson = model;
    }
}