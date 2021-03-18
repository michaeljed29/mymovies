import {
  FILTER_BY_FAVOURITES,
  SET_MOVIES,
  ADD_REMOVE_TO_FAVOURITES,
  SEARCH_MOVIE,
  SET_LOADING,
  SET_PAGE,
  SET_TOTAL_PAGE,
} from "../actions/types";

const initialState = {
  movies: [],
  favouriteMovies: [],
  searchKey: "",
  isFilteredByFavourite: false,
  loading: true,
  currentPage: 1,
  totalPages: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_FAVOURITES:
      return {
        ...state,
        isFilteredByFavourite: !state.isFilteredByFavourite,
      };
    case SET_MOVIES:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case ADD_REMOVE_TO_FAVOURITES:
      const isAlreadyFavourite = state.favouriteMovies.some(
        (movie) => movie.id === action.payload.id
      );

      if (isAlreadyFavourite) {
        return {
          ...state,
          favouriteMovies: state.favouriteMovies.filter(
            (movie) => movie.id !== action.payload.id
          ),
        };
      }

      return {
        ...state,
        favouriteMovies: [...state.favouriteMovies, action.payload],
      };
    case SEARCH_MOVIE:
      console.log("heheh");
      return {
        ...state,
        currentPage: 1,
        searchKey: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_TOTAL_PAGE:
      return {
        ...state,
        totalPages: action.payload,
      };
    default:
      return state;
  }
};
