import React from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Typography } from "@material-ui/core";
import { Formik } from 'formik';
import { loginSchema } from "../../utils/validationSchemas";
import LoginButton from "../../containers/LoginButton";
import { REGISTER_PAGE } from "../../routes/pathnames";
import useStyles from "./styles";

export default function Login({ login, isLoading }) {
  const classes = useStyles();

  const loginUser = ({ email, password }) => login({ email, password });

  const keyListener = (e, submit) => {
    if (e.key === "Enter") submit()
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={loginUser}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, values, handleChange, handleSubmit, touched }) => (
        <Box className={classes.login}>
          <Box>
            <Typography className={classes.title}>Login</Typography>
          </Box>
          <Box className={classes.form}>

            <Typography className={classes.errorMessage} color="error">{touched.email && errors.email}</Typography>
            <TextField
              id="email"
              value={values.email}
              onChange={handleChange}
              className={classes.input}
              variant="outlined"
              label="Email"
              error={!!errors.email}
              onKeyUp={e => keyListener(e, handleSubmit)}
            />

            <Typography className={classes.errorMessage} color="error">{touched.password && errors.password}</Typography>
            <TextField
              id="password"
              value={values.password}
              type="password"
              onChange={handleChange}
              className={classes.input}
              variant="outlined"
              label="Password"
              error={!!errors.password}
              onKeyUp={e => keyListener(e, handleSubmit)}
            />

            <Box className={classes.controlsContainer}>
              <LoginButton 
                onSave={handleSubmit}
                className={classes.btn}
                title="Login"
                titleOnLoading="Logging In..."
              />
              <Box display="flex" alignItems="center">
                <Typography>No account?</Typography>
                <Link className={classes.link} to={REGISTER_PAGE}>Register</Link>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Formik>
  )
}