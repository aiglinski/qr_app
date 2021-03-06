import React, { Fragment, useEffect } from "react";
import AddBtn from "../layout/AddBtn";
import Logs from "../logs/Logs";
import { connect } from "react-redux";

import Login from "./Login";

const Home = ({ employee: { authenticated, user } }) => {
  console.log(Date.now());

  return <Fragment>{authenticated ? <Logs /> : <Login />}</Fragment>;
};

const mapStateToProps = state => ({
  employee: state.employee
});
export default connect(mapStateToProps)(Home);
