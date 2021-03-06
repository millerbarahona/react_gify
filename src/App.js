import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail/index";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

import { Link, Route } from "wouter";

export default function App() {
  return (
    <StaticContext.Provider>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className="App-logo" alt="Giffy logo" src="/logo" />
          </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

//la funcion map de js recorre todo un array y devuelve el valor de cada posicion
