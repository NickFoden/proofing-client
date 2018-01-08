import React from 'react';
import './Images.css';

const GuestAlbumCaption = image => (
  <div className="guest-album-caption">
    <h4>Approved by: </h4>
    <p>{[...new Set(image.image.guestApproved)].map(name => `${name} `)}</p>
  </div>
);

export default GuestAlbumCaption;

// import React from "react";
// import "./Images.css";

// const GuestAlbumCaption = image => {
//   return (
//     <div className="guest-album-caption">
//       <h4>Approved by: </h4>
//       <p>{[...new Set(image.image.guestApproved)].map(name => name + " ")}</p>
//     </div>
//   );
// };

// export default GuestAlbumCaption;
