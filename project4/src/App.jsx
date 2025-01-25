import React, { useState } from 'react';
import MovieList from './Components/MovieList/MovieList';
import Filter from './Components/Filter/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Everybody Loves Jenifa',
      description: 'An intriguing and interesting movie from Funke Akindele.',
      posterURL: './src/assets/Images/elj.jpeg',
      rating: 9.0,
    },

    {
      title: 'Alakada(Bad and Boujee)',
      description: 'Toyin Aimakhu gives us another dimension of Alakada.',
      posterURL: './src/assets/Images/alakada.jpeg',
      rating: 9.1,
    },

   {
    title: 'Thin Line',
    description: 'A mind blowing movie from Mercy Aigbe .',
    posterURL: './src/assets/Images/thinline.jpeg',
    rating: 9.1,
    },

  {
  title: 'Lakatabu',
  description: 'Odunlade Adekola gives us another blockbuster to enjoy.',
  posterURL: './src/assets/Images/laka.jpeg',
  rating: 9.1,
  },

{
title: 'Lisabi',
description: 'Lateef Adedimeji stars in this epic movie.',
posterURL: './src/assets/Images/lisabi.jpeg',
rating: 9.1,
},

{
  title: 'Funmilayo Ransom Kuti',
  description: 'Kehinde Bankole dazzles in this epic and interesting movie.',
  posterURL: './src/assets/Images/funmi.jpg',
  rating: 9.1,
},

]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleAddMovie = () => {
    const newMovie = {
      title: 'Breath of Life',
      description: 'Wale Ojo gives us a stunning performance to give Breath Of Life.',
      posterURL: './src/assets/Images/breath.jpeg',
      rating: 9.9,
      
      // title: 'Queen Latifah',
      // description: 'Will the fake life work in the favor of Wunmi Toriola? Find out in this exciting movie .',
      // posterURL: './src/assets/Images/latifah.jpeg',
      // rating: 9.1,

      // title: 'The Waiter',
      // description: 'A journey to save humanity through space and time.',
      // posterURL: './src/assets/Images/waiter.jpeg',
      // rating: 9.6,

    };

    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    const matchesRating =
      filterRating === '' || movie.rating >= parseFloat(filterRating);
    return matchesTitle && matchesRating;
  });

  return (
    <div className="App">
      <h1>Movie List</h1>

      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />

      <button onClick={handleAddMovie}>Add New Movie</button>

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;

