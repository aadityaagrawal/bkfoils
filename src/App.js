import "./App.css";
import FrontPage from "./Pages/First/front_page";
import AboutUs from "./Pages/About/about_page";
import Footer from "./Components/Footer/footer";


function App() {
  return (
    <div className="App">
      <FrontPage />
      <div style={{backgroundColor:"#DBB68F"}}>
      <AboutUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
