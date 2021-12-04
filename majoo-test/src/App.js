import React  from 'react'
 
import './App.css';
import {
  BrowserRouter as Router,
  Routes ,
  Route 
   
} from "react-router-dom";
import Home from './screen' 
import { Provider } from 'react-redux';
import redux from '../src/store/redux';
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');
const App=()=> {
  
  return (
    <Provider store={redux}>
    <Router>
      <Routes >
        <Route exact path="/"  element={<Home/>} ></Route>
      
        
      </Routes>
    </Router>
     </Provider>
  );
}
 

export default App;
