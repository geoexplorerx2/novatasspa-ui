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
  lat: 41.118,
  lng: 29.02
};

const GoogleMap: FC<GoogleMapPropsTypes> = (props) => {
  const { wrapperClassNames } = props

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBiTkA-yZ-6ovQMyHqVQN0vxQ6SgJCtjY4"
  })

  const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map: any) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map)
  // }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])


  return (
    <div className={`${wrapperClassNames} rounded-[30px] overflow-hidden px-5 md:px-0`}>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.332082147918!2d28.98280427669703!3d41.039866471346315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7321c848cdd%3A0x2b2f2a2c57e1ec06!2sNovatas%20Crystal%20Spa%20%26%20Hammam!5e0!3m2!1str!2str!4v1681733213093!5m2!1str!2str" width="100%" height="100%" style={{ border: '0' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      {/* {
                isLoaded ? (
                    <GoogleMapWidget
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={14}
                      onLoad={onLoad}
                      onUnmount={onUnmount}
                    >
                      
                      <Marker position={center}></Marker>
                      <></>
                    </GoogleMapWidget>
                ) : <></>
            } */}
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