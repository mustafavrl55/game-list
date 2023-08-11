import React, { useContext } from "react";

import { GameContext } from "../context/games-context";
import Product from "./Product";
const Products = ({ item }) => {
  const { linkData } =
    useContext(GameContext);
    
  return (
    <div className="products">
      {/* <div>
        favoriler
        {JSON.stringify(favoriteCartList)}
      </div> */}
      {linkData?.map((item, index) => (
        <div key={index}>
          <Product item={item} index={index} />
        </div>
      ))}
    </div>
  );
};

export default Products;
