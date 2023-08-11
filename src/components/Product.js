import React, { useContext, useState } from "react";
import WindowIcon from "@mui/icons-material/Window";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { GameContext } from "../context/games-context";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Product = ({ item, index }) => {
  const { linkData, favoriteCartList, setFavoriteCartList } =
    useContext(GameContext);

  const [selectedCardId, setSelectedCardId] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleFavoriteClick = (cardId, index) => {
    if (selectedCardId === cardId) {
      setSelectedCardId(null);
    } else {
      setSelectedCardId(cardId);

      setFavoriteCartList([...favoriteCartList, linkData[index]]);
    }
  };

  const deneme = selectedCardId === item.id ? "active" : "";
  
  return (
    <div key={item.id} className="product">
      <img
        src={item.thumbnail}
        alt=""
        onClick={() => setModalIsOpen(!modalIsOpen)}
      />
      <div className="product-content">
        <h3>{item.title} </h3>

        <div className="text">
          <p>{item.short_description} </p>
        </div>

        <div className="icons">
          <button>{item.genre} </button>
          <WindowIcon />
          <div
            className={ `favorite-icon ${deneme}`}
            onClick={() => handleFavoriteClick(item.id, index)}
          >
            <FavoriteIcon />
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(!modalIsOpen)}
        contentLabel="Örnek Modal"
      >
        <div className="modal">
          <img src={item.thumbnail} alt="" />
          <div className="product-content">
            <h3>{item.title} </h3>

            <div className="text">
              <p>{item.short_description} </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Product;
