import React from "react";

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.customer ? props.customer.name : "",
      email: props.customer ? props.customer.email : "",
      mobile: props.customer ? props.customer.mobile : "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const dataForm = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
    };
    console.log(dataForm);
    this.props.handleSubmit(dataForm);
  }

  render() {
    return (
      <div className="form-1">
        <form cclassName="form-1" onSubmit={this.handleSubmit}>
          <label>
            Name : &nbsp;&nbsp;
            <input
              type="text"
              placeholder="name...."
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
          </label>
          <br />
          <label>
            Email : &nbsp;{" "}
            <input
              type="text"
              placeholder="email..."
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
          </label>
          <br />
          <label>
            Mobile :&nbsp;{" "}
            <input
              type="text"
              placeholder="mobile..."
              value={this.state.mobile}
              onChange={this.handleChange}
              name="mobile"
            />
          </label>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CustomerForm;
