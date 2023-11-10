import "./card.css";

export default (
  {imgSrc,
  followersCount,
  label}
) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img-frame">
          <img
            src={imgSrc}
            className="card-img"
          />
        </div>
        <div className="card-content">
          <span className="card-content-pill">
           {followersCount} Follows
          </span>
        </div>
      </div>
      <p className="card-label">{label}</p>
    </div>
  );
};
