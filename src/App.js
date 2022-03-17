import React from 'react';
import ApiProvider from './context/Api/ApiProvider';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/landing';

function App() {
    return (
      <ApiProvider>
          <Routes>
           <Route exact path="/" element={<Landing/>}/> 
          </Routes>
      </ApiProvider>
    );
  }
export default App;