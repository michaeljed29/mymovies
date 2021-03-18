import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const moviePersistConfig = {
  key: "movie",
  storage: storage,
  whitelist: ["favouriteMovies"],
};

export default combineReducers({
  movie: persistReducer(moviePersistConfig, movieReducer),
});
