import React from "react";
import CardItem from "../components/Card";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const Home = () => {
  return (
    <div>
      <CardItem />
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Here is a gentle confirmation that your action was successful.
      </Alert>
    </div>
  );
};

export default Home;
