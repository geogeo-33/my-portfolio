import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-gray-600 font-bold mb-4">Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg shadow-lg">
            <Link href="/myTodoApp">
            <h3 className="text-xl text-gray-600 font-bold">Work 1</h3>
            <p className="text-gray-600">Todo Application</p>
            </Link>
          </div>
          <div className="p-4 border rounded-lg shadow-lg">
            <h3 className="text-xl text-gray-600 font-bold">Work 2</h3>
            <p className="text-gray-600">Coming soon...</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg">
            <h3 className="text-xl text-gray-600 font-bold">Work 3</h3>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
