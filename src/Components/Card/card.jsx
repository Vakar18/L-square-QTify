import "./card.css";
import Tooltip from "@mui/material/Tooltip";

export default ({ imgSrc, followersCount, label, songsCount, likesCount}) => {
  return (
    <Tooltip title = {songsCount==undefined ? ``: `${songsCount} Songs`} arrow>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-img-frame">
            <img src={imgSrc} className="card-img" />
          </div>
          <div className="card-content">
            <span className="card-content-pill">{followersCount ? `${followersCount} Follows` : `${likesCount} Likes`}</span>
          </div>
        </div>
        <p className="card-label">{label}</p>
      </div>
    </Tooltip>
  );
};
