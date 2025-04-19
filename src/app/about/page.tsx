export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About OPMA</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-4">
          OPMA was founded with a vision to provide exceptional services and solutions to our clients. 
          We believe in innovation, quality, and customer satisfaction.
        </p>
        <p className="text-gray-600 mb-4">
          Our team of experts is dedicated to delivering the best results for our clients, 
          ensuring that their needs are met with the highest standards of excellence.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          Our mission is to provide innovative solutions that help our clients achieve their goals. 
          We strive to be a trusted partner in their success.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Excellence in everything we do</li>
          <li>Innovation and continuous improvement</li>
          <li>Integrity and transparency</li>
          <li>Customer satisfaction</li>
          <li>Team collaboration</li>
        </ul>
      </div>
    </div>
  );
} 