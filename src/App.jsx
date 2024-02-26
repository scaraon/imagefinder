import fetchImages from "./api/fetchImages";
import { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem";
import Searchbar from "./components/Searchbar/Searchbar";
import Pagination from "./components/Pagination/Pagination";
import Loader from "./components/Loader/Loader";
import NotFound from "./components/NotFound/NotFound";
import Modal from "./components/Modal/Modal";
import right from ".//img/right.png";
import back from ".//img/back.png";
import close from ".//img/close.png";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("forest");
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState(null);
  const count = Math.round(totalHits / 20);

  useEffect(() => {
    fetchImages(setImages, query, page, setTotalHits);
  }, [query, page]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  const handleSubmit = (value) => {
    setQuery(value);
  };

  const handleChangeModal = (largeImageURL) => {
    setShowModal(true);
    setImg(largeImageURL);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const changePage = (value) => {
    if (value === "plus" && count > page) {
      setPage(page + 1);
    }
    if (value === "minus" && page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="App">
      <Searchbar handleSubmit={handleSubmit} />
      {images.length > 0 ? (
        <>
          <ImageGallery images={images} handleChangeModal={handleChangeModal} />
          <Pagination
            changePage={changePage}
            page={page}
            count={count}
            right={right}
            back={back}
          />
        </>
      ) : images.length == 0 ? (
        <NotFound />
      ) : (
        <Loader />
      )}
      {showModal && (
        <Modal handleClose={handleClose} largeImageURL={img} close={close} />
      )}
    </div>
  );
};

export default App;
