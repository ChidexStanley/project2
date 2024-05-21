import './App.css';
import Home from "./Component/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import New from './Component/Main/New'

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/new' element= {<New/>}></Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;