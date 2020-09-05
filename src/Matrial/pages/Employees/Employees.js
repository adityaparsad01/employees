import React from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../component/PageHeader";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const Employees = () => {
  const classes = useStyles();
  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form Design"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
};

export default Employees;
