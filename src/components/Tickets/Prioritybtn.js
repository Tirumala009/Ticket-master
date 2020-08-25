import React from "react";

class PriorityBtn extends React.Component {
  handleClick = (e) => {
    if (e.target.name === "low") {
      let tickets = this.props.tickets;
      tickets = tickets.filter((ticket) => ticket.priority === "low");
      this.props.handlePriorityBtn(tickets);
    } else if (e.target.name === "high") {
      let tickets = this.props.tickets;
      tickets = tickets.filter((ticket) => ticket.priority === "high");
      this.props.handlePriorityBtn(tickets);
    } else if (e.target.name === "medium") {
      let tickets = this.props.tickets;
      tickets = tickets.filter((ticket) => ticket.priority === "medium");
      this.props.handlePriorityBtn(tickets);
    } else if (e.target.name === "all") {
      let tickets = this.props.tickets;
      this.props.handlePriorityBtn(tickets);
    }
  };

  render() {
    return (
      <div>
        <button onClick={(e) => this.handleClick(e)} name="all">
          {" "}
          All
        </button>
        <button onClick={(e) => this.handleClick(e)} name="high">
          {" "}
          High
        </button>
        <button onClick={(e) => this.handleClick(e)} name="medium">
          {" "}
          Medium
        </button>
        <button onClick={(e) => this.handleClick(e)} name="low">
          {" "}
          Low
        </button>
      </div>
    );
  }
}

export default PriorityBtn;
