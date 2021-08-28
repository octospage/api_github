import React from 'react'; //rsc
import './app.less';
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./main/Main";

const App = () => {

    return (
        <BrowserRouter>
            <div className='container'>
                <Route path='/' component={Main}></Route>
            </div>

        </BrowserRouter>
    );
};

export default App;