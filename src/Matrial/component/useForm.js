import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

export function UseForm(initialFValue) {
  const [values, setValues] = useState(initialFValue);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log({ name });
    setValues({
      ...values,
      [name]: value,
    });
  };

  return { values, setValues, handleInputChange };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export function Form({ children }) {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete="off">
      {children}
    </form>
  );
}
