import AboutUs from "./components/AboutUs";
import Drone from "./components/Drone";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Tests from "./components/Tests";

function App() {
  return (
    <div className="main">
      <Header />
      <Main />
      <Tests />
      <AboutUs />
      <FAQ />
      <Drone />
      <Footer />
      <Navigation />
    </div>
  );
}

export default App;
