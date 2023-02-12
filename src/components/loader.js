import React from 'react';
import './style.css';
import { Dimmer, Loader } from 'semantic-ui-react';

const LoaderComponent = ({weatherData}) => (
    <div>
    <Dimmer active>
      <Loader>Loading..</Loader>
    </Dimmer>
 </div>
);

export default LoaderComponent;