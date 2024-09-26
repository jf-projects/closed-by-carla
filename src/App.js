import './App.css';
import FooterMenu from './components/FooterMenu';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { PropertiesProvider } from './components/Context/PropertyContext/PropertyContext';
import { BrokerageProvider } from './components/Context/BrokerageContext/BrokerageContext';
import Brokerage from './components/Brokerage';

function App() {
  return (
    <div>
      <BrokerageProvider>
        <PropertiesProvider>
          <Navbar />
          <Hero />
          <div className='container mx-auto pt-12'>
            <Brokerage />
          </div>
          <div className='container mx-auto pt-12'>
            <Cards />
          </div>
          <ContactForm />
          <Footer />
          <FooterMenu />
        </PropertiesProvider>
      </BrokerageProvider>
    </div >
  );
}

export default App;
