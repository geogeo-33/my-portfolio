import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">George&apos;s Portfolio</Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/#about" className="hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link href="/#projects" className="hover:text-gray-300">Projects</Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-gray-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
