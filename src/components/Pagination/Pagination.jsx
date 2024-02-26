const Pagination = ({ changePage, page, count, right, back }) => {
  return (
    <div className="btn">
      <div className="box">
        <button className="Button" onClick={() => changePage("minus")}>
          <img width={"30px"} src={back} alt="left" />
        </button>
        <span>{page === count ? `${page}` : `${page}....${count}`}</span>
        <button className="Button" onClick={() => changePage("plus")}>
          <img width={"30px"} src={right} alt="right" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
