import React, {Component} from "react";
import { Row, Col } from 'react-bootstrap';

export default class FooterView extends Component
{
    render() {
        return (
            <Row>
                <Col xs={12} md={12}>
                    <p className="copyright">Copyright &copy; Wedding at Hand (www.weddingathand.com).</p>
                </Col>
            </Row>
        )
    }
}