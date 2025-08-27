import React, { useState } from 'react';
import { movies } from './sahteVeri.js';
import KaydedilenlerListesi from './components/KaydedilenlerListesi';
import Film from './components/Film.jsx';
import { Switch, Route } from 'react-router-dom';
import FilmListesi from './components/FilmListesi.jsx';

export default function App() {

  const [savedMovies, setSavedMovies] = useState([]);
  const [moviesList, setMoviesList] = useState(movies);

  const KaydedilenlerListesineEkle = (movie) => {

    const already = savedMovies.find((item) => item.id === movie.id);
    if (!already) {
      setSavedMovies([...savedMovies, movie]);
    }
  };

  return (
    <div>
      <KaydedilenlerListesi list={savedMovies} />

      <Switch>
        <Route exact path="/">
          <FilmListesi movies={moviesList} />
        </Route>

        <Route path="/filmler/:id">
          <Film
            moviesList={moviesList}
            KaydedilenlerListesineEkle={KaydedilenlerListesineEkle}
          />
        </Route>
      </Switch>
    </div>
  );
}
