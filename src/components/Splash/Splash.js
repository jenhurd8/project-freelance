import React, { Component } from 'react';

class Splash extends Component {
  render() {
    return (
      <div>
        <div className="splash__logo__info__page">Splash</div>
        <div className="splash__login">
          <a href="http://localhost:3001/login">Login</a>
        </div>
        <div className="splash__right__image__top">Test.</div>
        <div className="splash__right__image__middle">
          <a href="http://via.placeholder.com/350x150" />
        </div>
        <div className="splash__right__image__bottom">
          <a href="https://placeimg.com/640/480/tech" />
        </div>
        <div className="splash__left__image__top">
          <a href="https://placeimg.com/640/480/tech" />
        </div>

        <div className="splash__left__image__middle">
          <a href="https://placeimg.com/640/480/tech" />
        </div>
        <div className="splash__left__image__bottom">
          <a href="https://placeimg.com/640/480/tech" />
        </div>
      </div>
    );
  }
}

export default Splash;
