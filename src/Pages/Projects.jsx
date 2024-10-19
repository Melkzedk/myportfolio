const projects = [
  { name: 'Lipa na Mpesa', link: 'https://github.com/Melkzedk/Lipa-Na-Mpesa' },
  { name: 'Ecommerce Website', link: 'https://github.com/Melkzedk/Ecommerce-Website' },
  { name: 'Personal Blog', link: 'https://github.com/Melkzedk/BLOG' },
  { name: 'Travel and Tour', link: 'https://github.com/Melkzedk/Travel-and-Tour' },
];

export default function Projects() {
  return (
    <div className="p-8 bg-gradient-to-r from-green-100 to-green-300">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.name} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-green-600 mb-2">{project.name}</h3>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
