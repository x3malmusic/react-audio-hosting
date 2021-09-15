import React, { useCallback, useEffect } from "react";
import debounce from "lodash.debounce";
import { TextField } from "@material-ui/core";
import clsx from "clsx";
import useStyles from "./styles";

export default function SearchInput({ setSearch, className, ...props }) {
  const classes = useStyles()

  const changeHandler = (e) => setSearch(e.target.value)

  const debouncedChangeHandler = useCallback(debounce(changeHandler, 500), []);

  useEffect(() => {
    return () => {setSearch("")}
  }, [setSearch])

  return (
    <TextField
      onChange={debouncedChangeHandler}
      className={clsx(classes.inputWrapper, className)}
      inputProps={{ className: classes.input }}
      variant="outlined"
      placeholder="Search songs..."
      {...props}
    />
  )
}