import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ReceipeEntry from './components/ReceipeEntry';
import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewRec from './components/ViewRec';

function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
  <Route path='/' exact element={<ReceipeEntry/>}/>
  <Route path='/search' exact element={<Search/>}/>
  <Route path='/view' exact element={<ViewRec/>}/>
</Routes>
</BrowserRouter>
     
    </div>
  );
}

export default App;
