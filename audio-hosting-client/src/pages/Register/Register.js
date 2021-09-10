import React from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Typography } from "@material-ui/core";
import { Formik } from 'formik';
import AppButton from "../../components/AppButton/AppButton";
import useStyles from "./styles";
import { registerSchema } from "../../utils/validationSchemas";

export default function Register({ register }) {
  const classes = useStyles();

  const registerUser = ({ email, password, repeatPassword }) => {
    if (password === repeatPassword) {
      register({ email, password })
    }
  }

  return (
    <Formik
      initialValues={{ email: '', password: '', repeatPassword: '' }}
      validationSchema={registerSchema}
      onSubmit={registerUser}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, values, handleChange, handleSubmit, touched }) => (
        <Box className={classes.register}>
          <Box>
            <Typography className={classes.title}>Register</Typography>
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

            <Typography className={classes.errorMessage} color="error">{touched.repeatPassword && errors.repeatPassword}</Typography>
            <TextField
              id="repeatPassword"
              value={values.repeatPassword}
              type="password"
              onChange={handleChange}
              className={classes.input}
              variant="outlined"
              label="Repeat Password"
              error={!!errors.repeatPassword}
            />

            <Box className={classes.controlsContainer}>
              <AppButton onClick={handleSubmit} className={classes.btn}>Register</AppButton>
              <Box display="flex" alignItems="center">
                <Typography>Already have an account?</Typography>
                <Link className={classes.link} to="/login">Login</Link>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Formik>
  )
}