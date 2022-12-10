/**
 * Describes the layout for the whole website. 
 */
import { Navbar } from "./components/Navbar";
import { Welcome } from "./components/Welcome";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <Projects/>
      <Footer/>      
    </div>
  );
}

export default App;
