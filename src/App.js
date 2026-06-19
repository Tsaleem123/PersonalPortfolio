/**
 * Describes the layout for the whole website. 
 */
import { Navbar } from "./components/Navbar";
import { Welcome } from "./components/Welcome";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
