import React, { FC } from 'react'
import { GoogleMap as GoogleMapWidget, useJsApiLoader, Marker } from '@react-google-maps/api';

interface GoogleMapPropsTypes {
    wrapperClassNames?: string,
}


const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat:  41.118,
    lng: 29.02
  };
 
const GoogleMap: FC<GoogleMapPropsTypes> = (props) => {
    const { wrapperClassNames } = props

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBiTkA-yZ-6ovQMyHqVQN0vxQ6SgJCtjY4"
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map: any) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
      }, [])


      return (
        <div className={`${wrapperClassNames} rounded-[30px] overflow-hidden`}>
            {
                isLoaded ? (
                    <GoogleMapWidget
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={14}
                      onLoad={onLoad}
                      onUnmount={onUnmount}
                    >
                      { /* Child components, such as markers, info windows, etc. */ }
                      <Marker position={center}></Marker>
                      <></>
                    </GoogleMapWidget>
                ) : <></>
            }
        </div>
      )
   

  
}

export default GoogleMap

// import React from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// const google = window.google;
// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "YOUR_API_KEY"
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map: any) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map: any) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//   ) : <></>
// }

// export default React.memo(MyComponent)