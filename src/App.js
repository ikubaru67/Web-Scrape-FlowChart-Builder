import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import Test from './Test';
import Tree from './Tree';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/tree' element={<Tree />} />
        <Route path='/test' element={<Test />} />
      </Route>
    </Routes>
  );
}

export default App;
