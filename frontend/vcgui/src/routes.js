import React from 'react';
import { Route } from 'react-router-dom';
import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';

const BaseRouter = () => (
    <div>
        <Route exact path='/articles' component={ArticleList} />
        <Route exact path='/articles/:id' component={ArticleDetail} />
        <Route exact path='/login/' component={LoginPage} />
        <Route exact path='/signup/' component={SignupPage} />
        
    </div>
);

export default BaseRouter;