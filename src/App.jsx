import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Onboarding from './components/Onboarding.jsx';
import Discover from './components/Discover.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Onboarding />
        <Discover />
      </main>
      <Footer />
    </div>
  );
}
