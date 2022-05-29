import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ReceipeEntry from './components/ReceipeEntry';
import Search from './components/Search';

function App() {
  return (
    <div>

      <ReceipeEntry/>
      <Search/>
    </div>
  );
}

export default App;
