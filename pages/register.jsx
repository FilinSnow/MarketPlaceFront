import React, { useState } from "react";
import { connect } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { Box } from "@mui/material";
import { useRouter } from "next/dist/client/router";

const RegisterAuth = (props) => {
  const [data, setData] = useState({
    username: '',
    password: '',
    repPassword: ''
  });
  const { username, password, repPassword } = data;
  const [errorLogin, setErrorLogin] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [errorRepPass, setErrorRepPass] = useState(false);
  const [open, setOpen] = useState(false);

  const history = useRouter();

  const goLoginPage = () => {
    history.push('/login')
  };

  const changeDataAuth = (nameInput, value) => {
    switch (nameInput) {
      case 'username': {
        if (!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i.test(value) || value.length < 6) {
          setErrorLogin(true);
        } else {
          setErrorLogin(false);
        }
        setData({
          ...data,
          username: value,
        });
        break;
      }
      case 'password': {
        if (!/^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/i.test(value)
          || value.length < 6
        ) {
          setErrorPass(true);
        } else {
          setErrorPass(false);
        }
        setData({
          ...data,
          password: value,
        });
        break;
      }
      case 'repPassword': {
        if (data.password !== value) {
          setErrorRepPass(true);
        } else {
          setErrorRepPass(false);
        }
        setData({
          ...data,
          repPassword: value,
        });
        break;
      }
      default: {
        return 1;
      }
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const Alert = React.forwardRef((props, ref) => {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const theme = createTheme({
    palette: {
      primary: {
        bd: grey[900],
        // Purple and green play nicely together.
        main: grey[400],
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
      overrides: {
        MuiButton: {
          raisedPrimary: {
            color: 'white',
          },
        },
      }
    },
  });

  return (
    <div className='container__auth register'>
      <div className="auth__main">
        <div className="main__auth">
          <form className='form__auth'>
            <h3>Register</h3>
            <div className='input-form'>
              <label>
                Email:
                {
                  username.length
                  && errorLogin
                  ? <span className='error'>
                    Email is less then 6
                  </span>
                  : null
                }
                <div>
                  <input type="text"
                    name="username"
                    placeholder='Login'
                    value={username}
                    className={
                      username.length && errorLogin && 'errorInput'
                    }
                    onChange={(e) =>
                      changeDataAuth(e.target.name, e.target.value)
                    }
                  />
                </div>
              </label>
            </div>
            <div className='input-form'>
              <label>
                Password:
                {
                  password
                  && errorPass
                  ? <span className='error'>
                    Password is
                    less than 6 not contain
                    latin letters not contain
                    1 number
                  </span>
                  : null
                }
                <div>
                  <input type="password"
                    name="password"
                    placeholder='Password'
                    className={
                      password && errorPass && 'errorInput'
                    }
                    value={password}
                    onChange={(e) =>
                      changeDataAuth(e.target.name,
                        e.target.value)
                    }
                  />
                </div>
              </label>
            </div>
            <div className='input-form'>
              <label>
                Repeat Password:
                {
                  repPassword
                  && errorRepPass
                  && <span className='error'>
                    Password different
                  </span>
                }
                <div>
                  <input type="password"
                    name="repPassword"
                    placeholder='Password'
                    value={repPassword}
                    className={
                      repPassword && errorRepPass && 'errorInput'
                    }
                    onChange={(e) =>
                      changeDataAuth(e.target.name, e.target.value)
                    }
                  />
                </div>
              </label>
            </div>
            <Box sx={{
              display: 'flex',
              justifyContent: 'end',
              marginTop: '15px'
            }}>
              <ThemeProvider theme={theme}>
                <Button
                  sx={{
                    color: "black",
                    textTransform: 'none'
                  }}
                  variant="outlined"
                  disabled={
                    !(username
                      && password
                      && password === repPassword)
                  }
                >
                  Register
                </Button>
              </ThemeProvider>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'end'
            }
            }
            >
              <ThemeProvider theme={theme}>
                <Button onClick={() => goLoginPage()}
                  sx={{
                    color: "black",
                    textTransform: 'none'
                  }}
                  variant="text"
                >
                  Login
                </Button>
              </ThemeProvider>
            </Box>
          </form>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              Such user already exists
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}

export default RegisterAuth;