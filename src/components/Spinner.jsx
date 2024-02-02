const Spinner = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="h1 spinner-grow text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
