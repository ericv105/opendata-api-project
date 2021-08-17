import { GoogleMap, Marker } from "react-google-maps";
import { fetchData } from "../api";
import React, { useState } from "react";

class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      check: false
    }
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      check: true,
      data: fetchedData
    })
  }
  render() {
    const { check, data } = this.state
    const pic = "data:image/png;base64,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"
    var filteredData = null
    if (check)
      filteredData = data.filter(crime => crime.location != null)
    console.log(data)
    console.log(check)
    return (
      <GoogleMap defaultZoom={10} defaultCenter={{ lat: 45, lng: -75 }}>
        {check && filteredData.map(crime => (
          <Marker
            key={crime.incident_id}
            icon="https://i.imgur.com/cgLGlNc.png"
            position={{
              lat: crime.location.coordinates[1],
              lng: crime.location.coordinates[0],
            }}
            
          />
        ))}
      </GoogleMap>
    );
  }
}

export default Map;
