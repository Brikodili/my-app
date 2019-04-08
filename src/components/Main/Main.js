import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Feed from "../Feed";
import NotesContainer from '../NotesContainer';
import ArticleItem from '../ArticleItem';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Feed}/>
            <Route path='/notes' component={NotesContainer}/>
            <Route path="/post/:id" component={ArticleItem} />
        </Switch>
    </main>
);

export default Main;
