import React from "react";
import Slideshow from "./Slideshow";

class Home extends React.Component {
  render() {
    return (
      <div className="footer">
        <Slideshow />
        <div className="footer-1">
          <h3> What we do</h3>
          <p>Tickets Management</p>
          <p>Event Management</p>
          <p>Sell unused Tickets</p>
          <p>Purchase Tickets</p>
        </div>
        <div className="footer-2">
          <h3> Who we help</h3>
          <p>Sales</p>
          <p>Marketing</p>
          <p>Finance & Compilance</p>
          <p>Ticket Administration</p>
        </div>
        <div className="footer-3">
          <h3> About us</h3>
          <p>Careers</p>
          <p>Awards & Recognition</p>
          <p>News & Press</p>
          <p>Blogs</p>
        </div>
        <div className="footer-4">
          <h3> Resources</h3>
          <p>When To Use Ticket Manager</p>
          <p>Testimonials</p>
          <p>Success Stories</p>
          <p>Customer Videos</p>
        </div>
      </div>
    );
  }
}

export default Home;
