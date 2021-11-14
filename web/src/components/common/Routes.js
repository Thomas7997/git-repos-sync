import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Repositories from '../pages/Repositories';

function Routes(props) {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/repositories" component={Repositories} />
            </Switch>
        </Router>
    );
}

export default Routes;