import React, { useState, useEffect } from 'react';

export function About() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);  // State to track loading status

  // Function to fetch a random quote
  const fetchQuote = async () => {
    try {
      const response = await fetch('/api/quote');  // Make sure this is the correct URL for your API
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const text = await response.text(); // Get the raw response text
      let data = {}; 
      
      try {
        data = JSON.parse(text); // Try parsing as JSON
      } catch (parseError) {
        throw new Error('Failed to parse JSON.');
      }

      // Check if the quote data is structured as expected
      if (data && data[0] && data[0].q) {
        setQuote(data[0].q); // Set the quote
      } else {
        throw new Error('Unexpected data structure.');
      }
      
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote("Keep pushing forward!"); // Fallback quote in case of error
    } finally {
      setLoading(false);  // Set loading to false once the fetch is complete
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
        {/* Add the picture here, maybe dynamically loaded */}
        picture goes here
      </div>
      <div id="motivational-quote">
        {loading ? (
          <p>Loading quote...</p> // Display a loading message while fetching
        ) : (
          <p>{quote}</p> // Display the fetched quote
        )}
      </div>
    </div>
  );
}

export default About;
