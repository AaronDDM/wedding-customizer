import React, {Component} from "react";
import { PropTypes } from 'mobx-react';
import { Row, Col, Panel } from 'react-bootstrap';

import SilhouetteSettingsView from './SilhouetteSettingsView';
import SilhouetteModelLibraryView from './SilhouetteModelLibraryView';
import SilhouettePreviewView from './SilhouettePreviewView';
import Theme from '../Component/Theme';

export default class SilhouetteAppView extends Component
{
    onBrideNameChange = (content) => {
        let { settings} = this.props.silhouetteStore;
        settings.brideName = content;
    };

    render () {
        let { settings, models, selection } = this.props.silhouetteStore;

        return (
            <div>
                <Theme settings={settings} />
                <Row>
                    <Col xs={12} sm={4} md={4} lg={3}>
                        <Panel header="Customize">
                            <SilhouetteSettingsView settings={settings} models={models} />
                        </Panel>
                        <SilhouetteModelLibraryView models={models} selection={selection}  />
                        <Panel header="Background">
                            <p>Select your backgrounds here</p>
                        </Panel>
                    </Col>
                    <Col xs={12} sm={8} md={8} lg={9}>
                        <Panel header="Preview" className="preview-panel">
                            <div className="section-one">
                                <div className="event-time">Sunday, July 17th, 2016 at 11 a.m (seating time)</div>
                            </div>
                            <div className="section-two">
                                <div className="bride-groom-names">
                                    <div className="bride-name">
                                        <div className="couple-name">{settings.brideName}</div>
                                        <div className="parents-of">
                                            <div>Parents of the Bride</div>
                                            <div>Ruth &amp; John Doe</div>
                                        </div>
                                    </div>
                                    <div className="ampersand">&amp;</div>
                                    <div className="groom-name">
                                        <div className="couple-name">{settings.groomName}</div>
                                        <div className="parents-of">
                                            <div>Parents of the Bride</div>
                                            <div>Ruth &amp; John Doe</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-three">
                                <SilhouettePreviewView models={models} selection={selection} />
                            </div>
                        </Panel>
                    </Col>
                </Row>
            </div>
        )
    }
}

SilhouetteAppView.propTypes = {
    silhouetteStore: PropTypes.observableObject.isRequired
};