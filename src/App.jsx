import './App.css';
import ImageGallery from './components/ImageGallery';
import AmenitiesGrid from './components/AmenitiesGrid';
import BookingForm from './components/BookingForm';
import AboutSection from './components/AboutSection';
import HostInfo from './components/Hostinfo';
import MapSection from './components/MapSection';
import InfoCards from './components/InfoCards';
import ScheduleDetails from './components/ScheduleDetails';
import PropertySummary from './components/PropertySummary';




function App() {
  return (
    <div className="container">
      <h1>The Sourgy Lounge Shortlet</h1>
      <p> <i><svg  xmlns="http://www.w3.org/2000/svg"  
      width="24"  height="18"  viewBox="0 0 20 24"  fill="none"  stroke="currentColor"  
      stroke-width="1.5"  stroke-linecap="square"  stroke-linejoin="square"  
      class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
        </svg></i>House 40, Road 22, Kado Estate, Abuja</p>

      <div className="full-width-gallery">
        <ImageGallery />
        <PropertySummary />
      </div>

      <div className="main-layout">
        <div className="left-content">
           <AboutSection />
          <AmenitiesGrid />
          <ScheduleDetails />
          <MapSection />
          <InfoCards />
         
        </div>
        <div className="right-sidebar">
          <BookingForm />
          <HostInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
