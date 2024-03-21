import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'; 
import LoggedInPage from './components/LoggedInPage/LoggedInPage';

function App() {
  return (
    <Router> {/* Use BrowserRouter as Router */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loggedIn" element={<LoggedInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
