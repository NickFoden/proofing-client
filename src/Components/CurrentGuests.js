import React from 'react';
import { connect } from 'react-redux';
import './CurrentGuests.css';

class CurrentGuests extends React.Component {
  render() {
    return (
      <div className="list-of-guests">
        <h4 className="current-guests-list-title">Current Guests: </h4>
        <ul className="current-guests-list">
          {this.props.people.map((name, index) => (
            <li key={index} className="current-guests-list-items">
              <h4>{name}</h4>{' '}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    people: state.photoAlbumReducer.currentAlbum.guests,
  };
}
export default connect(mapStateToProps)(CurrentGuests);
