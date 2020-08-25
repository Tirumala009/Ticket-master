import React from "react";
import CustomerForm from "./Form";
import Axios from "axios";

class CustomerNew extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(dataForm) {
    Axios.post("http://dct-ticket-master.herokuapp.com/customers", dataForm, {
      headers: {
        "x-auth": localStorage.getItem("authToken"),
      },
    })
      .then((response) => {
        // console.log(response.data);
        if (response.data.hasOwnProperty("error")) {
          alert(response.data.message);
        } else {
          this.props.history.push("/customers");
        }
      })
      .catch((err) => {
        return err;
      });
  }

  render() {
    return (
      <div className="add-customer">
        <h2 className="add-customer-heading"> Add Customer </h2>
        <CustomerForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default CustomerNew;
