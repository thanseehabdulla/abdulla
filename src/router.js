import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {connect} from 'react-redux';
import HeaderCFApp from './container/headerFooterContent'
import HeaderCFAppSignIn from './container/headerFooterContentSignIn'
import HeaderCFAppAts from './container/headerFooterContentAts'
import HeaderCFAppDashboard from './container/headerFooterContentDashboard'


const PublicRoutes = ({history}) => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route
                    path="/admindashboard"
                    component={HeaderCFAppDashboard}
                />
                <Route
                    path="/ats"
                    component={HeaderCFAppAts}
                />
                <Route
                    path="/signin"
                    component={HeaderCFAppSignIn}
                />
                <Route
                    path="/*"
                    component={HeaderCFApp}
                />
            </Switch>
        </ConnectedRouter>
    );
};

export default connect(
)(PublicRoutes);
