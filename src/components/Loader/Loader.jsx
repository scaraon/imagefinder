import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
