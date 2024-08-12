import './App.css';
import FooterMenu from './components/FooterMenu';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { PropertiesProvider } from './components/Context/PropertyContext/PropertyContext';

function App() {
  return (
    <div className="App">
      <PropertiesProvider>
        <Navbar />
        <Hero />
        <div className='container mx-auto pt-12'>
          <Cards />
        </div>
        <ContactForm />
        <Footer />
        <FooterMenu />
      </PropertiesProvider>

    </div>
  );
}

export default App;
