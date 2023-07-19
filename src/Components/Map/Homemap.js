import React from 'react'
import {Map} from '@googlemaps/react-wrapper'

function Homemap() {
  return (
    <div>
        <Map
            apiKey="YOUR_API_KEY"
            defaultZoom={8}
            defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
            // defaultOptions={{ styles: customMapStyles, disableDefaultUI: true }}
        />

    </div>
  )
}

export default Homemap