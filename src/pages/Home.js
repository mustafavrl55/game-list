import React, { useContext } from "react";
import Content from "../components/Content";
import Products from "../components/Products";
import { GameContext } from "../context/games-context";

const Home = () => {
  const { linkData } = useContext(GameContext);

  return (
    <div>
      <Content />
      <Products />
    </div>
  );
};

export default Home;

/*{linkData?.map((item) => (
  <Products item={item} />
))}*/
