import React from 'react';

import './index.css';
class Loader extends React.Component {
  render() {
    const {className} = this.props;
    const itemClassNames = 'timeline-item '+(className || '');
    return (
      <div className="timeline-wrapper">
        <div className={itemClassNames}>
          <div className="animated-background facebook">
            <div className="background-masker header-top"></div>
            <div className="background-masker header-left"></div>
            <div className="background-masker header-right"></div>
            <div className="background-masker header-bottom"></div>
            <div className="background-masker subheader-left"></div>
            <div className="background-masker subheader-right"></div>
            <div className="background-masker subheader-bottom"></div>
            <div className="background-masker content-top"></div>
            <div className="background-masker content-first-end"></div>
            <div className="background-masker content-second-line"></div>
            <div className="background-masker content-second-end"></div>
            <div className="background-masker content-third-line"></div>
            <div className="background-masker content-third-end"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Loader;