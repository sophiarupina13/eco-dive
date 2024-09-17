import AboutUs from "./components/AboutUs";
import Drone from "./components/Drone";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="main">
      <Header />
      <Main />
      <AboutUs />
      <FAQ />
      <Drone />
      <Footer />
    </div>
  );
}

export default App;
