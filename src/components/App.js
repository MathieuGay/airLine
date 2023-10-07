import '../styles/App.css';
import Header from "./Header";
import DataCountries from '../dataCountries/DataCountries';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes> {/* Utilisez Routes au lieu de Switch */}
          <Route path="/DataCountries" element={<DataCountries />} /> {/* Utilisez element au lieu de component */}
          {/* Ajoutez d'autres routes si nécessaire */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
