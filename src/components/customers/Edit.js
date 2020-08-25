import React from "react";
import axios from "axios";
import CustomerForm from "./Form";

class CustomerEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      customer: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://dct-ticket-master.herokuapp.com/customers/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const customer = response.data;
        this.setState({ customer });
      });
  }

  handleSubmit(dataForm) {
    const id = this.props.match.params.id;
    axios
      .put(`http://dct-ticket-master.herokuapp.com/customers/${id}`, dataForm, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        if (response.data.hasOwnProperty("errors")) {
          alert(response.data.message);
        } else {
          this.props.history.push(`/customers/${response.data._id}`);
        }
      });
  }
  render() {
    return (
      <div className="customer-edit">
        <h2 className="customer-edit-heading">Edit customers</h2>
        {Object.keys(this.state.customer).length !== 0 && (
          <CustomerForm
            customer={this.state.customer}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

export default CustomerEdit;
