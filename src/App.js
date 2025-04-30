import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import FoodList from './components/FoodList';
import FoodDetails from './components/FoodDetails';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<FoodList />} />
            <Route path="/food/:id" element={<FoodDetails />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;