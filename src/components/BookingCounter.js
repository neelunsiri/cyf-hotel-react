import React from "react";

class BookingCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increaseBookingCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <button onClick={this.increaseBookingCount}>
          {this.props.buttonName}
        </button>
        <p>Already {this.state.count} booked out of a 100</p>
      </div>
    );
  }
}
export default BookingCounter;
