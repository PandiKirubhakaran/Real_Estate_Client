import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom';
import './Pin.scss'

const Pin = ({item}) => {
    // const position = [51.505, -0.09];
  return (
    
    <Marker position={[item.latitude,item.longitude]}>

    <Popup>
        <div className="popupContainer">
            <img src={item.images} alt=""/>
            <div className="textContainer">
                <Link to={`/${item.id}`}>{item.title}</Link>
                <span className='bed'>{item.bedroom} bedroom</span>
                <p>Rs {item.price}</p>
            </div>
            </div>
    </Popup>
</Marker>
  )
}

export default Pin
