const Projects = () => {
  return (
    <section id="projects" className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p className="text-gray-600">A description of Project 1.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p className="text-gray-600">A description of Project 2.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Project 3</h3>
            <p className="text-gray-600">A description of Project 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
