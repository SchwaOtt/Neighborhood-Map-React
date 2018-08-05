import React from 'react';

export default class InfoWindow {

  render() {

    return (

      <div className="info-container">
        <div> { this.props.info.name }

        </div>
      </div>
    );
  }
}
