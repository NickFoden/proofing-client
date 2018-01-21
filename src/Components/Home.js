import React from 'react';
import './home.css';

const Home = props => (
  <div className="welcome-div">
    <h2>Welcome to Proofing</h2>
    <p>Invite guests to vote which photos from an album can be published.</p>
    <div className="home-photos">
      <div>
        <img
          className="home-photo-yes"
          alt="great view of eiffel tower"
          src="http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1487701021/eiffel-tower-paris-france-EIFFEL0217.jpg?itok=m0MZOYjh"
          width="250"
        />
        <h4>Yay !</h4>
      </div>
      <div>
        <img
          className="home-photo-no"
          alt=" blurry eiffel tower"
          src="https://pashioncase.files.wordpress.com/2014/03/lac201406090247.jpg"
          width="250"
        />
        <h4>or nay</h4>
      </div>
    </div>
    <div className="footer">
      <p>
        {' '}
        This fun project by <a href="https://www.twitter.com/nickfoden">@nickfoden</a>{' '}
      </p>
    </div>
  </div>
);

export default Home;
