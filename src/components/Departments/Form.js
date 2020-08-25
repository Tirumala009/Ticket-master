import React from "react";

class DepartmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.department ? props.department.name : "",
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
    };
    console.log(dataForm);
    this.props.handleSubmit(dataForm);
  };
  render() {
    return (
      <div>
        <form className="form-2" onSubmit={this.handleSubmit}>
          <label>
            {" "}
            Department Name :{" "}
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              name="name"
            />{" "}
          </label>

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default DepartmentForm;
