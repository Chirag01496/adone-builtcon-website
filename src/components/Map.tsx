"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";

const icon = new L.Icon({
	iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
	iconRetinaUrl:
		"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
	shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
	iconSize: [25, 41],
	iconAnchor: [12, 41],
});

export default function Map() {
	const position: LatLngExpression = [28.703428805712424, 77.1217970829397]; // static coordinates

	return (
		<div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
			<MapContainer
				center={position}
				zoom={13}
				scrollWheelZoom={false}
				style={{ height: "100%", width: "100%" }}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
				/>
				<Marker position={position} icon={icon}>
					<Popup>📍 Static Location</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
}
