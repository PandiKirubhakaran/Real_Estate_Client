import React from "react";
import { listData } from "../../lib/dummyData";
import Filter from "../../component/filter/Filter";
import Card from "../../component/card/Card";
import './listPage.scss'
import Map from "../../component/map/Map";

const ListPage = () => {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {
            data.map(item=>(
                <Card key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
      <div className="mapContainer"><Map item={data}/></div>
    </div>
  );
};

export default ListPage;
