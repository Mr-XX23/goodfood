import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Partnershipwithus from './components/Partnershipwithus';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GetOrder from './components/GetOrder';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import toplistcard from './components/toplistcard.json'



function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<GetOrder />}/>
          <Route path="/goodfood" element={<Home />}/>
          {toplistcard.map((element)=>{
            return <Route 
            path="/getorder" 
            element={<GetOrder/>}
            nameofResturant={element.nameofResturant}
            nameofLocation={element.nameofLocation}
            opened={element.opened}
            />
          })}
          <Route path="/aboutus" element={<Aboutus />}/>
          <Route path="/partnershipwithus" element={<Partnershipwithus />}/>
          <Route path="/contactus" element={<Contactus />}/>
        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
