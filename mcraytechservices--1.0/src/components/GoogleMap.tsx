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
  "BLK C40 NAHS KURUDU II, Und St, Gidan Mangoro, Abuja 900109, Federal Capital Territory";

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
      {/* <div className="w-full h-96">
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
      </div> */}

      {/* <div className="p-4 bg-gray-50">
        <p className="text-sm text-gray-600 flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {businessAddress}
        </p>
      </div> */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2343.6278224834346!2d7.5715210185912625!3d8.92631380352515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0fc0d991d97b%3A0x6a01327204fc5d45!2sMcRay%20Tech%20Services!5e0!3m2!1sen!2sng!4v1767788854225!5m2!1sen!2sng"
        width="600"
        height="450"
        // style="border:0;"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </Card>
  );
};

export default GoogleMapComponent;
