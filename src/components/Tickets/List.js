import React from "react";
import Axios from "axios";
import TicketsForm from "./Form";
import PriorityBtn from "./Prioritybtn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class TicketsList extends React.Component {
  constructor() {
    super();
    this.state = {
      tickets: [],
      employeesList: [],
      customers: [],
      departments: [],
    };
    this.data = {
      tickets: [],
    };
  }

  handlePriorityBtn = (tickets) => {
    this.setState({ tickets: tickets });
  };

  handleStatus = (e, id) => {
    Axios.put(
      `http://dct-ticket-master.herokuapp.com/tickets/${id}`,
      {
        isResolved: e.target.checked,
      },
      {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      }
    )
      .then((response) => {
        const tickets = this.state.tickets.map((ticket) => {
          if (ticket._id === response.data._id) {
            ticket.isResolved = response.data.isResolved;
            return ticket;
          } else {
            return ticket;
          }
        });
        this.setState({ tickets });
      })
      .catch((err) => {
        alert(err);
      });
  };

  componentDidMount() {
    Axios.get("http://dct-ticket-master.herokuapp.com/tickets", {
      headers: {
        "x-auth": localStorage.getItem("authToken"),
      },
    }).then((response) => {
      console.log(response.data);
      const tickets = response.data;
      this.setState({ tickets });
    });
    Axios.get("http://dct-ticket-master.herokuapp.com/employees", {
      headers: {
        "x-auth": localStorage.getItem("authToken"),
      },
    }).then((response) => {
      const employeesList = response.data;
      this.setState({
        employeesList,
      });
    });
    Axios.get("http://dct-ticket-master.herokuapp.com/customers", {
      headers: {
        "x-auth": localStorage.getItem("authToken"),
      },
    }).then((response) => {
      const customers = response.data;
      this.setState({
        customers,
      });
    });
    Axios.get("http://dct-ticket-master.herokuapp.com/departments", {
      headers: {
        "x-auth": localStorage.getItem("authToken"),
      },
    }).then((response) => {
      const departments = response.data;
      this.setState({
        departments,
      });
    });
  }

  handleEmployeeName = (eid) => {
    const e = this.state.employeesList.find((employee) => {
      return employee._id === eid;
    });

    if (e) {
      return e.name;
    } else {
      return "";
    }
  };
  handleDepartmentName = (did) => {
    const d = this.state.departments.find((department) => {
      return department._id === did;
    });
    if (d) {
      return d.name;
    } else {
      return "";
    }
  };

  handleCustomerName = (cid) => {
    const c = this.state.customers.find((customer) => {
      return customer._id === cid;
    });
    if (c) {
      return c.name;
    } else {
      return "";
    }
  };

  handleSubmit = (dataForm) => {
    Axios.post("http://dct-ticket-master.herokuapp.com/tickets", dataForm, {
      headers: {
        "x-auth": localStorage.getItem("authToken"),
      },
    }).then((response) => {
      console.log(response.data);
      const ticket = response.data;
      this.setState((prevState) => {
        return {
          tickets: prevState.tickets.concat(ticket),
        };
      });
    });
  };

  handleRemove = (id) => {
    const confirmRemove = window.confirm("Are you sure?");
    if (confirmRemove) {
      Axios.delete(`http://dct-ticket-master.herokuapp.com/tickets/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      }).then((response) => {
        this.setState((prevState) => {
          return {
            tickets: prevState.tickets.filter(
              (ticket) => ticket._id !== response.data._id
            ),
          };
        });
      });
    }
  };

  render() {
    return (
      <div className="ticket-list">
        <div>
          <h3> Seach based on priority</h3>
          <PriorityBtn
            tickets={this.state.tickets}
            handlePriorityBtn={this.handlePriorityBtn}
          />
        </div>
        <h2>Tickets Lists - {this.state.tickets.length}</h2>
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Customer Name </th>
              <th>Employee Name </th>
              <th>Department</th>
              <th>Priority</th>
              <th>Message</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tickets.map((ticket) => {
              return (
                <tr key={ticket._id}>
                  <td>Tk-{ticket.code}</td>
                  <td>{this.handleCustomerName(ticket.customer)}</td>
                  <td>{this.handleEmployeeName(ticket.employees[0]._id)}</td>
                  <td>{this.handleDepartmentName(ticket.department)}</td>
                  <td>{ticket.priority}</td>
                  <td>{ticket.message}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={ticket.isResolved}
                      onChange={(e) => {
                        this.handleStatus(e, ticket._id);
                      }}
                    />
                  </td>
                  <td>
                    <FontAwesomeIcon
                      className="ticke-delete-icon"
                      onClick={() => {
                        this.handleRemove(ticket._id);
                      }}
                      icon={faTrashAlt}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <TicketsForm
          customers={this.state.customers}
          employeesList={this.state.employeesList}
          departments={this.state.departments}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default TicketsList;
