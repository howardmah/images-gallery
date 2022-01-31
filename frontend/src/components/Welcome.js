import React from 'react';
import { Button } from 'react-bootstrap';

const Welcome = () => (
  <div className="my-7 bg-light p-4">
    <h1>Images Gallery</h1>
    <p className="my-3">
      This is simple application that retrieves photos using Unsplash API. In
      order to start enter any search term in the input field.
    </p>
    <p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        Learn more
      </Button>
    </p>
  </div>
);

export default Welcome;
