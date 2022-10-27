import React, { useState, useRef, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useAppContext from "../app-context";
import { variables } from "../variables";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Image from "../backgroundLogin.jpg"; // Import using relative path

const styles = {
    paperContainer: {
       backGroundColor: "black",
       height: "61vh",
       marginTop: "5%"
    },
    form: {
      boxShadow: "1px 2px 28px whitesmoke",
      padding: "14px"
    },
    formField: {
      border: "1px solid purple",
      opacity: "30%",
      borderRadius: "10px",
      "&input": {
        color: "purple"
      }            
    },
  placeholder: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '100%',
    color: 'whitesmoke'
  } 
};

function Login() {
  const {setLoggedIn, loggedIn} = useAppContext();
  
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = new FormData(formRef.current);

    const email = data.get("email");
    const password = data.get("password");
    const url = variables.API_URL + "Account";

    const params = {
      "email": email,
      "password": password
    };

    axios.post(url, params, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then(() => {
       alert("Success!");
       setLoggedIn(true);              
    })
  };

  if (loggedIn === true) {
    return <Navigate to="/portal" />;
  }

  return (   
        <div style={styles.paperContainer}>                       
        <Container component="main" maxWidth="xs">
         
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{color: "purple"}}>
              Contact Us!
            </Typography>
            <Box
              component="form"
              ref={formRef}
              onSubmit={handleSubmit}            
              noValidate
              sx={{ mt: 1 }}
              style={styles.form}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                color="secondary"
                style={styles.formField}
                InputProps={{
                  style: {
                    color: "whitesmoke"
                  }
                }}           
                InputLabelProps={{
                  style: 
                   styles.placeholder
                  }}
                
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Full Name"
                label="Full Name"
                type="password"
                id="name"
                color="secondary"
                autoComplete="name"
                style={styles.formField}
                InputProps={{
                  style: {
                    color: "whitesmoke"
                  }
                }} 
                InputLabelProps={{
                  style: styles.placeholder
                   }}
              />
                <TextField
                margin="normal"
                required
                fullWidth
                name="info"
                label="Comments"
                type="comments"
                id="comments"
                color="secondary"
                autoComplete="comments"
                style={styles.formField}
                InputProps={{
                  style: {
                    color: "whitesmoke"
                  }
                }} 
                InputLabelProps={{
                  style: styles.placeholder
                   }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Contact
              </Button>
        
               
           
            </Box>
          </Box>
        </Container>
      </div>
  );
}

export default Login;
