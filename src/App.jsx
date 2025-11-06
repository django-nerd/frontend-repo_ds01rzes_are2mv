import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Onboarding from './components/Onboarding';
import Discover from './components/Discover';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Onboarding />
        <Discover />
      </main>
      <Footer />
    </div>
  );
}

export default App;
