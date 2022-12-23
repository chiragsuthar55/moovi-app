const Loader = () => {
  return (
    <div>
      <div
        className="spinner-grow"
        style={{ width: "3rem", height: "3rem", color: "white" }}
        role="status"
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Loader;
