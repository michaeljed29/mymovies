import {
  SET_MOVIES,
  FILTER_BY_FAVOURITES,
  ADD_REMOVE_TO_FAVOURITES,
  SEARCH_MOVIE,
  SET_LOADING,
  SET_PAGE,
  SET_TOTAL_PAGE,
} from "./types";

export const setMovies = (movies) => {
  return {
    type: SET_MOVIES,
    payload: movies,
  };
};

export const filterByFavourites = () => {
  return {
    type: FILTER_BY_FAVOURITES,
  };
};

export const addRemoveToFavourites = (movie) => {
  return {
    type: ADD_REMOVE_TO_FAVOURITES,
    payload: movie,
  };
};

export const searchMovie = (searchKey) => {
  return {
    type: SEARCH_MOVIE,
    payload: searchKey,
  };
};

export const setLoading = (value) => {
  return {
    type: SET_LOADING,
    payload: value,
  };
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};

export const setTotalPage = (totalPage) => {
  return {
    type: SET_TOTAL_PAGE,
    payload: totalPage,
  };
};
