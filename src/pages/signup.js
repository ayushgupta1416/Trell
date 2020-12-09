import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Theatre
          </Typography>
                    <Button color="inherit">SignUp Page</Button>
                </Toolbar>
            </AppBar>
            <br />
            <div style={{marginTop:"100px"}}>

            </div>
            <Typography variant="h4" style={{marginBottom:"50px"}}>
                Signin Page
            </Typography>
            <form noValidate autoComplete="off">
                <Grid container xs={12} lg={12} spacing={5}>
                    <Grid item xs={12} lg={12}>
                        <TextField
                            size="large"
                            id="email" 
                            label="email" 
                            color="primary"/>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <TextField 
                            size="large"
                            id="password" 
                            label="password" 
                            type="password"/>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <TextField 
                            size="large"
                            id="confirm-password" 
                            label="confirm-password" 
                            type="password"/>
                    </Grid>
                </Grid>

            </form>
        </div>
    );
}
