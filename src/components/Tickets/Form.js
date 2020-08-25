import React from "react";
import { Link } from "react-router-dom";
class TicketsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      tickets: [],
      employeesList: [],
      code: "",
      customer: "",
      employees: "",
      department: "",
      priority: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleReset = () => {
    this.setState({
      code: "",
      customer: "",
      department: "",
      employees: "",
      priority: "",
      message: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const dataForm = {
      code: `${Math.random().toString().substr(2, 5)}`,
      customer: this.state.customer,
      department: this.state.department,
      employees: [
        {
          _id: this.state.employees,
        },
      ],
      priority: this.state.priority,
      message: this.state.message,
    };
    this.setState({
      code: "",
      customer: "",
      department: "",
      employees: "",
      priority: "",
      message: "",
    });
    console.log(dataForm);
    this.props.handleSubmit(dataForm);
  };
  render() {
    return (
      <div className="form-4">
        <h2>Add ticket</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Customer Name : &nbsp;
            <select
              className="ticket-select"
              value={this.state.customer}
              onChange={this.handleChange}
              name="customer"
            >
              {this.props.customers.map((customer) => {
                return (
                  <option key={customer._id} value={customer._id}>
                    {customer.name}
                  </option>
                );
              })}
            </select>
          </label>
          <br />
          <label>
            <Link to="/customers/new">
              {" "}
              <button class="add">Add Customers</button>{" "}
            </Link>
          </label>
          <br /> <br />
          <label>
            Department : &nbsp;
            <select
              className="ticket-select"
              value={this.state.department}
              onChange={this.handleChange}
              name="department"
            >
              {this.props.departments.map((department) => {
                return (
                  <option key={department._id} value={department._id}>
                    {department.name}
                  </option>
                );
              })}
            </select>
          </label>
          <br /> <br />
          <label>
            Employee Name : &nbsp;
            <select
              className="ticket-select"
              value={this.state.employees}
              onChange={this.handleChange}
              name="employees"
            >
              {this.props.employeesList.map((employees) => {
                return (
                  <option key={employees._id} value={employees._id}>
                    {employees.name}
                  </option>
                );
              })}
            </select>
          </label>
          <br /> <br />
          <label>
            Priority : &nbsp;
            <input
              type="radio"
              value="high"
              onChange={this.handleChange}
              name="priority"
            />
            High
            <input
              type="radio"
              value="medium"
              onChange={this.handleChange}
              name="priority"
            />
            Medium
            <input
              type="radio"
              value="low"
              onChange={this.handleChange}
              name="priority"
            />
            Low
          </label>
          <br />
          <br />
          <label>
            Message :<br />
            <textarea type="text" onChange={this.handleChange} name="message" />
          </label>
          <br />
          <input type="submit" />
          &nbsp; &nbsp;
          <input type="Reset" onClick={this.handleReset} />
        </form>
      </div>
    );
  }
}

export default TicketsForm;
