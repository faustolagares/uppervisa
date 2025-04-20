"use client"

import { useState, useEffect } from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import { Tooltip } from "react-tooltip"

// Office locations
const officeLocations = [
  { name: "New York", coordinates: [-74.006, 40.7128], address: "1250 Broadway, 27th Floor, New York, NY 10001" },
  { name: "Los Angeles", coordinates: [-118.2437, 34.0522], address: "555 W 5th St, Los Angeles, CA 90013" },
  { name: "Miami", coordinates: [-80.1918, 25.7617], address: "1001 Brickell Bay Dr, Miami, FL 33131" },
  { name: "Chicago", coordinates: [-87.6298, 41.8781], address: "233 S Wacker Dr, Chicago, IL 60606" },
  { name: "Houston", coordinates: [-95.3698, 29.7604], address: "1200 Smith St, Houston, TX 77002" },
]

// Using a CDN-hosted GeoJSON to avoid path resolution issues
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

export default function USAMap() {
  const [tooltipContent, setTooltipContent] = useState("")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Loading map...</p>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full">
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 1000 }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#F5F5F5", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
        {officeLocations.map(({ name, coordinates, address }) => (
          <Marker
            key={name}
            coordinates={coordinates}
            data-tooltip-id="office-tooltip"
            data-tooltip-content={`${name}: ${address}`}
            onMouseEnter={() => setTooltipContent(`${name}: ${address}`)}
            onMouseLeave={() => setTooltipContent("")}
          >
            <circle r={6} fill="#E53E3E" stroke="#fff" strokeWidth={2} />
            <text textAnchor="middle" y={-10} style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: "10px" }}>
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
      <Tooltip id="office-tooltip" />
    </div>
  )
}
