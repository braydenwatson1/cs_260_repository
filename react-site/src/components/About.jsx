import React from 'react';

export function About() {
  const [imageUrl, setImageUrl] = React.useState('');
  const [quote, setQuote] = React.useState('Loading...');

  React.useEffect(() => {
    // Here you will later fetch the image and quote
    setImageUrl(`placeholder.jpg`);
    setQuote('Show me the code');
  }, []);

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        <div id='picture' className='picture-box'>
          <img src={imageUrl} alt='random image' />
        </div>
        <div className='quote-box bg-light text-dark'>
          <p className='quote'>{quote}</p>
        </div>
      </div>
    </main>
  );
}

export default About;