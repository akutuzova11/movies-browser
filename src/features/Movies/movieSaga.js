import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularMovies } from "./MovieList/getData";
import {
  startFetch,
  setMovieSuccess,
  setMovieError,
  setMovies,
  setMovieDetails,
  fetchMovieDetails,
  fetchSearchResults,
  fetchPopularMovies,
  setCast,
  setCrew,
} from "./movieSlice";
import { getCast } from "./MoviePage/getCast";
import { getCrew } from "./MoviePage/getCrew";
import { getMovieDetails } from "./MoviePage/getData";
import { getGenres } from "./getGenres";
import { setGenres } from "./genresSlice";
import { getSearchResults } from "../getSearchResultsData";

function* fetchPopularMoviesHandler({ payload: page }) {
  try {
    yield put(startFetch());
    const { results, total_results } = yield call(getPopularMovies, page);
    yield put(setMovies({ page, results, total_pages: 500, total_results }));

    const { genres } = yield call(getGenres);
    yield put(setGenres(genres));

    yield delay(500);
    yield put(setMovieSuccess());
  } catch (error) {
    yield delay(800);
    yield put(setMovieError(`Error fetching movies: ${error.message}`));
  }
}

function* fetchMovieDetailsHandler({ payload: movieId }) {
  try {
    yield put(startFetch());
    const movieDetails = yield call(getMovieDetails, movieId);

    yield put(setMovieDetails(movieDetails));

    const cast = yield call(getCast, movieId);
    const crew = yield call(getCrew, movieId);
    yield put(setCast(cast));
    yield put(setCrew(crew));

    yield delay(500);
    yield put(setMovieSuccess());

  } catch (error) {
    yield delay(800);
    yield put(setMovieError(`Error fetching movie details: ${error.message}`));
  }
}

function* fetchSearchResultsHandler({ payload: { page, searchQuery, searchType } }) {
  try {
    yield put(startFetch());

    const { results, total_pages, total_results } = yield call(getSearchResults, page, searchQuery, searchType);
    const { genres } = yield call(getGenres);

    yield put(setMovies({ page, results, total_pages, total_results }));
    yield put(setGenres(genres));

    yield delay(800);
    yield put(setMovieSuccess());
  } catch (error) {
    console.error("Error fetching movie search results or genres:", error);
    yield put(setMovieError(`Error fetching movie search results: ${error.message}`))
  }
}

export function* movieSaga() {
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
  yield takeLatest(fetchSearchResults.type, fetchSearchResultsHandler);
}
