import React from "react";

class Slideshow extends React.Component {
  render() {
    return (
      <div className="slideshow-container">
        <div className="slide">
          <img
            src="https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="slide-image"
          />

          <img
            src="https://images.pexels.com/photos/1612353/pexels-photo-1612353.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="slide-image"
          />
          <img
            src="https://images.pexels.com/photos/2236713/pexels-photo-2236713.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="slide-image"
          />
          <img
            src=" https://images.pexels.com/photos/50686/antelope-canyon-canyon-freestone-colorful-50686.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="slide-image"
          />
          <img
            src=" https://images.pexels.com/photos/515414/pexels-photo-515414.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="slide-image"
          />
        </div>
      </div>
    );
  }
}

export default Slideshow;
