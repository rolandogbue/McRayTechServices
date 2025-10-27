import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const GoogleMap = () => {
	const [apiKey, setApiKey] = useState("");
	const [showMap, setShowMap] = useState(false);

	const businessAddress =
		"123 Business Growth Street, Innovation District, NY 10001";

	const handleLoadMap = () => {
		if (apiKey.trim()) {
			setShowMap(true);
		}
	};

	if (!showMap) {
		return (
			<Card className="p-6">
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<MapPin className="w-5 h-5" />
						Find Us on the Map
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<p className="text-gray-600">
						To display the interactive map, please enter your Google Maps API
						key:
					</p>
					<div className="flex gap-2">
						<Input
							placeholder="Enter Google Maps API key"
							value={apiKey}
							onChange={(e) => setApiKey(e.target.value)}
							className="flex-1"
						/>
						<Button onClick={handleLoadMap} disabled={!apiKey.trim()}>
							Load Map
						</Button>
					</div>
					<div className="text-sm text-gray-500">
						<p>
							Get your API key from:{" "}
							<a
								href="https://console.cloud.google.com/google/maps-apis"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:underline"
							>
								Google Cloud Console
							</a>
						</p>
					</div>
					<div className="bg-gray-100 p-4 rounded-lg text-center">
						<MapPin className="w-12 h-12 mx-auto text-gray-400 mb-2" />
						<p className="text-gray-600 font-medium">{businessAddress}</p>
						<p className="text-sm text-gray-500 mt-2">
							Map will appear here once API key is provided
						</p>
					</div>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className="overflow-hidden">
			<div className="h-96 w-full">
				<iframe
					src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
						businessAddress
					)}`}
					width="100%"
					height="100%"
					style={{ border: 0 }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
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

export default GoogleMap;
