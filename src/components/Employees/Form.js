import React from "react";
import Axios from "axios";

class EmployeesForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      mobile: "",
      department: "",
      departments: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const dataForm = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      department: this.state.department,
    };
    console.log(dataForm);
    this.props.handleSubmit(dataForm);
  };

  componentDidMount() {
    Axios.get("http://dct-ticket-master.herokuapp.com/departments", {
      headers: {
        "x-auth": localStorage.getItem("authToken"),
      },
    }).then((response) => {
      const departments = response.data;
      this.setState({ departments });
    });
  }

  render() {
    return (
      <div>
        <form className="form-3" onSubmit={this.handleSubmit}>
          <label>
            Name :{" "}
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
          </label>
          <br />
          <label>
            Email : &nbsp;
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
          </label>
          <br />
          <label>
            Mobile :{" "}
            <input
              type="text"
              value={this.state.mobile}
              onChange={this.handleChange}
              name="mobile"
            />
          </label>
          <br />
          <label>
            Departments :
            <select
              className="employees-select"
              value={this.state.department}
              onChange={this.handleChange}
              name="department"
            >
              {this.state.departments.map((department) => {
                return (
                  <option key={department._id} value={department._id}>
                    {department.name}
                  </option>
                );
              })}
            </select>
          </label>

          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default EmployeesForm;
