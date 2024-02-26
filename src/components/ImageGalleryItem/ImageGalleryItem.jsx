const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  handleChangeModal,
}) => {
  return (
    <>
      <li
        onClick={() => handleChangeModal(largeImageURL)}
        className="GalleryItem"
      >
        <img className="ImageGalleryImage" src={webformatURL} />
      </li>
    </>
  );
};

export default ImageGalleryItem;
