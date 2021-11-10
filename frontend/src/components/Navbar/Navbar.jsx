import React, { useState, useEffect } from "react";
import {  AppBar,  Toolbar,  IconButton,  Badge,  MenuItem,  Menu,  Typography,  Input, ListItemSecondaryAction,} from "@material-ui/core";
import axios from "axios";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LoginIcon from '@mui/icons-material/Login';
import { CallMissedSharp, ShoppingCart } from "@material-ui/icons";
import Modal from "@mui/material/Modal";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Alert from "@mui/material/Alert";
import logo from "../../assets/logo.png";
import useStyles from "./styles";
import verifyIfTokenIsExpired from "../Services/UserCheck"
import LogOut from "../Services/LogOut"
import {Link} from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';

function Navbar(props) {
  const {onAdd,cartItems} = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const url = "http://localhost:8080/api/auth/signin";
  let [count2, setCount2] =useState(0);

  let count = () => {
    count2 =0
    cartItems?.forEach(element => {
      count2 = count2+ element.qty;
      
    })
  }

  useEffect(()=> {
    count();
    setCount2(count2)
  },[cartItems])


  
  const updateUsername = (e) => setUsername(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => {setOpen(false)};
  
  const login = () => {
    axios
      .post(url, {
        username: username,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.username));
        localStorage.setItem("token",JSON.stringify(response.data.accessToken));
        localStorage.setItem("id",JSON.stringify(response.data.id));

        console.log(localStorage.getItem("user"));
        setLoginStatus(false);
        handleCloseModal();
      });

    if (localStorage.getItem("user") === "") {
      setAlert(true);
    }
  };

  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "400px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title}>
            <img
              src={logo}
              alt="Electronic.js"
              height="25px"
              className={classes.image}
            />
            Electronic store
          </Typography>
          
          <div className={classes.grow} />

          <div className={classes.button}>
            <IconButton  component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={count2} color="secondary"></Badge>
              <ShoppingCart />
            </IconButton>
          </div>

          { !verifyIfTokenIsExpired() &&
            <AppRegistrationIcon />
          }
          {!verifyIfTokenIsExpired() && <div onClick={handleOpenModal} className={classes.loginButton}> 
            <LoginIcon />
          </div> }
          { verifyIfTokenIsExpired() && <div className={classes.logoutButton}>
            <LogoutIcon onClick = {LogOut}/>
          </div> }
          <Modal
            open={open}
            onClose={() => {handleCloseModal(); setAlert(false)}}
            aria-labelledby="modal-modalLogIn"
            aria-describedby="modal-descriere"
          >
            <Box sx={style}>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                component="form"
                sx={{ "&.MuiTextField-root": { m: 1, width: "25ch" } }}
                noValidate
                autocomplete="off"
              >
                <Input
                  onChange={updateUsername}
                  required
                  value={username}
                  id="username"
                  placeholder="Enter your username"
                  size="small"
                />
                <Input
                  onChange={updatePassword}
                  required
                  value={password}
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  size="small"
                />
                {alert ? (
                  <Alert variant="filled" severity="error">
                    This is an error alert — check it out!
                  </Alert>
                ) : (
                  ""
                )}
              </Box>
              <Stack
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "30px",
                  justifyContent: "center",
                }}
                spacing={2}
                direction="row"
              >
                <button onClick={login} type="submit">
                  Log In
                </button>
                <button onClick={()=>{handleCloseModal();setAlert(false)}} variant="text" color="error">
                  Cancel
                </button>
              </Stack>
            </Box>
          </Modal>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
