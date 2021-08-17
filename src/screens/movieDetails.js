import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getmoviesuccess } from '../store/moviesStore';

function HomPage({ location }) {
  const [movieDetails, setMovie] = useState(null);
  const { id } = location.state;
  const history = useHistory();

  const dispatch = useDispatch();

  const { movie } = useSelector((state) => {
    return state.movie;
  });

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3
/movie/${id}?api_key=${process.env.REACT_APP_API}`
      )
      .then((res) => {
        console.log('response22', res.data);
        setMovie(res.data);
        // dispatch(getmoviesuccess(res.data.results));
      })
      .catch((err) => {
        console.log('err:', err);
      });
  });
  console.log('movie:', movieDetails);
  return (
    <div style={{ margin: 20 }}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${
          movieDetails && movieDetails.poster_path
        }`}
        height={300}
        alt=''
      />
      <h2>{movieDetails && movieDetails.title}</h2>
      <p>{movieDetails && movieDetails.tagline}</p>
      <p>{movieDetails && movieDetails.vote_average}</p>
      <p>{movieDetails && movieDetails.vote_average}</p>
    </div>
  );
}

export default HomPage;
