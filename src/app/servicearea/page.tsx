

const ServiceAreaPage = () => {
  const serviceAreas = [
    { name: "Downtown", description: "Fast service in the heart of the city.", lat: 40.7128, lng: -74.0060 },
    { name: "Uptown", description: "Serving all uptown neighborhoods.", lat: 40.8150, lng: -73.9500 },
    { name: "Brooklyn", description: "Full coverage across Brooklyn.", lat: 40.6782, lng: -73.9442 },
  ];

  return (
    <div className="flex flex-col md:flex-row   p-10 m-auto">
      {/* Left Column - Service Details */}
      <div className="w-full md:w-1/2 overflow-y-auto bg-gray-50 p-8">
        <h1 className="text-3xl font-bold mb-4">Our Service Areas</h1>
        <p className="text-gray-600 mb-8">
          We provide top-notch services in multiple neighborhoods. Find your area below and click for more details.
        </p>

        {serviceAreas.map((area, index) => (
          <div key={index} className="mb-6 p-4 bg-white rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold">{area.name}</h2>
            <p className="text-gray-600">{area.description}</p>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Right Column - Map */}
      <div className="w-full md:w-1/2">
        <iframe
          title="Service Area Map"
          src={`https://www.google.com/maps/embed/v1/place?q=New+York&key=YOUR_GOOGLE_MAPS_API_KEY`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ServiceAreaPage;
