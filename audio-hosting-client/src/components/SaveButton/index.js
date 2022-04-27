import React from "react";
import clsx from "clsx";
import { CircularProgress } from "@material-ui/core";

import AppButton from "../../components/AppButton"
import useStyles from "./styles";

export default function SaveButton({ title, titleOnLoading = 'Saving...', className, disabled, isLoading, onSave }) {
  const classes = useStyles()

  return <AppButton
    className={clsx(classes.root, className)}
    disabled={disabled || isLoading}
    onClick={onSave}
  >
    {!isLoading && title}
    {isLoading && titleOnLoading}
    {isLoading && <CircularProgress className={classes.loading} size={14} />}
  </AppButton>
}