import React from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Typography } from "@material-ui/core";
import { Formik } from 'formik';
import { loginSchema } from "../../utils/validationSchemas";
import AppButton from "../../components/AppButton/AppButton";
import useStyles from "./styles";

export default function Login({ login }) {
  const classes = useStyles();

  const loginUser = ({ email, password }) => login({ email, password });

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
            />

            <Box className={classes.controlsContainer}>
              <AppButton onClick={handleSubmit} className={classes.btn}>Login</AppButton>
              <Box display="flex" alignItems="center">
                <Typography>No account?</Typography>
                <Link className={classes.link} to="/register">Register</Link>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Formik>
  )
}