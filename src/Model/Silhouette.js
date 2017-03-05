import {observable, asStructure, asFlat} from "mobx";

export default class Silhouette {
    @observable background;
    @observable models = asStructure([]);
    @observable selection = asFlat({
        model: {}
    });
    @observable brideName = 'Ms. Bride';
    @observable groomName = 'Mr. Groom';
    @observable settings = {
        colour: '#000000',
        brideName: 'Ms. Bride',
        groomName: 'Mr. Groom'
    };
}