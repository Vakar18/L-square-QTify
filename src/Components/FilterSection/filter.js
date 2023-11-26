import Carousel from "../Carousel/carousel";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./filter.css"
import { useState } from "react";

export default ({ title, data , filters, executeFiter}) => {

 const [selectedTab, setSelectedTabs] = useState(0)

  return (
    <div className="section">
      <div>
        <h1 className="title">{title}</h1>
      </div>
      <Tabs
      value={selectedTab}
      onChange={(e, value)=> {
        executeFiter(filters[value].key);
        setSelectedTabs(value)
      }}
      TabIndicatorProps={{
        style: {
            backgroundColor: "var(--css-primary)"
        }
      }}
      >
      {filters.map( f => <Tab className='tab' key={f.key} label={f.label}/>)}
      </Tabs>
      <Carousel data={data} navId="filter" />
    </div>
  );
};
