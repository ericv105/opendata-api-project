import { withScriptjs, withGoogleMap } from 'react-google-maps';
import Map from './components/Map';

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div style={{ width: '100vw', height: '100vw'}}>
      <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC3-N1zFI338MGeLbJxbDTZycPQp9y51Ws'}
        loadingElement={<div style={{ height: "100%"}}/>}
        containerElement={<div style={{ height: "100%"}}/>}
        mapElement={<div style={{ height: "100%"}}/>}
      />
    </div>
  );
}

export default App;
