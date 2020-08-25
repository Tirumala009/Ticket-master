import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEye } from "@fortawesome/free-solid-svg-icons";

class CustomerList extends React.Component {
  constructor() {
    super();
    this.state = {
      customers: [],
    };
  }

  handleRemove = (id) => {
    const confirmRemove = window.confirm("Are you sure?");
    if (confirmRemove) {
      axios
        .delete(`http://dct-ticket-master.herokuapp.com/customers/${id}`, {
          headers: {
            "x-auth": localStorage.getItem("authToken"),
          },
        })
        .then((response) => {
          console.log(response.data);
          this.setState((prevState) => {
            return {
              customers: prevState.customers.filter(
                (customer) => customer._id !== response.data._id
              ),
            };
          });
        });
    }
  };

  componentDidMount() {
    axios
      .get("http://dct-ticket-master.herokuapp.com/customers", {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        // console.log(response.data);
        const customers = response.data;
        this.setState({ customers });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="customer-list">
        <h2> Listing Customers - {this.state.customers.length}</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((customer, i) => {
              return (
                <tr key={customer._id}>
                  <td>{i + 1} </td>
                  <td>{customer.name} </td>
                  <td>{customer.email}</td>
                  <td>{customer.mobile}</td>

                  <td>
                    <Link to={`/customers/${customer._id}`}>
                      {" "}
                      <FontAwesomeIcon icon={faEye} />
                    </Link>{" "}
                    <FontAwesomeIcon
                      className="delete-icon"
                      onClick={() => {
                        this.handleRemove(customer._id);
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

        <Link to="/customers/new">
          {" "}
          <button class="add">Add Customers</button>{" "}
        </Link>
        <br />
      </div>
    );
  }
}

export default CustomerList;
