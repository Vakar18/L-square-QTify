import "./section.css";
import Card from "../Card/card";
import { useState } from "react";
import Carousel from "../Carousel/carousel"


export default ({ navId, title, data }) => {

const [isCollaspsed, setIsCollapsed] = useState(false)

  return (
    <div className="section">
      <div className="section-header">
      <h1 className="title">{title}</h1>
      <h1 className="section-toggle-btn"
      onClick={()=>{
        setIsCollapsed(!isCollaspsed)
      }}>{isCollaspsed? "Show All": "Collapse"}</h1>
      </div>
      {isCollaspsed ? <Carousel navId={navId} data={data}/> : <div className="card-container">
        {data.map((cardData) => (
          <Card
            key={cardData.id}
            imgSrc={cardData.image}
            followersCount={cardData.follows}
            label={cardData.title}
            songsCount={cardData.songs.length}
          />
        ))}
      </div>}
    </div>
  );
};
