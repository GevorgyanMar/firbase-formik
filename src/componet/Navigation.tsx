import React from "react";
import Login from './login'
import SinIn from './sinIn';
import SinUp from "./sinUp";
import Users from "./users";
import { Switch,Route} from "react-router-dom";
//2
 const  Navigation = () => {
    return (
            <Switch>
                <Route exact path="/">
                      <Login/>
                </Route>
                <Route path="/sinIn">
                    <SinIn/>
                </Route>
                <Route path="/sinUp">
                    <SinUp/>
                </Route>
                <Route path="/users">
                    <Users/>
                </Route>

            </Switch>
    );
}

export default Navigation;