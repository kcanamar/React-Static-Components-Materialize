
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Sidebar from "./components/Sidebar/Sidebar"
import Dashboard from "./components/Dashboard/Dashboard"

function App() {
  return (
    <div className="App">
          <Navbar />
          <div className="row">

            <div className="col s3 center-align">
              <Sidebar />
            </div>

            <div className="col s9">
              <Dashboard />
            </div>

          </div>
          <Footer /> 
    </div>
  );
}

export default App;
