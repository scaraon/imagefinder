import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, handleChangeModal }) => {
  const imageElem = images.map((elem) => (
    <ImageGalleryItem
      key={elem.id}
      {...elem}
      handleChangeModal={handleChangeModal}
    />
  ));
  return (
    <>
      <ul className="ImageGallery">{imageElem}</ul>
    </>
  );
};

export default ImageGallery;
