import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getmoviesuccess } from '../store/moviesStore';

function HomPage() {
  const [movieState, setMovie] = useState(null);
  const history = useHistory();

  const dispatch = useDispatch();

  const { movie } = useSelector((state) => {
    return state.movie;
  });

  useEffect(() => {
    console.log('useeffect');
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API}&language=en-US&sort_by=release_date.desc&page=1`
      )
      .then((res) => {
        console.log('response');
        dispatch(getmoviesuccess(res.data.results));
      })
      .catch((err) => {
        console.log('err:', err);
      });
  });
  return (
    <div>
      {movie &&
        movie.map((item) => (
          <div
            onClick={() => {
              history.push({
                pathname: '/movie-details',
                state: { id: item && item.id },
              });
            }}
            style={{
              backgroundColor: 'white',
              padding: 20,
              border: '2px solid black',
              display: 'flex',
            }}
          >
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt=''
                height={200}
                style={{ marginRight: 20 }}
              />
            </div>
            <div>
              <h3>{item.title}</h3>
              <h4>Vote: {item.vote_average}</h4>
            </div>
          </div>
        ))}
    </div>
  );
}

export default HomPage;
