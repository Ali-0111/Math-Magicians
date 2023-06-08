import { useEffect, useState } from 'react';
import fetchData from '../util/apiServices/Fetch';
import renderLoading from '../util/helper/Quote/renderLoading';
import renderError from '../util/helper/Quote/renderError';
import renderQuote from '../util/helper/Quote/renderQuote';

export default function Quote() {
  const [quoteState, setQuoteState] = useState(
    { body: [], isLoading: true, hasError: false },
  );

  useEffect(() => {
    fetchData(setQuoteState);
  }, []);

  return (
    <section className="quote">
      {quoteState.isLoading && renderLoading()}
      {quoteState.hasError && renderError()}
      {
        !quoteState.isLoading && !quoteState.hasError
        && renderQuote(quoteState.body)
      }
    </section>
  );
}
