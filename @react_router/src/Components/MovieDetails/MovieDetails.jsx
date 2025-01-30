import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams(); 

  const movies = [
    {
      title: 'Everybody Loves Jenifa',
      description: 'An intriguing and interesting movie from Funke Akindele.',
      posterURL: './src/assets/Images/elj.jpeg',
      rating: 9.0,
      trailerLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/x4JIoP5FlhU" title="EVERYBODY LOVES JENIFA - OFFICIAL TRAILER - Showing In Cinemas From the 13th Dec" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      title: 'Alakada(Bad and Boujee)',
      description: 'Toyin Aimakhu gives us another dimension of Alakada.',
      posterURL: './src/assets/Images/alakada.jpeg',
      rating: 9.1,
      trailerLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/duG_QD5EE4s" title="Alakada! Bad and Boujee - Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      title: 'Thin Line',
      description: 'A mind blowing movie from Mercy Aigbe.',
      posterURL: './src/assets/Images/thinline.jpeg',
      rating: 9.1,
      trailerLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/FS2GIJIXgCQ" title="THINLINE MOVIE TRAILER PRODUCED BY MERCY AIGBE..#thinline #movie #movie #movierelease #yorubamovies" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      title: 'Lakatabu',
      description: 'Odunlade Adekola gives us another blockbuster to enjoy.',
      posterURL: './src/assets/Images/laka.jpeg',
      rating: 9.1,
      trailerLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VGj-aaClezo" title="LAKATABU Trailer by Odunlade Adekola" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      title: 'Lisabi',
      description: 'Lateef Adedimeji stars in this epic movie.',
      posterURL: './src/assets/Images/lisabi.jpeg',
      rating: 9.1,
      trailerLink:'<iframe width="560" height="315" src="https://www.youtube.com/embed/wB3_z0XqWJw" title="Lísàbí: A Legend Is Born | Official Trailer | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      title: 'Funmilayo Ransom Kuti',
      description: 'Kehinde Bankole dazzles in this epic and interesting movie.',
      posterURL: './src/assets/Images/funmi.jpg',
      rating: 9.1,
      trailerLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/NnYXiiZxQOM" title="FUNMILAYO RANSOME KUTI - OFFICIAL TRAILER - SHOWING IN CINEMAS FROM THE 17TH MAY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    }, 
    {
      title: 'King of Thieves',
      description: 'Femi Adebayo gives us a stunning performance as Ageshinkole.',
      posterURL: './src/assets/Images/kot.jpg',
      rating: 9.9,
      trailerLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/rCBQUzZmGXQ" title="King Of Thieves (Agesinkole) Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      title: 'Seven Doors',
      description: 'Femi Adebayo gives us a stunning performance in his tribulations and adventure to knock the seven doors.',
      posterURL: './src/assets/Images/sevendoors.jpg',
      rating: 9.9,
      trailerLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1iMBlPwSyGE" title="Seven Doors | Main Trailer | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    }
  ];

  const movie = movies.find((movie) => movie.title === id); 

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <div>
         <div
        dangerouslySetInnerHTML={{ __html: movie.trailerLink }}
      />
        <h3>Trailer:</h3>
        <iframe
          width="560"
          height="315"
          src={movie.trailerLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetail;
