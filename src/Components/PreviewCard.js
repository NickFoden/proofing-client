import React from 'react';
import { Link } from 'react-router-dom';
import './Preview.css';

// const PreviewCard = {
//   render() {
//     return (
//       <div className="preview-card">
//         <Link className="album-links-preview" to={`/albums/${this.props.album.albumTitle}`}>
//           <h3> {this.props.album.albumTitle} </h3>
//           <h5> ({this.props.album.albumArray.length} photos)</h5>

//           <ul>
//             {this.props.album.albumArray.slice(0, 2).map((image, index) => (
//               <li key={index}>
//                 <img
//                   className="preview-thumbnails"
//                   src={image.image[0].secure_url}
//                   alt="thumbnails from album"
//                 />
//               </li>
//             ))}
//           </ul>
//         </Link>
//       </div>
//     );
//   },
// };

// export default PreviewCard;

class PreviewCard extends React.Component {
  render() {
    return (
      <div className="preview-card">
        <Link className="album-links-preview" to={`/albums/${this.props.album.albumTitle}`}>
          <h3> {this.props.album.albumTitle} </h3>
          <h5> ({this.props.album.albumArray.length} photos)</h5>

          <ul className="preview-card-ul">
            {this.props.album.albumArray.slice(0, 2).map((image, index) => (
              <li className="preview-card-li" key={index}>
                <img
                  className="preview-thumbnails"
                  src={image.image[0].secure_url}
                  alt="thumbnails from album"
                />
              </li>
            ))}
          </ul>
        </Link>
      </div>
    );
  }
}

export default PreviewCard;
