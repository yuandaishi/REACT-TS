import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Fruits from './fruits/Index';

const Index:React.FC=()=>{
    return(
        <div>
            这是一个示例页面
            <Switch>
                <Route exact path='/content' component={Fruits} />
            </Switch>
        </div>
    )
}

export default Index