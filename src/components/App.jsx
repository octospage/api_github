import React from 'react'; //rsc
import './app.less';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import Main from "./main/Main";
import Card from "./card/Card";
import Error from "./main/Error";

const App = () => {

    return (
        <BrowserRouter>
            <div className='container'>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/card/:username/:reponame' component={Card}/>
                    <Route path="/error" component={Error}/>
                    <Redirect to='/'/>
                </Switch>
            </div>

        </BrowserRouter>
    );
};

export default App;