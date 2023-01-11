import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Edit } from '../pages/Edit';
import { Home } from '../pages/Home';
import { NewTodo } from '../pages/NewTodo';

function App() {
  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/new" element={<NewTodo />}/>
        <Route path="/edit/:id" element={<Edit />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
