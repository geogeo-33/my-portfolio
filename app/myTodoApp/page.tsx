import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import App from './components/App';





export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="py-4 bg-gray-400">
        <App />
        </div>
        <Contact />
      </main>
    </div>
  );
}