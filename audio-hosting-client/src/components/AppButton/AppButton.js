import React from "react";
import { Button } from "@material-ui/core";
import clsx from "clsx";
import useStyles from "./styles";

export default function AppButton({ children, className, ...props }) {
  const classes = useStyles();

  return <Button
    className={clsx(classes.root, className)}
    variant="contained"
    color="primary"
    {...props}
  >
    {children}
  </Button>
}