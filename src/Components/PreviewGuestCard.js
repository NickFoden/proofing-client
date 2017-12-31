import React from "react";
import { Link } from "react-router-dom";
import "./Preview.css";

class PreviewCard extends React.Component {
  render() {
    return (
      <div className="preview-card">
        <Link
          className="album-links-preview"
          to={`/albums/guest/${this.props.album.albumTitle}`}
        >
          {this.props.album.albumTitle}
          <ul>
            {this.props.album.albumArray.slice(0, 4).map((image, index) => (
              <li key={index}>
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
