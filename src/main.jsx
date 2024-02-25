import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import BucketList from "./assets/BucketList.jsx";
import Canvas from "./assets/Canvas.jsx";
import CounterList from "./assets/CounterList.jsx";
import StateQueue from "./assets/Increment.jsx";
import ArtistList from "./assets/InitialArtists.jsx";
import List from "./assets/List.jsx";
import Scoreboard from "./assets/Scoreboard.jsx";
import ShoppingCart from "./assets/ShoppingCart.jsx";
import ShoppingCartPLusMinus from "./assets/ShoppingCartPLusMinus.jsx";
import RequestTracker from "./assets/assets.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RequestTracker />
    <StateQueue />
    <Scoreboard />
    <br />
    <BucketList />
    <br />
    <CounterList />
    <br />
    <ArtistList />
    <br />
    <List />
    <br />
    <ShoppingCart />
    <br />
    <ShoppingCartPLusMinus />
    <br />
    <Canvas />
  </React.StrictMode>
);
