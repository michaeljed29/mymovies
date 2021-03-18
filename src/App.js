import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";
import { CssBaseline } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import MovieView from "./components/MovieView/MovieView";

// https://api.themoviedb.org/3/search/movie?api_key=fce7eba08a86c342f56ede09cfd188ec&query=ant

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <CssBaseline />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:id" component={MovieView} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
