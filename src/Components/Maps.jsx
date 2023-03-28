import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography, Annotation,ZoomableGroup} from "react-simple-maps";


const Maps = () => (
    <div>
        <ComposableMap
            projectionConfig={{
                scale: 220
            }}
            style={{ width: "100%", height: "100vh" }}>
            <ZoomableGroup center={[73.8567, 18.5204]} zoom={2}>

                <Geographies geography="/features.json"
                    fill="#2C065D"
                    stroke="#FFFFFF"
                    strokeWidth={0.5}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} />
                        ))
                    }
                </Geographies>
                <Annotation
                    subject={[2.3522, 48.8566]}
                    dx={-90}
                    dy={-30}
                    connectorProps={{
                        stroke: "white",
                        strokeWidth: 2,
                        strokeLinecap: "round"
                    }}
                >
                    <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
                        {"Paris"}
                    </text>
                </Annotation>
                <Annotation
                    subject={[73.8567, 18.5204]}
                    dx={-90}
                    dy={-30}
                    connectorProps={{
                        stroke: "white",
                        strokeWidth: 2,
                        strokeLinecap: "round"
                    }}
                >
                    <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
                        {"Pune"}
                    </text>
                </Annotation>
            </ZoomableGroup>
        </ComposableMap>
    </div>
);

export default Maps;