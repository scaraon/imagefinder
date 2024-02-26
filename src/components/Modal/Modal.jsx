const Modal = ({ largeImageURL, close, handleClose }) => {
  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
    if (e.key === "Escape") {
      handleClose();
    }
  };
  return (
    <div onClick={onCloseModal} className="Overlay">
      <div className="Modal">
        <img className="bg" src={largeImageURL} />

        <button onClick={onCloseModal} className="close">
          <img src={close} alt="close" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
