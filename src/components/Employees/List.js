import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class EmployeesList extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    Axios.get("http://dct-ticket-master.herokuapp.com/employees", {
      headers: {
        "x-auth": localStorage.getItem("authToken"),
      },
    }).then((response) => {
      console.log(response.data);
      const employees = response.data;
      this.setState({ employees });
    });
  }

  handleRemove = (id) => {
    const confirmRemove = window.confirm("Are you sure?");
    if (confirmRemove) {
      Axios.delete(`http://dct-ticket-master.herokuapp.com/employees/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      }).then((response) => {
        this.setState((prevState) => {
          return {
            employees: prevState.employees.filter(
              (employee) => employee._id !== response.data._id
            ),
          };
        });
      });
    }
  };

  render() {
    return (
      <div className="employees-list">
        <h2> Employees List - {this.state.employees.length}</h2>
        <table>
          <thead>
            <tr>
              <th>Id </th>
              <th>Name</th>
              <th> Email</th>
              <th>Mobile </th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee, i) => {
              return (
                <tr key={employee._id}>
                  <td>{i + 1} </td>
                  <td>{employee.name} </td>
                  <td>{employee.email} </td>
                  <td>{employee.mobile} </td>
                  <td>{employee.department.name} </td>
                  <td>
                    <FontAwesomeIcon
                      className="delete-icon"
                      onClick={() => {
                        this.handleRemove(employee._id);
                      }}
                      icon={faTrashAlt}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>{" "}
        <br /> <br />{" "}
        <Link to="/employees/new">
          {" "}
          <button class="add">Add Employee</button>{" "}
        </Link>{" "}
      </div>
    );
  }
}

export default EmployeesList;
