import React, {Component} from "react";

import { BrowserRouter, Match, Miss } from 'react-router';

import Home from './Page/Home';
import About from './Page/About';

import HeaderView from './View/HeaderView';
import FooterView from './View/FooterView';

import Silhouette from './Model/Silhouette';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import "./App.css";

const NoMatch = ({ location }) => (
    <div>
        <h2>Whoops</h2>
        <p>Sorry but {location.pathname} didn’t match any pages</p>
    </div>
);

class App extends Component
{
    render() {
        let silhouetteStore = new Silhouette();
 
        return (
            <BrowserRouter basename='/wedding-customizer'>
                <div className="container-fluid">
                    <HeaderView />
                        <Match exactly pattern="/" render={() => <Home silhouetteStore={silhouetteStore} />} />
                        <Match pattern="/about" component={About} />
                        <Miss component={NoMatch}/>
                    <FooterView />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;