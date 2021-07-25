import React from "react";
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";
import './style.css';

const Login = () =>{
    return(
        <div className="login-block">
            <Button variant="contained" color="primary">
                <NavLink to={'/sinIn'}>Sin in</NavLink>
            </Button>
            <Button variant="contained" color="primary">
                <NavLink to={'/sinUp'}>Sin up</NavLink>
            </Button>
        </div>
    )
}

export default Login;