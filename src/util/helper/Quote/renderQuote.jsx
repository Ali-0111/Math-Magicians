export default function renderQuote(items) {
  return (
    <div className="quote-container">
      {
        items.map((item) => (
          <h2 key={item.quote}>
            { item.quote }
            _
            {item.author}
          </h2>
        ))
      }
    </div>
  );
}
