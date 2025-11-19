import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const containerStyle = {
	width: "100%",
	height: "384px", // h-96
};

// Replace with exact coordinates
const businessCoordinates = {
	lat: 9.099382,
	lng: 7.612715,
};

const businessAddress =
	"BLK C40 Maj Gen FO Okonkwo Street, Post Army Estate Phase 5 Kurudu II, Abuja FCT 900109 Nigeria";

const GoogleMapComponent = () => {
	const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string;

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: apiKey,
	});

	if (loadError) {
		return (
			<Card className="p-6">
				<CardHeader>
					<CardTitle className="flex items-center gap-2 text-red-600">
						<MapPin className="w-5 h-5" />
						Error Loading Map
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-gray-600">
						Failed to load Google Maps. Check API key & domain restrictions.
					</p>
				</CardContent>
			</Card>
		);
	}

	if (!isLoaded) {
		return (
			<Card className="p-6">
				<p className="text-gray-600">Loading map...</p>
			</Card>
		);
	}

	return (
		<Card className="overflow-hidden">
			<div className="w-full h-96">
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={businessCoordinates}
					zoom={16}
					options={{
						zoomControl: true,
						streetViewControl: false,
						fullscreenControl: false,
						mapTypeControl: false,
					}}
				>
					<Marker position={businessCoordinates} />
				</GoogleMap>
			</div>

			<div className="p-4 bg-gray-50">
				<p className="text-sm text-gray-600 flex items-center gap-2">
					<MapPin className="w-4 h-4" />
					{businessAddress}
				</p>
			</div>
		</Card>
	);
};

export default GoogleMapComponent;