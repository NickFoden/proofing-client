import React from "react";
import { connect } from "react-redux";
import "./Images.css";

class CurrentGuests extends React.Component {
  render() {
    return (
      <div className="list-of-guests">
        <h4>Current Guests: </h4>
        <ul>
          {this.props.people.map((name, index) => (
            <li key={index}>
              <p>{name} </p>{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    people: state.photoAlbumReducer.currentAlbum.guests
  };
}
export default connect(mapStateToProps)(CurrentGuests);
