import React from "react";
import EmployeesForm from "./Form";
import Axios from "axios";

class EmployeesNew extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
    };
  }

  handleSubmit = (dataForm) => {
    Axios.post("http://dct-ticket-master.herokuapp.com/employees", dataForm, {
      headers: {
        "x-auth": localStorage.getItem("authToken"),
      },
    }).then((response) => {
      console.log(response.data);
      if (response.data.hasOwnProperty("errors")) {
        alert(response.data.message);
      } else {
        this.props.history.push("/employees");
      }
    });
  };

  render() {
    return (
      <div>
        <h2 className="employees-add">Add Employees</h2>
        <EmployeesForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EmployeesNew;
