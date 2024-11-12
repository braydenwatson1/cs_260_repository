import React, { useState, useEffect } from 'react';

export function About() {
  const [quote, setQuote] = useState('');

  // Function to fetch a random quote
  const fetchQuote = async () => {
    try {
      const response = await fetch('/api/quote');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setQuote(data[0].q); // Make sure data structure is correct
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote("Keep pushing forward!"); // Fallback quote in case of error
    }
  };

  useEffect(() => {
    fetchQuote(); // Fetch a quote when the component mounts

    // Set up interval to fetch a new quote every 60 seconds
    const interval = setInterval(fetchQuote, 60000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to only run once on mount

  return (
    <div className='motivational-section'>
      <div id="motivational-picture">
        picture goes here
      </div>
      <div id="motivational-quote">
        <p>{quote}</p>
      </div>
    </div>
  );
}

export default About;