import React, { useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Firebase from "../firbase";
import {NavLink} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

interface sineUpValue {
    firstName: string;
    lastName: string;
    email: string;
    password:string | number,
}
const SinUp = () => {
    const classes = useStyles();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelSubmit = (e: any) => {
        e.preventDefault();
        console.log('email tyep', typeof email)
        if(email ){

        }
        Firebase.createUserWithEmailAndPassword(email, password)//1
            .then((userCredential: any) => {
                const user = userCredential.user;
                createNewUser(user);
                console.log('user ok', user)
            })
            .catch((error: any) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log('errorCode',errorCode)
                console.log('errorMessage',errorMessage)
                // ..
            });
        console.log('e, email', email)
        console.log('e, password', password)
        console.log('e, firstName', firstName)
        console.log('e, lastName', lastName)
    }

    const handleChange = (e:any, type: string) => { //2
        if(type === 'email'){
            setEmail(e.target.value);
        }else if(type === 'password'){
            setPassword(e.target.value);
        }else if(type === 'firstName'){
            setFirstName(e.target.value);
        }else if(type === 'lastName'){
            setLastName(e.target.value);
        }
    }

    const createNewUser = (user: any) => {
        Firebase.database.ref('users/' + user.uid).set({
            firstName: firstName,
            lastName: lastName,
            email: email
        }, (error:any) => {
            if (error) {
                // The write failed...
            } else {
                // Data saved successfully!
            }
        });
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} onSubmit={handelSubmit} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={(e) => handleChange(e, 'firstName')}//3
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={(e) => handleChange(e, 'lastName')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => handleChange(e, 'email')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => handleChange(e, 'password')}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        <NavLink to={'/users'}>Sin Up</NavLink>
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <NavLink to={'/sinIn'}> Already have an account? Sign in </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default SinUp;