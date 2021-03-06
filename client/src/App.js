import React, { useEffect, Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import { Provider } from "react-redux";
import store from "./store";

import Admin from "./layout/admin/pages/Admin";
import ClockOutBtn from "./layout/ClockOutBtn";
import ClockOutModal from "./layout/modals/ClockOutModal";
import Home from "./pages/Home";
import AddLogModal from "./layout/modals/AddLogModal";
import EditLogModal from "./layout/modals/EditLogModal";
import SignInModal from "./layout/modals/SignInModal";
import DetailLogModal from "./layout/modals/ItemDetailModal";
import AddEmpModal from "./layout/admin/AddEmpModal";
import TechListModal from "./layout/admin/TechListModal";
import SaleModal from "./layout/modals/SaleModal";
import ReceivingModal from "./layout/modals/ReceivingModal";
import M from "materialize-css/dist/js/materialize.min.js";
import AdminBtn from "./layout/admin/AdminBtn";
import AddBtn from "./layout/AddBtn";
import SearchBar from "./layout/SearchBar";

import "./App.css";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <Router>
            <AddLogModal />
            <AddEmpModal />
            <DetailLogModal />
            <ReceivingModal />
            <TechListModal />
            <EditLogModal />
            <ClockOutModal />
            <SaleModal />
            <SignInModal />
            <AdminBtn />
            <AddBtn />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/admin" component={Admin} />
            </Switch>
          </Router>
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
