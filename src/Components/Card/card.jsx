import "./card.css";

export default () => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img-frame">
          <img
            src="https://images.pexels.com/photos/37646/new-york-skyline-new-york-city-city-37646.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            className="card-img"
          />
        </div>
        <div className="card-content">
          <span className="card-content-pill">
            100 Follows
          </span>
        </div>
      </div>
      <p className="card-label">New English Songs</p>
    </div>
  );
};
