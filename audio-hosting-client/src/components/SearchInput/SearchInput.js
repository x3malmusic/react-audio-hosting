import React, { useCallback, useEffect, useRef } from "react";
import debounce from "lodash.debounce";
import { TextField } from "@material-ui/core";
import clsx from "clsx";
import useStyles from "./styles";

export default function SearchInput({ setSearch, className, focusOnDisable, disabled, ...props }) {
  const classes = useStyles()
  const inputRef = useRef(null)

  const changeHandler = (e) => setSearch(e.target.value)

  const debouncedChangeHandler = useCallback(debounce(changeHandler, 500), []);

  useEffect(() => {
    return () => { setSearch("") }
  }, [setSearch])

  useEffect(() => {
    if (focusOnDisable && !disabled) inputRef.current.focus()
  }, [disabled, focusOnDisable])

  return (
    <TextField
      onChange={debouncedChangeHandler}
      className={clsx(classes.inputWrapper, className)}
      inputProps={{ className: classes.input, ref: inputRef }}
      variant="outlined"
      placeholder="Search songs..."
      disabled={disabled}
      {...props}
    />
  )
}