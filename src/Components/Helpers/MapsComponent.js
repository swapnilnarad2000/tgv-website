import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';


function MapsComponent() {
  const position = {lat: 22.7539313206254, lng: 75.90536656248695};

  return (
    <div>
      <APIProvider apiKey={''}>
        <Map center={position} zoom={20} className='maps-location'>
          <Marker position={position} />
        </Map>
      </APIProvider>
    </div>
  );
}

export default MapsComponent;