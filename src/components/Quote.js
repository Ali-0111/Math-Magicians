/* eslint-env es6 */
import React, { useState, useEffect } from 'react';
import Fetch from './Fetch';

function Quote() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    Fetch(setData, setIsLoading, setHasError);
  }, [setData]);

  if (isLoading) {
    return (
      <div className="quote-container">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (hasError) {
    return (
      <div className="quote-container">
        <h2>API is not working...</h2>
      </div>
    );
  }
  if (!isLoading && !hasError) {
    return (
      <div className="quote-container">
        {
          data.map((item) => (
            <h2 key={item.quote}>
              { item.quote }
            </h2>
          ))
        }
      </div>
    );
  }
}

export default Quote;
