import React from 'react';

export function About() {
  const [imageUrl, setImageUrl] = React.useState('');
  const [quote, setQuote] = React.useState('Loading...');

  React.useEffect(() => {
    // Fetch the image and quote
    setImageUrl('placeholder.jpg'); // Replace with your actual image path
    setQuote('Motivation here words blah blah yeah!'); // Placeholder quote
  }, []);

  return (
    <div className='motivational-section'>
      <div className='picture-box'>
        <img src={imageUrl} alt='Random motivational' />
      </div>
      <div className='quote-box bg-light text-dark'>
        <p className='quote'>{quote}</p>
      </div>
    </div>
  );
}

export default About;