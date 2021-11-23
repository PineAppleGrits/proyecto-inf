import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingScreen = function () {
  return (
    <div>
      <div
        style={{ backgroundColor: '#191c20', height: '100vh', width: '100vw' }}
      >
        <div className="row">
          <div className="my-auto mx-auto align-self-center col s12 center-align">
            <h4>Loading!</h4>
            <Loader
              type="Rings"
              color="#4F5C61"
              height={200}
              width={200}
              timeout={50000}
            />
            {/* <p className="flow-text grey-text text-darken-1">
            </p> */}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
