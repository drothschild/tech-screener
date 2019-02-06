import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Github from './Github';
import Gists from './Gists';

const AppRouter = () => (
    <Router>
        <div>
            <Router path="/github/user" component={Github} />
            <Route path="/gists/:user" component={Gists} />
        </div>
    </Router>
);

export default AppRouter;
