import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Program from './components/Program/Program';
import Title from './components/title/Title';
import About from './components/About/About';
import Campus from './components/campus/Campus';
import Testimonals from './components/testimonals/Testimonals';
import ContactUS from './components/contact/ContactUS';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Profile />
     <div className='container'>
      <Title subtitle='what we offer'
              title='OUR PROGRAMS'
      />
      <Program />
      <About />
      <Title subtitle='Gallery' title='campus Photos' />
      <Campus />
      <Title subtitle='Testimonals' title='what student says' />

      <Testimonals />
      <Title subtitle='Get in Touch' title='Contact US' />
      <ContactUS />
      <Footer />
     </div>
    </div>
  );
}

export default App;
