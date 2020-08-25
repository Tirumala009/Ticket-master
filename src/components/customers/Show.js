import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faArrowLeft,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

class CustomerShow extends React.Component {
  constructor() {
    super();
    this.state = {
      customer: {},
    };
  }

  handleRemove = () => {
    const id = this.props.match.params.id;
    const confirmRemove = window.confirm("Are you sure ?");
    if (confirmRemove) {
      Axios.delete(`http://dct-ticket-master.herokuapp.com/customers/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      }).then((response) => {
        this.props.history.push("/customers");
      });
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get(`http://dct-ticket-master.herokuapp.com/customers/${id}`, {
      headers: {
        "x-auth": localStorage.getItem("authToken"),
      },
    })
      .then((response) => {
        const customer = response.data;
        this.setState({ customer });
      })
      .catch((err) => {
        return err;
      });
  }
  render() {
    return (
      <div>
        <br /> <br />
        <div class="customer-show">
          <h2>Customer Profile</h2>
          <ul>
            <li>Name : {this.state.customer.name}</li>
            <br />
            <li>Email : {this.state.customer.email}</li>
            <br />
            <li>Mobile : {this.state.customer.mobile}</li>
          </ul>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Link to={`/customers/edit/${this.state.customer._id}`}>
            <FontAwesomeIcon className="customer-show-edit" icon={faEdit} />
          </Link>{" "}
          &nbsp;
          <FontAwesomeIcon
            className="customer-show-delete"
            onClick={this.handleRemove}
            icon={faTrashAlt}
          />
          &nbsp;
          <Link to="/customers">
            <FontAwesomeIcon
              className="customer-show-back"
              icon={faArrowLeft}
            />
          </Link>
        </div>
        <div className="profile">
          <FontAwesomeIcon
            className="profile-icon"
            icon={faUserCircle}
            size="10x"
          />
        </div>
      </div>
    );
  }
}

export default CustomerShow;
