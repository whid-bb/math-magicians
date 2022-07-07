import { useState, useEffect } from 'react';

function Quotes() {
  const [quote, setQuote] = useState('Just some random quote');

  useEffect(() => {
    fetch('https://api.quotable.io/random', {
      crossDomain: true,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => setQuote(data.content));
  }, [setQuote]);

  return (
    <div className="site-content">
      <section>
        <h2>{quote}</h2>
      </section>
    </div>
  );
}

export default Quotes;
