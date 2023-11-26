import "./card.css";
import Tooltip from "@mui/material/Tooltip";

export default ({ imgSrc, followersCount, label, songsCount }) => {
  return (
    <Tooltip title = {songsCount!=1 ?`${songsCount} Songs`: `${songsCount} Song`} arrow>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-img-frame">
            <img src={imgSrc} className="card-img" />
          </div>
          <div className="card-content">
            <span className="card-content-pill">{followersCount} Follows</span>
          </div>
        </div>
        <p className="card-label">{label}</p>
      </div>
    </Tooltip>
  );
};
