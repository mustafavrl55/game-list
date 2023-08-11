import "./App.scss";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Favorites from "./pages/Favorites";
import { GameContext } from "./context/games-context";
import { useEffect, useState } from "react";

function App() {
  const [linkData, setLinkData] = useState();

  const [favoriteCartList, setFavoriteCartList] = useState([])
  

  const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "76d1675f56mshe158c7718a250e6p1f8b57jsn3b31251ff5f8",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const getData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setLinkData(result)
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <GameContext.Provider value={{ linkData, setLinkData, favoriteCartList, setFavoriteCartList}}>
      <div className="App">
        <Header />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popüler" element={<Popular />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </GameContext.Provider>
  );
}

export default App;
