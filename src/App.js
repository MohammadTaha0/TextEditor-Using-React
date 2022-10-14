import { useState } from 'react';
import './App.css';
import Alert from './Componenets/Alert';
import Navbar from './Componenets/Navbar'
import TextForm from './Componenets/TextForm';
import About from './Componenets/About';
import Footer from './Componenets/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');
  const [theme, settheme] = useState("#9a73e0");
  document.body.setAttribute("class", "")
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#555';
      showalert("Dark Mode Enable", "success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode Enable", "success")

    }
  }
  const colorChange = (event) => {
    settheme(event.target.value)
    document.body.style.backgroundColor = theme;
  }
  return (
    <Router>
      <div className='position-relative'>
        <Navbar mode={mode} toggleMode={toggleMode} theme={theme} colorChange={colorChange} />
        <Alert alert={alert} />
        <div className="container my-4 minHeight">
          <Routes>
            <Route exact path='/' element={<TextForm h4="Enter the Text Analyze below" mode={mode} alert={showalert} active={'active'} />}>

            </Route>
            <Route exact path='/about' element={<About active='active' />}>
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
