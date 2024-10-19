export default function Skills() {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-100 to-blue-300">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">FrontEnd</h3>
          <p className="text-gray-600">HTML, CSS, React, Bootstrap, Tailwind CSS</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">BackEnd</h3>
          <p className="text-gray-600">PHP, Express.js</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">Database</h3>
          <p className="text-gray-600">MongoDB, SQL</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">Other Skills</h3>
          <p className="text-gray-600">Server Management, ICT Support, Basic Networking</p>
        </div>
      </div>
    </div>
  );
}
