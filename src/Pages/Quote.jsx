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

  if (quoteState.isLoading) {
    return renderLoading();
  }

  if (quoteState.hasError) {
    return renderError();
  }

  if (!quoteState.isLoading && !quoteState.hasError) {
    return renderQuote(quoteState.body);
  }
}
