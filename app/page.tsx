import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
