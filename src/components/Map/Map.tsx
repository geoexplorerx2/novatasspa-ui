import React, { FC } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import  markerIcon  from "../../assets/icons/markerIcon.svg";
import  { ReactComponent as DirectionIcon }  from "../../assets/icons/direction.svg";
import L from 'leaflet';



interface MapProps {
    wrapperClassNames?: string
}



const MarkerIcon = new L.Icon({
    iconUrl: markerIcon,
    // iconAnchor: null,
    // popupAnchor: null,
    // shadowUrl: null,
    // shadowSize: null,
    // shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: ' !bg-transparent'
});



const Map: FC<MapProps> = ({ wrapperClassNames }) => {
    return (
        <div className={`${wrapperClassNames} map  overflow-hidden h-[219px] xl:h-[500px] px-5 lg:px-0`}>
            <div className=' overflow-hidden w-full h-full relative'>
                <a href={`https://www.google.com/maps/dir/Current+Location/41.0398665,28.9853792`} className='absolute right-4 top-4 bg-white bg-opacity-80 border-2 border-[#DDDDDD] px-4 py-2 z-[1005] rounded-[10px] cursor-pointer text-xs flex justify-between items-center space-x-4' target="_blank">
                    <DirectionIcon className='w-5 h-5'/>
                    <span>
                        Directions
                    </span>
                </a>
                <MapContainer center={[41.0398665, 28.9853792]} zoom={15} scrollWheelZoom={false} className='h-full'>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[41.0398665, 28.9853792]} icon={MarkerIcon}>
                        <Popup>
                            Merkez Mh. Şişli - İstanbul, Turkey
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default Map