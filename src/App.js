
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Sidebar from "./components/Sidebar/Sidebar"
import Dashboard from "./components/Dashboard/Dashboard"

function App() {
  return (
    <div className="App">
          <Navbar />
          <div className="row ">

            <div className="col l2 m3 s12 #64b5f6 blue lighten-2">
              <Sidebar />
            </div>

            <div className="col l10 m9 s12">
              <Dashboard />
            </div>

          </div>
          <Footer /> 
    </div>
  );
}

export default App;
