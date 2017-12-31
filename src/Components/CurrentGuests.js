import React from "react";
import "./Images.css";

const CurrentGuests = props => {
  debugger;
  //   let CurrentGuests = (
  //     <div>
  //       <ul>{guests.map(name => <li key="name">name + " "</li>)}</ul>{" "}
  //     </div>
  //   );

  return (
    <div className="list-of-guests">
      <h4>Current Guests: </h4>
      <p>This will be a list of guests invited to this album.</p>
    </div>
  );
};

export default CurrentGuests;
