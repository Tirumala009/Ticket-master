import React from "react";
import Axios from "axios";
import DepartmentForm from "./Form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

class DepartmentList extends React.Component {
  constructor() {
    super();
    this.state = {
      departments: [],
      isEdit: false,
      editId: "",
      name: "",
      nameEdit: "",
    };
  }

  handleSubmit = (dataForm) => {
    console.log("list");
    Axios.post("http://dct-ticket-master.herokuapp.com/departments", dataForm, {
      headers: {
        "x-auth": localStorage.getItem("authToken"),
      },
    }).then((response) => {
      if (response.data.hasOwnProperty("errors")) {
        alert(response.data.message);
      } else {
        const department = response.data;
        this.setState((prevState) => ({
          departments: prevState.departments.concat(department),
        }));
      }
    });
  };

  handleRemove = (id) => {
    const confirmRemove = window.confirm("Are you sure ?");
    if (confirmRemove) {
      Axios.delete(`http://dct-ticket-master.herokuapp.com/departments/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      }).then((response) => {
        this.setState((prevState) => ({
          departments: prevState.departments.filter(
            (department) => department._id !== response.data._id
          ),
        }));
      });
    }
  };

  componentDidMount() {
    Axios.get("http://dct-ticket-master.herokuapp.com/departments", {
      headers: {
        "x-auth": localStorage.getItem("authToken"),
      },
    })
      .then((response) => {
        console.log(response.data);
        const departments = response.data;
        this.setState({ departments });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleEdit = (e, id, name) => {
    this.setState({
      isEdit: true,
      editId: id,
      nameEdit: name,
    });
  };

  handleChange = (e, id) => {
    this.setState({
      nameEdit: e.target.value,
    });
  };

  handleUpdate = (e, id) => {
    const dataForm = {
      name: this.state.nameEdit,
    };
    Axios.put(
      `http://dct-ticket-master.herokuapp.com/departments/${id}`,
      dataForm,
      {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      }
    ).then((response) => {
      this.setState({ isEdit: false });
      this.componentDidMount();
    });
  };

  handleCancel = (e, id) => {
    this.setState({
      isEdit: false,
    });
  };

  render() {
    return (
      <div className="department-list">
        <h3> Add Departments </h3>
        <DepartmentForm handleSubmit={this.handleSubmit} />
        <h2>Departments List - {this.state.departments.length}</h2>

        <table>
          <thead>
            <tr>
              <th> Id </th>
              <th> Department Name </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {this.state.departments.map((department, i) => {
              return (
                <tr key={department._id}>
                  <td> {i + 1}</td>
                  <td>
                    {" "}
                    {this.state.isEdit &&
                    this.state.editId === department._id ? (
                      <div>
                        <input
                          type="text"
                          onChange={(e) => {
                            this.handleChange(e, department._id);
                          }}
                          value={this.state.nameEdit}
                        />
                        <FontAwesomeIcon
                          className="dep-update-icon"
                          onClick={(e) => {
                            this.handleUpdate(e, department._id);
                          }}
                          icon={faCheck}
                        />

                        <FontAwesomeIcon
                          className="dep-cancel-icon"
                          onClick={(e) => {
                            this.handleCancel(e, department._id);
                          }}
                          icon={faTimes}
                        />
                      </div>
                    ) : (
                      department.name
                    )}
                  </td>
                  <td>
                    <FontAwesomeIcon
                      className="depepartment-edit"
                      onClick={(e) => {
                        this.handleEdit(e, department._id, department.name);
                      }}
                      icon={faEdit}
                    />

                    <FontAwesomeIcon
                      className="depepartment-delete"
                      onClick={() => {
                        this.handleRemove(department._id);
                      }}
                      icon={faTrashAlt}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
      </div>
    );
  }
}

export default DepartmentList;
