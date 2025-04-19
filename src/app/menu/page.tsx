export default function Menu() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Menu</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Service 1</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
            Vivamus hendrerit arcu sed erat molestie vehicula.
          </p>
          <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600">
            Learn More
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Service 2</h2>
          <p className="text-gray-600 mb-4">
            Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. 
            Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis.
          </p>
          <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600">
            Learn More
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Service 3</h2>
          <p className="text-gray-600 mb-4">
            Aenean ut erat id nisl porta blandit ornare eget magna. 
            Nunc nec risus in nisi volutpat condimentum.
          </p>
          <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600">
            Learn More
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Service 4</h2>
          <p className="text-gray-600 mb-4">
            Maecenas euismod, ante eu vehicula ultrices, dui nisi faucibus ligula, 
            vitae dignissim massa pede ut risus.
          </p>
          <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
} 