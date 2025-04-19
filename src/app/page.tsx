export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Welcome to OPMA
      </h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-600 mb-4">
          We are dedicated to providing exceptional services and solutions to our clients.
          Our team of experts is committed to delivering the best results for your business.
        </p>
        <p className="text-gray-600">
          With years of experience in the industry, we understand the challenges you face
          and provide tailored solutions to help you succeed.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
          </ul>
          <div className="mt-4">
            <a href="/services" className="text-primary hover:text-blue-600 font-medium">
              Learn more about our services →
            </a>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Experienced team</li>
            <li>Quality service</li>
            <li>Competitive pricing</li>
            <li>Customer satisfaction</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center">
        <a href="/contact" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors inline-block">
          Get in Touch
        </a>
      </div>
    </div>
  );
} 