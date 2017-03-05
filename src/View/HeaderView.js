import React, {Component} from "react";

import { Link } from 'react-router';
import { Row, Col, Navbar, Nav, NavItem} from 'react-bootstrap';

const CustomNaveItem = ({ href, onClick, isActive, label}) => (
    <NavItem href={href} onClick={onClick} active={isActive}>{label}</NavItem>
);

export default class HeaderView extends Component
{
    render() {
        return (
            <Row>
                <Col xs={12} md={12}>
                    <Navbar fluid>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#">Wedding Customizer</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav>
                            <Link activeOnlyWhenExact to="/">{(params) => <CustomNaveItem label="Home" {...params} />}</Link>
                            <Link to="/about">{(params) => <CustomNaveItem label="About" {...params} />}</Link>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
        )
    }
}