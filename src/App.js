import React from "react";
import CustomerList from "./components/customers/List";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import CustomerNew from "./components/customers/New";
import CustomerShow from "./components/customers/Show";
import CustomerEdit from "./components/customers/Edit";
import EmployeesList from "./components/Employees/List";
import DepartmentList from "./components/Departments/list";
import "./components/Styles/style.css";
import Contact from "./components/Profile/Contact";
import LoginForm from "./components/Profile/Login";

import EmployeesNew from "./components/Employees/New";

import TicketsList from "./components/Tickets/List";

import Home from "./components/Home/Home";

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav-bar">
          <Link className="nav-link-title"> Ticket Master</Link>
          <Link className="nav-link-1" to="/">
            {" "}
            Home &nbsp; &nbsp;
          </Link>{" "}
          <Link className="nav-link" to="/customers">
            {" "}
            Customers &nbsp; &nbsp;{" "}
          </Link>{" "}
          <Link className="nav-link" to="/departments">
            {" "}
            Departments&nbsp; &nbsp;{" "}
          </Link>{" "}
          <Link className="nav-link" to="/employees">
            {" "}
            Employees &nbsp; &nbsp;{" "}
          </Link>{" "}
          <Link className="nav-link" to="/tickets">
            {" "}
            Tickets{" "}
          </Link>
          <Link className="nav-profile">
            {" "}
            <FontAwesomeIcon icon={faUserCircle} /> &nbsp; Profile &nbsp;
          </Link>
          <Link to="/contact" className="nav-link-2">
            Contact Us &nbsp; &nbsp;
          </Link>
          <Link to="/login" className="nav-link-2">
            Login &nbsp; &nbsp;
          </Link>
        </div>

        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/customers" component={CustomerList} exact={true} />
          <Route path="/customers/new" component={CustomerNew} />
          <Route
            path="/customers/edit/:id"
            component={CustomerEdit}
            exact={true}
          />
          <Route path="/customers/:id" component={CustomerShow} />
          <Route path="/departments" component={DepartmentList} exact={true} />
          <Route path="/employees" component={EmployeesList} exact={true} />
          <Route path="/employees/new" component={EmployeesNew} />
          <Route path="/tickets" component={TicketsList} exact={true} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
