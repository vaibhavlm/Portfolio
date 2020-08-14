import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import 'aos/dist/aos.css';
import Main from  "./Components/MainComponent";
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { configurestore } from './redux/configurestore';
import AOS from 'aos';

const store = configurestore();

function App() {
  AOS.init({
    once:true
  })
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
      <Main />
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
